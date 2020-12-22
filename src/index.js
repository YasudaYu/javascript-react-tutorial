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
  return inputText;
};

//リストからの指定の要素を削除
const removeFromList = (target, listName) => {
  const parent = target.parentNode;
  document.querySelector(listName).removeChild(parent);
};

//完了リストへタスクを追加
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
  createListElement(inputText, btns, listName);
};

//未完了リストへタスクを追加
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
  createListElement(inputText, btns, listName);
};

//リストの要素の生成
const createListElement = (inputText, btns, listName) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  div.appendChild(li);
  btns.map((btn) => div.appendChild(btn));
  document.querySelector(listName).appendChild(div);
};
