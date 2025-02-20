const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const lists = document.querySelectorAll(".list");
const totalSlides = lists.length;
let count = 0;

const indicator = document.getElementById("indicator");
let autoPlayInterval;

// 関数を定義
function nextClick() {
  slide.classList.remove(`slide${(count % totalSlides) + 1}`);
  count++;
  slide.classList.add(`slide${(count % totalSlides) + 1}`);
}

function prevClick() {
  slide.classList.remove(`slide${(count % totalSlides) + 1}`);
  count--;
  slide.classList.add(`slide${(count % totalSlides) + 1}`);
}

function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor =
      i === count % totalSlides ? "#000" : "#fff";
  }
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 3000);
}
function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// クリックイベントのリスナーを登録
next.addEventListener("click", () => {
  nextClick();
  updateListBackground();
});
prev.addEventListener("click", () => {
  prevClick();
  updateListBackground();
});

indicator.addEventListener("click", (event) => {
  if (event.target.classList.contains("list")) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${(count % totalSlides) + 1}`);
    count = index;
    slide.classList.add(`slide${(count % totalSlides) + 1}`);
    updateListBackground();
  }
});

// ↓自動再生を実行
startAutoPlay();
