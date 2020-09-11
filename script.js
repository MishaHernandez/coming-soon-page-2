const form = document.getElementById('form')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    validate()
})

function validate () {
    const email = document.getElementById('email')
    const message = document.getElementById('input-message')
    var regex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log(email)
    if (regex.test(email.value.trim())) {
        email.classList.remove('input-error')
        message.classList.remove('show-message')
    } else {
        email.classList.add('input-error')
        message.classList.add('show-message')
    }
}