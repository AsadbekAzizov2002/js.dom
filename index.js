const form = document.getElementById("form")
const error = document.getElementById("error");

const passVlid = (passValue) => {
    const pattern = /^[a-zA-Z0-9]{4,}/;
    const result = pattern.test(passValue);
    if (!result) {
        error.textContent = "Input value must at least 5 characters";
    }
    else {
        error.textContent = "";
        return result
    }
}


const hendleSubmit = (e) => {
    e.preventDefault();
    const emailVal = e.target[0].value;
    const passValue = e.target[1].value.trim();

    if (emailVal.trim().length !== 0 && passValue) {
        window.location.href = "main.html"
    }
};
form.addEventListener("submit", hendleSubmit);



