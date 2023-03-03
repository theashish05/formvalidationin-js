function validate(){
    var usename=document.getElementById("username")
    var pasword=document.getElementById("password")

    if(usename.value.trim()=="")
    {
        alert("blank User name");
        usename.style.border ="solid 3px red";
        return false;
    }
    else if(pasword.value.trim()=="")
    {
        alert("blank password");
        return false;
    }
    else if(pasword.value.trim().length<5)
    {
     alert("passwwor to short");
     return false;
    }
    else{
        return true;
    }
}