window.addEventListener('load', starter, false);

var form = document.forms['addUser'];

var InputName = form['InputName'];
var nameDiv = document.getElementById('name');
var checkName = document.getElementById('checkName');
var showName = document.getElementById('showname');

var InputDate = form['inputDate'];
var birthdateDiv = document.getElementById('birthdate');
var checkinputDate = document.getElementById('checkinputDate');
var showBirthdate = document.getElementById('showbirthdate');

var SelectFoodBox = document.getElementsByName('food');
var FoodList = document.getElementById('FoodList');
var arrayMenjar = ['Fish', 'Chiken', 'Cheese'];

printListMenjar();

//Start CheckProcess
function starter() {
    InputName.addEventListener('keyup', checkInputName, false);
    InputDate.addEventListener('keyup', checkInputDate, false);
}

//Check Name
function checkForm() {
    if (checkInputName() && checkInputDate() && checkFood()) {
        alert("Check the Register Form!");
    } else {
        alert("You should select more than 1 food.");
    }
}

function checkInputName() {
    var RegExPattern = /^[A-z]{3,15}$/;

    if (InputName.value.match(RegExPattern)) {
        nameDiv.setAttribute('class', 'has-success');
        checkName.innerHTML = 'El nom és correcte';
        showName.style.color = 'green';
        showName.innerHTML = '<strong>Nom: </strong>' + InputName.value;
        return true;
    } else {
        nameDiv.setAttribute('class', 'has-danger');
        checkName.innerHTML = 'El nom és incorrecte';
        showName.innerHTML = '<strong>Nom: </strong>El nom és incorrecte, només accepta entre 3 i 15 lletres';
        showName.style.color = 'red';
        return false;
    }
}

function checkInputDate() {
    var PatternDate = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;

    if (InputDate.value.match(PatternDate)) {
        birthdateDiv.setAttribute('class', 'has-success');
        checkinputDate.innerHTML = 'Format data Correcte';
        showBirthdate.innerHTML = '<strong>Data de naixement: </strong>' + InputDate.value;
        showBirthdate.style.color = 'green';
        return true;
    } else {
        birthdateDiv.setAttribute('class', 'has-danger');
        checkinputDate.innerHTML = 'Format data incorrecte';
        showBirthdate.innerHTML = 'Format data incorrecte posi un format MM/DD/YYYY';
        showBirthdate.style.color = 'red';
        return false;
    }
}

function checkFood() {
    var ItIsOk = false;
    for (var i = 0; i < SelectFoodBox.length; i++) {
        if (SelectFoodBox[i].checked === true) {
            return true;
        }
    }
    return validat;
}

//Start DOM thing

function printListMenjar() {
    FoodList.innerHTML = '';
    for (var i = 0; i < arrayMenjar.length; i++) {

        var newDiv = document.createElement('DIV');
        var Borrar = document.createElement('i');
        var flechaAbajo = document.createElement('i');
        var flechaArriba = document.createElement('i');
        var inputCheckbox = document.createElement('input');

        flechaAbajo.style.marginLeft = "5px";
        flechaArriba.style.marginLeft = "5px";
        Borrar.style.marginRight = "10px";
        inputCheckbox.style.marginLeft = "15px";
        Borrar.classList.add('fa', 'fa-ban');
        flechaAbajo.classList.add('fa', 'fa-arrow-down');
        flechaArriba.classList.add('fa', 'fa-arrow-up');
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.setAttribute('name', 'food');
        inputCheckbox.setAttribute('value', arrayMenjar[i]);

        Borrar.setAttribute('onclick', 'eliminarMenjar(event)');
        flechaArriba.setAttribute('onclick', 'pujarMenjar(event)');
        flechaAbajo.setAttribute('onclick', 'baixarMenjar(event)');

        newDiv.appendChild(Borrar);
        newDiv.appendChild(flechaAbajo);
        newDiv.appendChild(flechaArriba);
        newDiv.appendChild(inputCheckbox);
        newDiv.innerHTML += '<span style="margin-left:5px;" >' + arrayMenjar[i] + '</span>';
        FoodList.appendChild(newDiv);
    }
}

function addEvent() {
    arrayMenjar.push(indicaNouMenjar());
    printListMenjar();
}

function pujarMenjar(e) {
    var totalMenjar = arrayMenjar.length;
    arrayMenjar2 = [];
    var posMenjar = arrayMenjar.indexOf(e.target.parentNode.lastElementChild.textContent);
    if (posMenjar === 0) {
        arrayMenjar2 = arrayMenjar;
    } else {
        var menjarReplace = arrayMenjar.splice(posMenjar, 1);
        var posReplace = posMenjar - 1;
        for (var i = 0; i < totalMenjar - 1; i++) {
            if (i === posReplace) {
                arrayMenjar2.push(menjarReplace[0]);
            }
            arrayMenjar2.push(arrayMenjar[i]);
        }
    }
    arrayMenjar = arrayMenjar2;
    printListMenjar();
}

function eliminarMenjar(e) {
    var posMenjar = arrayMenjar.indexOf(e.path[1].lastElementChild.textContent);
    arrayMenjar.splice(posMenjar, 1);
    printListMenjar();
}

function baixarMenjar(e) {
    var totalMenjar = arrayMenjar.length;
    arrayMenjar2 = [];
    var posMenjar = arrayMenjar.indexOf(e.target.parentNode.lastElementChild.textContent);
    if (posMenjar === totalMenjar - 1) {
        arrayMenjar2 = arrayMenjar;
    } else {
        var menjarReplace = arrayMenjar.splice(posMenjar, 1);
        var posReplace = posMenjar + 1;
        console.log(posReplace);
        console.log(totalMenjar - 1);
        for (var i = 0; i < totalMenjar - 1; i++) {
            if (i === posReplace) {
                arrayMenjar2.push(menjarReplace[0]);
            }
            arrayMenjar2.push(arrayMenjar[i]);
        }
        if (posReplace === totalMenjar - 1) {
            arrayMenjar2.push(menjarReplace[0]);
        }

    }
    arrayMenjar = arrayMenjar2;
    printListMenjar();
}


function indicaNouMenjar() {
    var nouMenjar = prompt('Índica el nom del nou menjar');
    return nouMenjar;
}
//End DOM thing