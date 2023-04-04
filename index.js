const slider = document.querySelector(".slider");
const vars = document.querySelector(":root");
const pageViews = document.querySelector("#pageviews");
const form = document.querySelector("form");
const price = document.querySelector("#price");
const toggleSwitch = document.querySelector("#toggle-switch");
const labelMonthly = document.querySelector(".label-monthly");
const labelYearly = document.querySelector(".label-yearly");

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

toggleSwitch.addEventListener("input", () => {
    getResult();
});

labelMonthly.addEventListener("click", () => {
    toggleSwitch.value = "0";
    getResult();
});

labelYearly.addEventListener("click", () => {
    toggleSwitch.value = "1";
    getResult();
});

function updateProgresBarColor() {
    let sliderProgres = `${slider.value * 25 - 25}%`;
    vars.style.setProperty("--progres-bar", sliderProgres);
}

function getResult() {
    let index = slider.value - 1;
    if (toggleSwitch.value == 0) {
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
