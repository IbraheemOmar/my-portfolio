

function sendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ibraheem.omar.614@gmail.com",
        Password : "password",
        To : 'ibraheem.omar.614@gmail.com',
        From : document.getElementById('email').value,
        Subject : "message sent from portfolio",
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}

