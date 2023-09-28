function diceRoll(num,num2,Name1) {
    console.log("this is how many sides:", num, num2)
    document.getElementById(Name1).innerHTML-numberMinMax(num, num2)
}


function d6() {
    console.log("button clicked");
    console.log("this is the d6 dice");
    numberMinMax(1,6) // calls numberMinMax funstion defined below
    document.getElementById("roll6").innerHTML=numberMinMax(1,6)
}
function d8() {
    console.log("button clicked");
    console.log("this is the d8 dice");
    numberMinMax(1,8) // calls numberMinMax funstion defined below
    document.getElementById("roll8").innerHTML=numberMinMax(1,8)

}
function numberMinMax(min,max) {
    const diceRoll=Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(diceRoll);
    return(diceRoll);
}