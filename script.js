// Get error elements
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;
    
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    
    // Allow for names with multiple parts, including those with hyphens or apostrophes
    if (!name.match(/^[A-Za-z]+([-']?[A-Za-z]+)*(\s[A-Za-z]+([-']?[A-Za-z]+)*)+$/)) {
        nameError.innerHTML = 'Please enter a valid full name';
        return false;
    }   
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
    phoneError.innerHTML = 'Phone no is required';
    return false;
}
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return false;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email/length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return false;
}

function  validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        const submitError = document.getElementById('submitError'); // Assuming there's an element with id 'submitError'
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    return true; // Add this line to allow form submission when all validations pass
}