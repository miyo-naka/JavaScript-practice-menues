const scrollButton = document.getElementById("scroll-button");

function scrollTop(target) {
  target.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
scrollTop(scrollButton);

//関数を使わないと下記の書き方もできる。
// button.addEventListener("click", () => {
//   window.scroll({
//     top: 0,
//     behavior: "smooth",
//   });
// });

//スクロール量を判定してボタンを表示・非表示
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollButton.classList.add("is-active");
  } else {
    scrollButton.classList.remove("is-active");
  }
});
