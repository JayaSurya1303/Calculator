
let checkBox = document.getElementById("checkbox");

checkBox.addEventListener('change', () => {
    document.body.classList.toggle("theme2");
});

var outputValue = document.getElementById("outputBox");

function calculateValue(buttonValue){

    let inputValue = buttonValue.innerHTML;

    if(inputValue === "="){
        outputValue.innerHTML = eval(outputValue.innerHTML);
    }
    else if(inputValue === "RESET"){
        outputValue.innerHTML = "0";
    }
    else if(inputValue === "DEL"){
        outputValue.innerHTML = outputValue.innerHTML.slice(0, -1);
    }
    else {
        if(outputValue.innerHTML === "0"){
            outputValue.innerHTML = inputValue;
        }
        else {
            outputValue.innerHTML += inputValue;
        }
    }

}
