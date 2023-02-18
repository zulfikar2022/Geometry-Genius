
function isInvalidInput(data1, data2) {
    const data1Number = parseFloat(data1);
    const data2Number = parseFloat(data2);

    if ((data1Number <= 0 || data2Number <= 0) || (isNaN(data1Number) || isNaN(data2Number)) || (isNaN(data1) || isNaN(data2))) {
        alert('invalid input');
        return true;
    }
    else {
        return false;
    }
}

function multiOfTwo(data1, data2) {
    const number1 = parseFloat(data1);
    const number2 = parseFloat(data2);
    return number1 * number2;
}


function precisionMaker(data) {
    if (Number.isInteger(data)) {
        return data.toString();
    }
    else {
        return data.toFixed(2);
    }
}

function indexFinder(theArray,theElement){
    for(let i =0 ; i< theArray.length ; i++){
        if(theArray[i]==theElement){
            console.log('entered if block');
            return i;
        }
    }
    console.log('element does not found');
    return -1;
}


let globalSerial = 1;
function setResultToAreaCalculation(elementId,result){

        const newDiv = document.createElement('div');
        const newSpan = document.createElement('span')
        const newBtn = document.createElement('button');

      
    
 

        globalSerial++;
}



document.querySelector('.grid-container').addEventListener('click', function (event) {


    if (event.target.innerText === 'Calculate') {
        const inputOneElements = document.getElementsByClassName('input-one');  
        const inputTwoElements = document.getElementsByClassName('input-two');  

        const figureItemId = event.target.parentNode.id;   
 

        if (figureItemId === 'triangle') {
            const valueOne = inputOneElements[0].value;
            const valueTwo = inputTwoElements[0].value;
            if (isInvalidInput(valueOne, valueTwo)) {
                return;
            }
            else {
                const multiResult = multiOfTwo(valueOne, valueTwo);
                const area = 0.5 * multiResult;
                console.log(precisionMaker(area));
            }
        }

        else if (figureItemId === 'rectangle') {
            const valueOne = inputOneElements[1].value;
            const valueTwo = inputTwoElements[1].value;
            if (isInvalidInput(valueOne, valueTwo)) {
                return;
            }
            else {
                const multiResult = multiOfTwo(valueOne, valueTwo);
                const area = multiResult;
                console.log(precisionMaker(area));
            }
        }

        else if (figureItemId === 'parallelogram') {
            const valueOne = inputOneElements[2].value;
            const valueTwo = inputTwoElements[2].value;
            if (isInvalidInput(valueOne, valueTwo)) {
                return;
            }
            else {
                const multiResult = multiOfTwo(valueOne, valueTwo);
                const area = multiResult;
                console.log(precisionMaker(area));
            }
        }

        else if (figureItemId === 'rhombus') {
            const valueOne = inputOneElements[3].value;
            const valueTwo = inputTwoElements[3].value;
            if (isInvalidInput(valueOne, valueTwo)) {
                return;
            }
            else {
                const multiResult = multiOfTwo(valueOne, valueTwo);
                const area = 0.5 * multiResult;
                console.log(precisionMaker(area));
            }
        }

        else if (figureItemId === 'pentagon') {
            const valueOne = inputOneElements[4].value;
            const valueTwo = inputTwoElements[4].value;
            if (isInvalidInput(valueOne, valueTwo)) {
                return;
            }
            else {
                const multiResult = multiOfTwo(valueOne, valueTwo);
                const area = 0.5 * multiResult;
                console.log(precisionMaker(area));
            }
        }

        else if (figureItemId === 'ellipse') {
            const valueOne = inputOneElements[5].value;
            const valueTwo = inputTwoElements[5].value;
            if (isInvalidInput(valueOne, valueTwo)) {
                return;
            }
            else {
                const multiResult = multiOfTwo(valueOne, valueTwo);
                const area = (Math.PI) * multiResult;
                console.log(precisionMaker(area));
            }
        }
           
    }
 
})



document.getElementById('blog-btn').addEventListener('click',function(event){
    window.location.href = 'blog.html';
})