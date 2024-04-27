function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;   
    var message = document.getElementById("error");
    message.style.color="#fff";
    message.style.textAlign="center";
    message.style.backgroundColor="red";
    message.style.transition="all 1s ease"
    message.style.padding="10px"
    message.style.marginBottom="5px"
    message.style.borderRadius="4px"
    
    if (name == "" && email=="" && password === "" && confirmpassword=="") {
     message.innerHTML="please Enter data";
     return false;
    }else if (name.length<5 || name.length>15){  
        message.innerHTML="please insert 5-15 character in userName";
        return false;
    }else if (email.indexOf("@")=="-1"){
    message.innerHTML="please Enter valid E-mail";
    return false;
    }else if (password.length<=8){
        message.innerHTML="please Enter Atleast 8 character";
        return false;
    }else if (password != confirmpassword){
        message.innerHTML="Please Matched Password"
        return false;
    }else {
        return true;
    }

}
