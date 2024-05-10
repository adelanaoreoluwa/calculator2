
let newInput = '';

//create the function to display number inputs
function appendToDisplay (number){
    newInput += number
    document.getElementById('display').value = newInput
}


//function to operate
function operate (number){
    newInput += number 
    document.getElementById('display').value = newInput
}

//function to evaluate the result using try and catching error 



function calculation(){
    try{
        let result = eval(newInput)
        document.getElementById('display').value = result;
        newInput = '';
    }
    catch(err){
        document.getElementById('display').value = 'Err'
    }
}


//function to clear the display
function clearDisplay (){
    newInput = '';
    document.getElementById('display').value = newInput;
}

//function to delete a slice of elements

function deleteLast(){
    newInput = newInput.slice(0, -1);
    document.getElementById('display').value = newInput;
}