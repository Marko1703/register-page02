function validation() {
//    if (document.Formfill.fName.value=="") {
//        document.getElementById("result").innerHTML="Enter first name*";
//        return false;}
      if (document.Formfill.fName.value.length<3) {
        document.getElementById("result").innerHTML="First name should be atleast 3 letters*";
        return false;
//    } else if (document.Formfill.lName.value=="") {
//        document.getElementById("result").innerHTML="Enter last name*";
//        return false;
    } else if (document.Formfill.lName.value.length<3) {
        document.getElementById("result").innerHTML="Last name should be atleast 3 letters*";
        return false;
//    } else if (document.Formfill.email.value=="") {
//        document.getElementById("result").innerHTML="Enter email*";
//        return false;
//    } else if (document.Formfill.password.value=="") {
//        document.getElementById("result").innerHTML="Enter password*";
//        return false;
    } else if (document.Formfill.password.value.length<8) {
        document.getElementById("result").innerHTML="Password should be atleast 8 characters*";
        return false;
//    } else if (document.Formfill.cPassword.value=="") {
//        document.getElementById("result").innerHTML="Enter confirm password*";
//        return false;
    } else if (document.Formfill.cPassword.value !== document.Formfill.password.value) {
        document.getElementById("result").innerHTML="Password does not match*";
        return false;
    } else if (document.Formfill.password.value == document.Formfill.cPassword.value) {
        registered.classList.add('open-slide')
        return false;
    } 
}

const registered = document.getElementById("#registered");