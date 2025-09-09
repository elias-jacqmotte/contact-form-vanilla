const form         = document.querySelector('form')


const firstName    = document.querySelector("input[id='first-name']");
const lastName     = document.querySelector("input[id='last-name']");
const email        = document.querySelector("input[id='email']");
const query        = document.querySelector("#radio-form p")
const query1       = document.querySelector("input[id='type-general']");
const query2       = document.querySelector("input[id='type-support']");
const message      = document.querySelector("textarea");
const checkbox     = document.querySelector("input[id='consent']");
const checkboxError = document.querySelector("#checkbox-form p")

const submit       = document.querySelector("input[id='submit']")

const toast        = document.querySelector('.toast')

submit.addEventListener('click', event => {
    // Check each element separately:
    event.preventDefault()
    let countCorrect = 0;

    if ( firstName.value === "" ) {
        firstName.classList.add("fault");
        firstName.nextElementSibling.hidden = false;
    } else {
        firstName.classList.remove("fault");
        firstName.nextElementSibling.hidden = true;
        countCorrect += 1;
    }

    if ( lastName.value === "" ) {
        lastName.classList.add("fault");
        lastName.nextElementSibling.hidden = false;
    } else {
        lastName.classList.remove("fault");
        lastName.nextElementSibling.hidden = true;
        countCorrect += 1;
    }

    if ( email.value === "" ) {
        email.classList.add("fault");
        email.nextElementSibling.hidden = false;
        email.nextElementSibling.nextElementSibling.hidden = true;
    } else if ( email.checkValidity() == false ) {
        email.classList.add("fault");
        email.nextElementSibling.hidden = true
        email.nextElementSibling.nextElementSibling.hidden = false;
    } else {
        email.classList.remove("fault");
        email.nextElementSibling.hidden = true;
        email.nextElementSibling.nextElementSibling.hidden = true;
        countCorrect += 1;
    }

    if ( query1.checked == false & query2.checked == false ) {
        query.hidden = false;
    } else {
        query.hidden = true;
        countCorrect += 1;
    }

    if ( message.value === "" ) {
        message.classList.add("fault");
        message.nextElementSibling.hidden = false;
    } else {
        message.classList.remove("fault");
        message.nextElementSibling.hidden = true;
        countCorrect += 1;
    }

    if ( checkbox.checked == false ) {
        checkboxError.hidden = false;
    } else {
        checkboxError.hidden = true;
        countCorrect += 1;
    }

    // Evaluate if everything is correct!
    if ( countCorrect == 6 ) {
        form.reset()
        toast.classList.remove('hidden')

        window.setTimeout(() => {
            toast.classList.add('hidden');
        }, 5000);
    }
})