const form = document.getElementById('notify')
const emailAddress = document.querySelector('.email')
const submit = document.querySelector('.btn')
const small = document.querySelector('.error')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const email = emailAddress.value.trim()
    if(!isEmailValid(email) || email == "") {
        form.classList.add('invalid');
        small.innerText = `Please provide a vald email address`;
    } else {
        form.classList.remove('invalid');
        small.innerText = ``;
    }
})

function isEmailValid(email) { 
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}