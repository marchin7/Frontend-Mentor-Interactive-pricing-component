const form = document.querySelector("form");
const slider = document.querySelector(".slider");
const root = document.querySelector(":root");
const pageViews = document.querySelector("#pageviews");
const price = document.querySelector("#price");
const toggleMonthly = document.querySelector(".input-monthly");

let pricePlan = [
  { pageViews: "10K", price: 8 },
  { pageViews: "50K", price: 12 },
  { pageViews: "100K", price: 16 },
  { pageViews: "500K", price: 24 },
  { pageViews: "1M", price: 36 },
];

let discountPercent = 25;

getResult();

form.addEventListener("input", (e) => {
  e.preventDefault();
  getResult();
  updateSliderColor();
});

function render($pages, $price) {
  pageViews.innerText = $pages;
  price.innerText = $price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function getResult() {
  toggleMonthly.checked
    ? render(pricePlan[slider.value - 1].pageViews, pricePlan[slider.value - 1].price)
    : render(
        pricePlan[slider.value - 1].pageViews,
        pricePlan[slider.value - 1].price - (pricePlan[slider.value - 1].price / 100) * discountPercent
      );
}

function updateSliderColor() {
  root.style.setProperty("--progres-bar-fill", `${slider.value * 25 - 25}%`);
}
