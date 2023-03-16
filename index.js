const slider = document.querySelector(".slider");
const vars = document.querySelector(":root");
const pageViews = document.querySelector("#pageviews");
const form = document.querySelector("form");
const price = document.querySelector("#price");
const toggleSwitch = document.querySelector("#toggle-switch");
const labelMonthly = document.querySelector('.label-monthly');
const labelYearly = document.querySelector('.label-yearly');

calculate();

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

toggleSwitch.addEventListener("input", () => {
    calculate();
});

labelMonthly.addEventListener('click', ()=>{
    toggleSwitch.value = '0'
    calculate();
})

labelYearly.addEventListener('click', ()=>{
    toggleSwitch.value = '1'
    calculate();
})

slider.addEventListener("input", calculate);


function calculate() {
    let sliderPercentage = `${slider.value * 25 - 25}%`;
    vars.style.setProperty("--progres-bar", sliderPercentage);

    if (toggleSwitch.value == 0) {
        if (slider.value == 1) {
            getResult("10K", "$8.00");
        } else if (slider.value == 2) {
            getResult("50K", "$12.00");
        } else if (slider.value == 3) {
            getResult("100K", "$16.00");
        } else if (slider.value == 4) {
            getResult("500K", "$24.00");
        } else if (slider.value == 5) {
            getResult("1M", "$36.00");
        }
    } else {
        if (slider.value == 1  ) {
            getResult("10K", "$6.00");
        } else if (slider.value == 2) {
            getResult("50K", "$9.00");
        } else if (slider.value == 3) {
            getResult("100K", "$12.00");
        } else if (slider.value == 4) {
            getResult("500K", "$18.00");
        } else if (slider.value == 5) {
            getResult("1M", "$27.00");
        }
    }

    function getResult(pages, $price) {
        pageViews.innerHTML = pages;
        price.innerHTML = $price;
    }
}



