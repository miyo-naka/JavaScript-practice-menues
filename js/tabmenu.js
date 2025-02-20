const tabs = document.getElementsByClassName("tab-menu__item");

function tabSwitch() {
  //ボタンのクラス削除
  document.getElementsByClassName("active")[0].classList.remove("active");
  //ボタンにクラス付与
  this.classList.add("active");
  //コンテンツのクラス削除
  document.getElementsByClassName("show")[0].classList.remove("show");
  //クリックした要素の順番を取得
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document
    .getElementsByClassName("tab-content__item")
    [index].classList.add("show");
}

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", tabSwitch);
}
