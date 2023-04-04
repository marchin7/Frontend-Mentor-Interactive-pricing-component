const form = document.querySelector("form");
const slider = document.querySelector(".slider");
const vars = document.querySelector(":root");
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
});

function updateProgresBarColor() {
    let sliderProgres = `${slider.value * 25 - 25}%`;
    vars.style.setProperty("--progres-bar", sliderProgres);
}

function getResult() {
    let index = slider.value - 1;
    if (toggleMonthly.checked) {
        render(
            pricePlan[index].pageViews,
            `${pricePlan[index].price.toLocaleString("en-US", { style: "currency", currency: "USD" })}`
        );
    } else {
        render(
            pricePlan[index].pageViews,
            `${(pricePlan[index].price - (pricePlan[index].price / 100) * discountPercent).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            })}`
        );
    }
    updateProgresBarColor();
}

function render($pages, $price) {
    pageViews.innerText = $pages;
    price.innerText = $price;
}
