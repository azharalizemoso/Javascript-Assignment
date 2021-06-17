var submit =  document.getElementById('submit');
submit.addEventListener("click",validateEmail);

function validateEmail(e) {
    // e.preventDefault();
    var emailID = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    
    if (emailID.indexOf("@") < 1 || ( emailID.lastIndexOf(".") - emailID.indexOf("@") < 2 )) {
       alert("Please enter correct email ID")
       document.getElementById('email').focus;
       return false;
    }


    if (name == "") {
        alert("Please enter Name")
       document.getElementById('name').focus;
       return false;
    }

    return true;
 }