//form with first name, last name, email, and message
//
//

export {addContactForm};

function addContactForm() {

    var form = document.createElement('form');
    form.style.cssText = 'margin-left: auto; margin-right: auto; padding: 30px; width: 300px; display: block; color: white; background-color: #73b6ba;' +
		'border: solid white 5px; font-family: Arial;';

    var header = document.createElement('h2');
    header.innerHTML = 'Contact Us!';
    header.style.cssText = 'margin-left: auto; margin-right: auto; text-align: center;';
    form.appendChild(header);

    var labelStyle = 'display: inline-block; width: 52px;';
    var inputStyle = 'margin: 5px;';

    var labelFirst = document.createElement('label');
    labelFirst.innerHTML = 'Name: ';
    labelFirst.style.cssText = labelStyle;
    form.appendChild(labelFirst);

    var inputFirst = document.createElement('input');
    inputFirst.type = 'text';
    inputFirst.style.cssText = inputStyle;
    form.appendChild(inputFirst);

    var labelEmail = document.createElement('label');
    labelEmail.innerHTML = 'Email: ';
    labelEmail.style.cssText = labelStyle;
    form.appendChild(labelEmail);

    var inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.style.cssText = inputStyle;
    form.appendChild(inputEmail);

    var messageLabel = document.createElement('label');
    messageLabel.innerHTML = 'Message: ';
    messageLabel.style.cssText = labelStyle;
    form.appendChild(messageLabel);

    var message = document.createElement('textarea');
    message.cols = 40;
    message.rows = 6;
    //message.style.cssText = inputStyle;
    form.appendChild(message);

    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.style.cssText = 'margin-left: auto; margin-right: auto; margin-top: 10px; padding: 5px; display: block; width: 100px;' + 
		'border: none; background-color: #438589; color: white';
    submitButton.value = 'Submit';
    submitButton.onclick = onSubmit;
    form.appendChild(submitButton);


    return form;
}

function onSubmit() {
     alert('Thank you for your message! If desired, we will respond within 3-5 business days.');
}
