const form = document.querySelector('form')
const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputpasswordTwo = document.getElementById('passwordtwo');

form.addEventListener('submit', (event)=> {
    event.preventDefault()

    checkInputs()
})

function checkInputs(){
    const usernameValue = inputUsername.value.trim();
    const emailValue = inputEmail.value.trim();
    const passwordValue = inputPassword.value.trim();
    const passwordtwoValue = inputpasswordTwo.value.trim();


    if(usernameValue === ''){
        errorValidation(inputUsername, 'Fill up with your username')
    }else{
        successValidation(inputUsername)
    }

    if(emailValue === ''){
        errorValidation(inputEmail, 'Fill up with your email')
    }else if(emailValue.length < 6){
        errorValidation(inputEmail, 'Your email should have more caracteres. Example: abc@gmail.com')
    }else{
        successValidation(inputEmail)
    }

    if(passwordValue === ''){
        errorValidation(inputPassword, 'Fill up with your password')
    }else if (passwordValue.length < 8){
        errorValidation(inputPassword, 'Your password should have more than eight caracteres')
    }else{
        successValidation(inputPassword)
    }

    if(passwordtwoValue === ''){
        errorValidation(inputpasswordTwo, 'Fill up with this camp')
    }else if(passwordValue !== passwordtwoValue){
        errorValidation(inputpasswordTwo, 'Password aren`t the same')
    }else{
        successValidation(inputpasswordTwo)
    }
}

function errorValidation(input, message){
    const formInformations = input.parentElement;
    const small = formInformations.querySelector('small');

    small.innerHTML = message;

    formInformations.classList = 'form-informations error';
}

function successValidation(input){
    const formInformations = input.parentElement;
    formInformations.classList = 'form-informations success';
}

