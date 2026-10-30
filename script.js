// 作品分類篩選
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(function (button) {
  button.onclick = function () {
    buttons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    cards.forEach(function (card) {
      const show =
        button.dataset.cat === "all" || button.dataset.cat === card.dataset.cat;
      card.style.display = show ? "block" : "none";
    });
  };
});

// 點作品跳出視窗
const popup = document.getElementById("popup");

cards.forEach(function (card) {
  card.onclick = function () {
    popup.querySelector("img").src = card.querySelector("img").src;
    popup.querySelector("h3").textContent =
      card.querySelector("h3").textContent;
    popup.querySelector("p").textContent = card.dataset.text;
    popup.showModal();
  };
});

// 表單送出
document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  alert("收到了，謝謝你的訊息！");
  this.reset();
};
