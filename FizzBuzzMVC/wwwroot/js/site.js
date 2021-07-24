/* All the variables
    inputs #startValue/ endValue/ #fizzBtn /#resultTable
*/

runBtn = document.getElementById('fizzBtn');

runBtn.addEventListener('click', fizzBuzz);

function fizzBuzz() {
    let startValue = parseInt(document.getElementById('startValue').value);
    let endValue = parseInt(document.getElementById('endValue').value);

    if(Number.isInteger(startValue) && Number.isInteger(endValue) && (startValue < endValue)) {
        let results = generateNumbers(startValue, endValue);
        displayNumbers(results);
    } else {
        alert(`Your start value: ${startValue} must be less than your end value: ${endValue}`);
    };
    
};

function generateNumbers(start, end) {
    let results = [];

    for(let i = start; i <= end; i++){
        let value = ((i%3===0?'Fizz':'')+(i%5===0?'Buzz':'') || i)
        results.push(value)
        // if((i % 3 === 0) && (i % 5 === 0)){
        //     results.push('FizzBuzz');
        // } else if (i % 5 === 0) {
        //     results.push('Buzz');
        // } else if (i % 3 === 0) {
        //     results.push('Fizz');
        // } else {
        //     results.push(i);
        // };
    };
    return results;
};

function displayNumbers(answer) {
    let resultData = document.getElementById('resultData');
    // Grabs the designated template for app.html
    let templateRow = document.getElementById('fbTemplate');
    // clear the table
    resultData.innerHTML = "";
    
    // Array using template display
    for(let i = 0; i < answer.length; i+= 5) {
        let tableRow = document.importNode(templateRow.content, true);
        //grab the td put into an array
        let rowCols = tableRow.querySelectorAll('td');
        //value must match .css class to work!
        rowCols[0].classList.add(answer[i]);
        rowCols[0].textContent = answer[i];
       
        rowCols[1].classList.add(answer[i + 1]);
        rowCols[1].textContent = answer[i + 1];
       
        rowCols[2].classList.add(answer[i + 2]);
        rowCols[2].textContent = answer[i + 2];
       
        rowCols[3].classList.add(answer[i + 3]);
        rowCols[3].textContent = answer[i + 3];
       
        rowCols[4].classList.add(answer[i + 4]);
        rowCols[4].textContent = answer[i + 4];

        resultData.appendChild(tableRow);
    }

    // The original way
    // console.log(answer)
    // for(let i of answer) {
    //     rowData += `<tr><td>${i}</td></tr>`
    // }

    // resultData.innerHTML= rowData
}