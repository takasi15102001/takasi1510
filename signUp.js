const signUp = document.getElementById("signUpForm");

const EMAIL_REQUIRED = "Please enter your email";
const PASSWORD_REQUIRED = "Please enter your password";
const EMAIL_INVALID = "Please enter a correct email address format";

const messageEmailError = email.parentNode.querySelector("p");
const messagePasswordError = password.parentNode.querySelector("p");


// show a message with a type of the input
function showMessage(input, message, type) {
    // get the small element and set the message
    const msg = input.parentNode.querySelector("p");
    msg.innerText = message;
    // update the class for the input
    // input.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}

function hasValue(input, message) {
    if (input.value.trim() === "") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    // check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    // validate email format
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;
}

signUp.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();

    const currentEmail = signUp.elements["email"];
    const currentPassword = signUp.elements["password"];

    // validate the form
    let emailValid = validateEmail(currentEmail, EMAIL_REQUIRED, EMAIL_INVALID);
    let passwordValid = hasValue(currentPassword, PASSWORD_REQUIRED);
    // if valid, submit the form.
    if (emailValid && passwordValid) {

        if (currentEmail.value === "duongkim@gmil.com" && currentPassword.value === "1234") {
            localStorage.setItem("isSignUp", true);
            window.location.replace(`${window.location.origin}/PLC-Cotrol.html`);
            return;
        }

        return alert("Email hoac password khong dung. Vui long dang nhap lai");
    }
});

let plc = document.getElementById("plc");
plc.addEventListener("click", () => {
    const isSignUp = localStorage.getItem("isSignUp");
    if (isSignUp) {
        window.location.href = "./PLC-Cotrol.html"
    } else {
        alert("Vui long dang nhap de thuc hien duoc chac nang nay");
    }
});
