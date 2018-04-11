window.addEventListener("load", inicio, false);
function inicio() {
    var inputNombre = document.forms["altaUsuario"]["inputNombre"];
    inputNombre.addEventListener("keyup", validaNombre, false);
    var inputEmail = document.forms["altaUsuario"]["email"];
    inputEmail.addEventListener("keyup",validaEmail,false);
}
function validaEmail(){
     var inputEmail = document.forms["altaUsuario"]["email"];
      var RegExPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (inputEmail.value.match(RegExPattern)) { //comprovamos el matching con match
           inputEmail.style.border="1px solid green";
        document.forms["altaUsuario"]["textarea"].innerHTML += inputEmail.value+" El email es correcte \n";
        inputEmail.nextElementSibling.innerHTML="OK";
        inputEmail.nextElementSibling.className="ok";
        return "ok";
      }else{
            inputEmail.style.border="1px solid red";
        document.forms["altaUsuario"]["textarea"].innerHTML +=inputEmail.value+" El email es incorrecte \n";
        inputEmail.nextElementSibling.innerHTML="ERROR"
        inputEmail.nextElementSibling.className="error";
        return inputEmail.value+" El email es incorrecte";
      }
}
function validaNombre() {
    var inputNombre = document.forms["altaUsuario"]["inputNombre"];
    //    /^[A-z]{3,15}$/
    var RegExPattern = /^[A-z]{3,15}$/;
    if (inputNombre.value.match(RegExPattern)) { //comprovamos el matching con match
        inputNombre.style.border="1px solid green";
        document.forms["altaUsuario"]["textarea"].innerHTML += inputNombre.value+" El nom es correcte \n";
        inputNombre.nextElementSibling.innerHTML="OK";
        inputNombre.nextElementSibling.className="ok";
        return "ok";
    } else {
        inputNombre.style.border="1px solid red";
        document.forms["altaUsuario"]["textarea"].innerHTML +=inputNombre.value+" El nom es incorrecte \n";
        inputNombre.nextElementSibling.innerHTML="ERROR, solo acepta entre 3 y 15 letras"
        inputNombre.nextElementSibling.className="error";
        return inputNombre.value+" El nom es incorrecte,solo acepta entre 3 y 15 letras";
    }
}
function validaFormulario(){
    var formOk=true;
    var textValidar = validaEmail();
    document.getElementById("contingutModal").innerHTML="";
    if(textValidar!="ok"){
        formOk=false;
        document.getElementById("contingutModal").innerHTML+=textValidar+"<br />";
    }
    textValidar = validaNombre();
    if(textValidar!=="ok"){
        formOk=false;
        document.getElementById("contingutModal").innerHTML+=textValidar+"<br />";
    }
    //quan no s'ha d'enviar el frmulari pq hi han errors
    if(!formOk){
        $('#myModal').modal({});
    }
    return formOk;
}