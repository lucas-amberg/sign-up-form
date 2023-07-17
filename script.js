const passwordField = document.querySelector("#pwd");
const confirmPasswordField = document.querySelector("#c-pwd");
const confirmPasswordText = document.querySelector(".confirm-password");
const submitButton = document.querySelector("button");

function checkPassword() {
    let password = passwordField.value;
    let confirmPassword = confirmPasswordField.value;
    if (password !== confirmPassword) {
        confirmPasswordText.textContent = "Passwords do not match";
        submitButton.disabled = true;
        confirmPasswordText.style.display="inline";
        confirmPasswordField.style.backgroundColor = "rgba(255, 0, 0, 0.411)";
        confirmPasswordField.style.borderColor = "rgb(155, 58, 58)";
        if (password === "") {
            passwordField.style.backgroundColor = "white";
            passwordField.style.borderColor = "#AAA";
        }
    }
    else {
        confirmPasswordText.textContent = "";
        submitButton.disabled = false;
        confirmPasswordText.style.display="none";
        confirmPasswordField.style.backgroundColor = "rgba(50, 177, 0, 0.336)";
        confirmPasswordField.style.borderColor = "#266417";
        passwordField.style.backgroundColor = "rgba(50, 177, 0, 0.336)";
        passwordField.style.borderColor = "#266417";
        if (confirmPassword === "" && password === "") {
            confirmPasswordField.style.backgroundColor = "white";
            confirmPasswordField.style.borderColor = "#AAA";
            passwordField.style.backgroundColor = "white";
            passwordField.style.borderColor = "#AAA";
        }
    }
    if (password !== "" && password.length < 6) {
            passwordField.style.backgroundColor = "rgba(255, 0, 0, 0.411)";
            passwordField.style.borderColor = "rgb(155, 58, 58)";
        }
    if (confirmPassword !== "" && confirmPassword.length < 6) {
            confirmPasswordField.style.backgroundColor = "rgba(255, 0, 0, 0.411)";
            confirmPasswordField.style.borderColor = "rgb(155, 58, 58)";
    }

}