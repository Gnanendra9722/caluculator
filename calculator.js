const display=document.getElementById("display");

function todisplay(input){
    display.value+=input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
}

function clearDisplay(){
    display.value=``;
}

function removeLast(){
        display.value = display.value.slice(0, -1);
    
}