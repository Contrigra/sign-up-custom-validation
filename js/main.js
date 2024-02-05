import countryList from "./countryList.js";

const form = document.querySelector('.main-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    new FormData(form);
});


loadCountryOptions(countryList);

function loadCountryOptions(countryArr) {
    const datalist = document.querySelector('#countries');
    for (let value of countryArr) {
        let option = document.createElement('option');
        option.value = value
        datalist.appendChild(option);
    }
}

['formdata', 'focusout'].forEach(usernameValidator);

function usernameValidator(eventType) {
    const usernameField = document.querySelector("[name='username']");
    usernameField.addEventListener(eventType, () => {
        if (usernameField.value.length < 6) {
            usernameField.setCustomValidity("At least 6 characters required!")
        } else {
            usernameField.setCustomValidity('')
            usernameField.reportValidity()
        }
    })
}

['focusout', 'formdata'].forEach(emailValidator);

function emailValidator(eventType) {
    const emailField = document.querySelector("[name='email']");
    emailField.addEventListener(eventType, () => {
        if (!emailField.value.includes('@')) {

            emailField.setCustomValidity("Every email address contains @");
        } else {
            emailField.setCustomValidity('');
            emailField.reportValidity()
        }
    })
}

['focusout', 'formdata'].forEach(countryValidator);

function countryValidator(eventType) {
    const countryField = document.querySelector("[name='country']");
    countryField.addEventListener(eventType, () => {
            if (!countryList.includes(countryField.value)) {
                countryField.setCustomValidity("Choose a country from the list!");
                countryField.reportValidity()
            } else {
                countryField.setCustomValidity('');
                countryField.reportValidity();
            }
        }
    )
}

['focusout', 'formdata'].forEach(zipcodeValidator);

function zipcodeValidator(eventType) {
    const zipcodeField = document.querySelector("[name='zipcode']");
    zipcodeField.addEventListener(eventType, () => {
        if (zipcodeField.value.length < 3) {
            zipcodeField.setCustomValidity('Zipcode is too short!');
            zipcodeField.reportValidity()
        } else {
            zipcodeField.setCustomValidity('');
            zipcodeField.reportValidity();
        }
    })
}

['focusout', 'formdata'].forEach(validatePassword);

function validatePassword(eventType) {
    const password1 = document.querySelector("[name='password_1']");
    const password2 = document.querySelector("[name='password_2']");
    password2.addEventListener(eventType, () => {
        if (password2.value !== password1.value) {
            password2.setCustomValidity('Passwords do not match!')
        } else {
            password2.setCustomValidity('');
            password2.reportValidity();
        }
    })
}