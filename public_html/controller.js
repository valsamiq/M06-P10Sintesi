window.addEventListener("load", starter, false);
function starter(){
    var inputName = document.forms["newUser"]["inputName"];
    inputName.addEventListener("keyup", checkName, false);
    
    var inputBirthdate = document.forms["newUser"]["inputBirthdate"];
    inputBirthdate.addEventListener("keyup", checkDate, false);
}
function checkDate(){
    return "ok";
}
function checkForm(){
    var formOk=true;
    var checkText = checkDate();
    document.getElementById("contingutModal").innerHTML="";
    if(checkText!=="ok"){
        formOk=false;
        document.getElementById("contingutModal").innerHTML+=checkText+"<br />";
    }
//    var checkText = checkMail();
//    document.getElementById("contingutModal").innerHTML="";
//    if(checkText!=="ok"){
//        formOk=false;
//        document.getElementById("contingutModal").innerHTML+=checkText+"<br />";
//    }
    checkText = checkName();
    if(checkText!=="ok"){
        formOk=false;
        document.getElementById("contingutModal").innerHTML+=checkText+"<br />";
    }
    //quan no s'ha d'enviar el frmulari pq hi han errors
    if(!formOk){
        $('#myModal').modal({});
    }
    return formOk;
}
function checkName() {
    var inputName = document.forms["newUser"]["inputName"];
    //    /^[A-z]{3,15}$/
    var RegExPattern = /^[A-z]{3,15}$/;

    if (inputName.value.match(RegExPattern)) { //comprovamos el matching con match
        inputName.style.border="1px solid green";
        document.forms["inputName"]["textarea"].innerHTML += inputName.value+" El nom es correcte \n";
        inputName.nextElementSibling.innerHTML="OK";
        inputName.nextElementSibling.className="ok";
        return "ok";
    } else {
        inputName.style.border="1px solid red";
        document.forms["inputName"]["textarea"].innerHTML +=inputName.value+" El nom es incorrecte \n";
        inputName.nextElementSibling.innerHTML="ERROR, solo acepta entre 3 y 15 letras";
        inputName.nextElementSibling.className="error";
        return inputName.value+" El nom es incorrecte,solo acepta entre 3 y 15 letras";
    }
}