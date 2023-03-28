const slider = document.querySelector(".slider");
const vars = document.querySelector(":root");
const pageViews = document.querySelector("#pageviews");
const form = document.querySelector("form");
const price = document.querySelector("#price");
const toggleSwitch = document.querySelector("#toggle-switch");
const labelMonthly = document.querySelector(".label-monthly");
const labelYearly = document.querySelector(".label-yearly");

let pricePlan = [
    { pages: "10K", price: 8 },
    { pages: "50K", price: 12 },
    { pages: "100K", price: 16 },
    { pages: "500K", price: 24 },
    { pages: "1M", price: 36 },
];

let discountPercent = 25;

calculate();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculate();
});

toggleSwitch.addEventListener("input", () => {
    calculate();
});

labelMonthly.addEventListener("click", () => {
    toggleSwitch.value = "0";
    calculate();
});

labelYearly.addEventListener("click", () => {
    toggleSwitch.value = "1";
    calculate();
});

slider.addEventListener("input", calculate);

function updateProgresBarColor() {
    let sliderProgres = `${slider.value * 25 - 25}%`;
    vars.style.setProperty("--progres-bar", sliderProgres);
}

function calculate() {
    updateProgresBarColor();

    for (i = 0; i < pricePlan.length; i++) {
        let index = Number(slider.value) - 1;
        if (toggleSwitch.value == 0) {
            renderResult(
                pricePlan[index].pages,
                `${pricePlan[index].price.toLocaleString("en-US", { style: "currency", currency: "USD" })}`
            );
        } else {
            renderResult(
                pricePlan[index].pages,
                `${(pricePlan[index].price - (pricePlan[index].price / 100) * discountPercent).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}`
            );
        }
    }
}

function renderResult(page, $price) {
    pageViews.innerText = page;
    price.innerText = $price;
}
