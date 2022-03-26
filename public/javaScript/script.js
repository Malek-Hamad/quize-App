let inputName = document.getElementById("userN");
let inputLastName = document.getElementById("lastN");
let inputEmail = document.getElementById("userEmail");
let form = document.querySelector(".form");
let button = document.querySelector(".submit display");
var regEmail =  /\S+@\S+\.\S+/;
let regForName = /^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/;
let returnName,lastName,email = false;

function checkUserName(){
    if(inputName.value.match(regForName) && inputName.value !== ""){
        inputName.style.borderColor = "green";
        returnName = true;
        sessionStorage.setItem("name" , inputName.value);
        console.log(inputName.value);
        return true
    }else{
        inputName.style.borderColor = "red";
        return false
    }
}


function checkUserLastName(){
    if(inputLastName.value.match(regForName) && inputName.value !== ""){
        inputLastName.style.borderColor = "green";
        sessionStorage.setItem("LastName" , inputLastName.value);
        lastName = true;
        
        return true
    }else{
        inputLastName.style.borderColor = "red";
        return false ;
    }
}

function checkInputEmail(){
    if(regEmail.test(inputEmail.value)){
        inputEmail.style.borderColor="green";
        email = true;
        return true;
    }else{
        inputEmail.style.borderColor="red";
        return false;
    }
}
function clickButton(){
    if(returnName && lastName && email  === true){
        // alert("The message is send, You will get an answer as soon as possible ")
        // window.location.href = "http://www.google.com"
        window.open("quizes.html");
        
    }else{
        alert("Error message , Check the form again thare is somthing not correct. Be sure all border color are green.");
}
    }
