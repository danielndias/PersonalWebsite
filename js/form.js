/**
 * Created by Daniel on 17/09/2017.
 */

document.addEventListener("DOMContentLoaded", init);

function init() {
    var submit = document.getElementById("submit");
    submit.addEventListener("click", validate);

}
function validate() {

    var txtName = document.getElementById("formName").value;
    var txtEmail = document.getElementById("formEmail").value;
    var txtMessage = document.getElementById("formMessage").value;

    var atpos = txtEmail.indexOf("@");
    var dotpos = txtEmail.lastIndexOf(".");

    if( txtName == "" ) {
        event.preventDefault();
        document.getElementById("nameError").innerHTML = "Please provide your name!";
        txtName.focus();

        return false;
    }

    if( txtEmail == "" ) {
        event.preventDefault();
        document.getElementById("emailError").innerHTML = "Please provide your Email!";
        txtEmail.focus();
        return false;
    }

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=txtEmail.length) {
        event.preventDefault();
        document.getElementById("emailError").innerHTML = "Please enter a valid e-mail address";
        txtEmail.focus();
        return false;
    }

    if( txtMessage == "" ) {
        event.preventDefault();
        document.getElementById("emailError").innerHTML = "Please Type a Message!";
        txtMessage.focus();
        return false;
    }



    return( true );



}