const form = document.querySelector("#sign-in-form");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const error = document.querySelector("#error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const invalid = !login.value.trim() || !password.value;
    error.classList.toggle("visible", invalid);

    if (invalid) {
        (!login.value.trim() ? login : password).focus();
    }
});
