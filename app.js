
let name = document.querySelector("#buyersName");
let streetAddress = document.querySelector('#streetAddress');
let cityStateZip = document.querySelector('#cityStateZip');
let quantityArray = document.querySelectorAll('.quantity');
let subTotal = document.querySelector('#subTotal');
let grandTotal = document.querySelector('#grandTotal');
let radioButtonArray = document.querySelectorAll('.radioButton');

function validateTextbox() {

    var box = document.getElementById("buyersName");
    
     if (box.value === "") {
        box.focus();
        box.style.border = "solid 3px #ff4040";
     }else{
        box.focus();
        box.style.border = "none";
     }
    
    if (box.value === "") {
        alert("The field marked in red cannot be blank");
        return event.preventDefault();
    }
}

function calcSubtotal(){
    var q = document.getElementsByClassName("quantity");
    subTotal.value=(q[0].value*3+q[1].value*3.5+q[2].value*4.5+q[3].value*5).toFixed(2);
    calcGrandtotal();
}

function calcGrandtotal(){
    grandTotal.value=(subTotal.value*1.07).toFixed(2);
}

function submitForm(){
    validateTextbox();
    calcSubtotal();
    cardPayment();
}

function cardPayment(){
    var c = document.getElementsByClassName("radioButton");
    var num=grandTotal.value;
    if(c[0].checked===true||c[1].checked===true||c[2].checked===true||c[3].checked===true){

        grandTotal.value=parseFloat(num)+2.5;
        var r=confirm("Card payments add $2.50 to total. Are you sure you want to proceed?");
        if(!r){
            grandTotal.value=parseFloat(num);
            c[4].checked=true;
            return event.preventDefault();
        }
    }
}
function clearForm() {
    name.value = '';
    streetAddress.value = '';
    cityStateZip.value = '';
    for(let q of quantityArray) {
        q.value = '';
    }
    subTotal.value = '';
    grandTotal.value = '';
    for(let radioButton of radioButtonArray) {
        radioButton.checked = false;
    }
}
