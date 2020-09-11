const form = document.getElementById('form')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    validate()
})

function validate () {
    const email = document.getElementById('email')
    const messageErrorEmail = document.getElementById('input-error-email')
    const messageErrorEmpty = document.getElementById('input-error-empty')
    var regex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (email.value === "") {
        email.classList.add('input-error')
        messageErrorEmail.classList.remove('show-error-email')
        messageErrorEmpty.classList.add('show-error-empty')

    } else {
        email.classList.remove('input-error')
        messageErrorEmpty.classList.remove('show-error-empty')

        if (regex.test(email.value.trim())) {
            email.classList.remove('input-error')
            messageErrorEmail.classList.remove('show-error-email')
        } else {
            email.classList.add('input-error')
            messageErrorEmail.classList.add('show-error-email')
        }

    }
}