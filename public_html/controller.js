window.addEventListener('load', starter, false);

var form = document.forms['addUser'];
//Begin declarations about user.
var InputName = form['inputName'];
var InputDate = form['inputDate'];
var nameDiv = document.getElementById('name');
var birthdateDiv = document.getElementById('birthdate');
var checkName = document.getElementById('checkName');
var checkDate = document.getElementById('checkDate');
var showName = document.getElementById('showName');
var showBirthdate = document.getElementById('showBirthdate');
//Finish declarations about user.
//Begin declarations about food(the important think...).
var SelectFoodBox = document.getElementsByName('food');
var FoodList = document.getElementById('FoodList');
var foodArrayList = ['Fish', 'Chiken', 'Noodles'];
//Finish declarations about food(the important think...).
showFoodArray();
//CheckProcess: General check on values of general functions.
function starter() {
    InputName.addEventListener('keyup', checkInputName, false);
    InputDate.addEventListener('keyup', checkInputDate, false);
}
function checkForm() {
    if (checkInputName() && checkInputDate() && checkSelectFood()) {
        alert("OK Registering Form!");
    } else {
        alert("You should select more than 1 food.");
    }
}
//Check Name: Check Name format and requierements.
function checkInputName() {
    var RegExPattern = /^[A-z]{3,15}$/;
    if (InputName.value.match(RegExPattern)) {
        nameDiv.setAttribute('class', 'has-success');
        checkName.innerHTML = 'Name format correct.';
        showName.style.color = 'green';
        showName.innerHTML = '<strong>Name: </strong>' + InputName.value;
        return true;
    } else {
        nameDiv.setAttribute('class', 'has-danger');
        checkName.innerHTML = 'Wrong Name format!';
        showName.style.color = 'red';
        showName.innerHTML = '<strong>The Name field accepts only between 3 and 15 letters</strong>';
        return false;
    }
}
//Check Date: Check Date format and requierements.
function checkInputDate() {
    var PatternDate = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
    if (InputDate.value.match(PatternDate)) {
        birthdateDiv.setAttribute('class', 'has-success');
        checkDate.innerHTML = 'Correct Date-Format';
        showBirthdate.style.color = 'green';
        showBirthdate.innerHTML = '<strong>BirthDate: </strong>' + InputDate.value;
        return true;
    } else {
        birthdateDiv.setAttribute('class', 'has-danger');
        checkDate.innerHTML = 'Wrong Date format!';
        showBirthdate.style.color = 'red';
        showBirthdate.innerHTML = 'Date format must to be MM/DD/YYYY';
        return false;
    }
}
function checkSelectFood() {
    var EverytingIsGonnaBeOk = false;
    for (var i = 0; i < SelectFoodBox.length; i++) {
        if (SelectFoodBox[i].checked === true) {
            EverytingIsGonnaBeOk = true;
        }
    }
    return EverytingIsGonnaBeOk;
}
//Start DOM thing
function showFoodArray() {
    FoodList.innerHTML = '';
    for (var i = 0; i < foodArrayList.length; i++) {

        var newDiv = document.createElement('DIV');
        var arrowUp = document.createElement('i');
        var arrowDown = document.createElement('i');
        var deleteIcon = document.createElement('i');
        var inputCheckbox = document.createElement('input');

        arrowDown.style.marginLeft = "5px";
        arrowUp.style.marginLeft = "5px";
        deleteIcon.style.marginRight = "10px";
        inputCheckbox.style.marginLeft = "15px";
        deleteIcon.classList.add('fa', 'fa-ban');
        arrowDown.classList.add('fa', 'fa-arrow-down');
        arrowUp.classList.add('fa', 'fa-arrow-up');
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.setAttribute('name', 'food');
        inputCheckbox.setAttribute('value', foodArrayList[i]);

        deleteIcon.setAttribute('onclick', 'removeFood(event)');
        arrowUp.setAttribute('onclick', 'goUpFood(event)');
        arrowDown.setAttribute('onclick', 'goDwnFood(event)');

        newDiv.appendChild(deleteIcon);
        newDiv.appendChild(arrowDown);
        newDiv.appendChild(arrowUp);
        newDiv.appendChild(inputCheckbox);
        newDiv.innerHTML += '<span>' + foodArrayList[i] + '</span>';
        FoodList.appendChild(newDiv);
    }
}
function addEvent() {
    foodArrayList.push(setNewFood());
    showFoodArray();
}
function setNewFood() {
    var addingFood = prompt('Name of the new food to add:');
    return addingFood;
}
function goUpFood(selected) {
    var foodCountner = foodArrayList.length;
    foodArrayList2 = [];
    var arrayPosition = foodArrayList.indexOf(selected.target.parentNode.lastElementChild.textContent);
    if (arrayPosition === 0) {
        foodArrayList2 = foodArrayList;
    } else {
        var foodMovement = foodArrayList.splice(arrayPosition, 1);
        var foodFinta = arrayPosition - 1;
        for (var i = 0; i < foodCountner - 1; i++) {
            if (i === foodFinta) {
                foodArrayList2.push(foodMovement[0]);
            }
            foodArrayList2.push(foodArrayList[i]);
        }
    }
    foodArrayList = foodArrayList2;
    showFoodArray();
}
function goDwnFood(selected) {
    var foodCountner = foodArrayList.length;
    foodArrayList2 = [];
    var arrayPosition = foodArrayList.indexOf(selected.target.parentNode.lastElementChild.textContent);
    if (arrayPosition === foodCountner - 1) {
        foodArrayList2 = foodArrayList;
    } else {
        var foodMovement = foodArrayList.splice(arrayPosition, 1);
        var foodFinta = arrayPosition + 1;
        for (var i = 0; i < foodCountner - 1; i++) {
            if (i === foodFinta) {
                foodArrayList2.push(foodMovement[0]);
            }
            foodArrayList2.push(foodArrayList[i]);
        }
        if (foodFinta === foodCountner - 1) {
            foodArrayList2.push(foodMovement[0]);
        }
    }
    foodArrayList = foodArrayList2;
    showFoodArray();
}
function removeFood(selected) {
    var arrayPosition = foodArrayList.indexOf(selected.path[1].lastElementChild.textContent);
    foodArrayList.splice(arrayPosition, 1);
    showFoodArray();
}
//End DOM thing
