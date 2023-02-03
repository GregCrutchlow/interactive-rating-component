const ratings = document.querySelector("input");
const submit = document.querySelector("button");
const thanks = document.querySelector(".thank-you");
const select = document.querySelector(".component-container");

let ratingValue;

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        ratingValue = rating.value;
        submit.disabled = false;
    })
})

submit.addEventListener("click", (event) => {
    event.preventDefault();

    const numberDisplay = document.querySelector("span");
    numberDisplay.innerHTML = ratingValue + '';

    thanks.style.display = "block";
    ratings.style.display = "none";

    submit.disabled = true;
})