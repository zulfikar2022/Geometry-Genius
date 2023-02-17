function getElementFromId(elementId) {
    return document.getElementById(elementId);
}

function getDataFromInputField(fieldId) {
    let data = getElementFromId(fieldId).value;
    if (parseFloat(data)<=0 || isNaN(data)){
        alert('Please enter valid input!');
        return 'null' ;
    }
    else{
        return data;
    }
}

function multiplicationOfTwoOperand(operand1, operand2) {
    return operand1 * operand2;
}




/*

// Get the element object
const element = document.getElementById('myElement');

// Get the ID of the element
const elementId = element.id;

// Log the ID to the console
console.log(elementId);

   console.log(event.target.parentNode);
        const eventTarget = event.target.parentNode;
        console.log(eventTarget.id);

*/









document.querySelector('.grid-container').addEventListener('click', function (event) {
     const currentPosition = event.target.parentNode;
     const currentPositionId = currentPosition.id;
     console.log(currentPosition.firstElementChild);


})