import "./styles.css";

//オンクリック時に実行される関数
const onClickAdd = () => {
  const inputText = getInputText();
  addToIncompleteList(inputText);
};
//追加ボタンにオンクリックイベントを付与
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", onClickAdd);

//インプット値の取得
const getInputText = () => {
  const input = document.querySelector("#add-text");
  const inputText = input.value; //textboxの値の取得
  // console.log(inputText);
  input.value = ""; //textboxの値の初期化
  console.log(inputText);
  return inputText;
};

const removeFromList = (target, listName) => {
  const parent = target.parentNode;
  document.querySelector(listName).removeChild(parent);
};

const addToCompleteList = (inputText) => {
  const listName = "#complete-list";
  // btn生成
  const revbtn = document.createElement("button");
  revbtn.innerText = "戻す";
  revbtn.addEventListener("click", () => {
    removeFromList(revbtn, listName);
    addToIncompleteList(inputText);
  });
  const btns = [revbtn];
  console.log(btns);
  createListElement(inputText, btns, listName);
};

const addToIncompleteList = (inputText) => {
  const listName = "#incomplete-list";
  const cmpbtn = document.createElement("button");
  cmpbtn.innerText = "完了";
  cmpbtn.addEventListener("click", () => {
    removeFromList(cmpbtn, listName); //完了ボタンの親タグを未完了TODOから削除
    addToCompleteList(inputText); //完了したTODOにタスクを追加
  });
  const delbtn = document.createElement("button");
  delbtn.innerText = "削除";
  delbtn.addEventListener("click", () => {
    removeFromList(delbtn, listName); //削除ボタンの親タグを未完了TODOから削除
  });
  const btns = [cmpbtn, delbtn];
  console.log(btns);
  createListElement(inputText, btns, listName);
};

const createListElement = (inputText, btns, listName) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  div.appendChild(li);
  btns.map((btn) => div.appendChild(btn));
  console.log(div);
  console.log(listName);
  document.querySelector(listName).appendChild(div);
  console.log(document.querySelector(listName));
};
