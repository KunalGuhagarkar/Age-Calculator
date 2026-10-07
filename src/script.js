const { DateTime } = luxon;

const dateInput = document.querySelector("input");
const calculateAgeBtn = document.querySelector("button");
const outputContainer = document.querySelector(".age-container");

calculateAgeBtn.addEventListener("click", () => {
    dateInput.value.length === 0 &&
        (outputContainer.classList.remove("hidden"),
        (outputContainer.innerHTML = `Invalid Date`));
        
    const dateArr = dateInput.value.split("-");
    const dateObj = DateTime.now()
        .minus({ day: dateArr[0], month: dateArr[1], year: dateArr[2] })
        .toObject();

    if (
        dateObj.month > 12 ||
        dateObj.month < 1 ||
        dateObj.year > DateTime.now().year ||
        dateObj.year < 1 ||
        dateObj.day > 31 ||
        dateObj.day < 1
    ) {
        outputContainer.classList.remove("hidden");
        outputContainer.innerHTML = `Invalid Date`;
    } else {
        outputContainer.classList.remove("hidden");
        outputContainer.innerHTML = `You are <b>${dateObj.year} years ${dateObj.month}</b> months old`;
    }
});
