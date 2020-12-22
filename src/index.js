import "./styles.css";

const onClickAdd = () => {
  const input = document.querySelector("#add-text");
  const inputText = input.value; //textboxの値の取得
  // console.log(inputText);
  input.value = ""; //textboxの値の初期化

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // btn生成
  const cmpbtn = document.createElement("button");
  cmpbtn.innerText = "完了";
  cmpbtn.addEventListener("click", () => {
    alert("完了");
  });
  const delbtn = document.createElement("button");
  delbtn.innerText = "削除";
  delbtn.addEventListener("click", () => {
    //削除ボタンの親タグを未完了TODOから削除
    const deleteTarget = delbtn.parentNode;
    // console.log(deleteTarget);
    document.querySelector("#incomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(cmpbtn);
  div.appendChild(delbtn);

  // 未完了リストに追加
  document.querySelector("#incomplete-list").appendChild(div);
};

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", onClickAdd);
