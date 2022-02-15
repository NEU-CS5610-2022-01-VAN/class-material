const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("🐛 IT GOT CLICKED!!!");
}

const hooray = () => console.log("HOORAY!");

butts.addEventListener("click", handleClick);
coolButton.addEventListener("click", hooray);

butts.removeEventListener("click", handleClick);

const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(e) {
  const button = e.target;
  // console.log(button.textContent);
  // console.log(button.dataset.price);

  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);

  e.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener("click", function () {
  console.log("window clicked");
});

const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter", (e) => {
  console.log(e.currentTarget);
  console.log(this);
});