const modal = document.querySelector(".modal");
const open = document.querySelector(".modal-open");
const close = document.querySelector(".modal-close");

//「開くボタン」をクリックしてモーダルを開く
function modalOpen() {
  modal.classList.add("is-active");
}
open.addEventListener("click", modalOpen);

//下記のように書いても同じ
// open.addEventListener("click", () => {
//   modal.classList.add("is-active");
// });

//「閉じるボタン」をクリックしてモーダルを閉じる
function modalClose() {
  modal.classList.remove("is-active");
}
close.addEventListener("click", modalClose);

//「モーダルの外側」をクリックしてモーダルを閉じる
// modal-containerをクリックしてもe.target == modal-containerとなるので、除外される
function modalOut(e) {
  if (e.target == modal) {
    modal.classList.remove("is-active");
  }
}
modal.addEventListener("click", modalOut);
