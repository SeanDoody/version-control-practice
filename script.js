function addNumbers() {
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;
    let sumNumbers = document.getElementById('sum-add');
    sumNumbers.value = parseInt(firstNumber) + parseInt(secondNumber);
}

const addingBoth = document.getElementById("add-submit");
addingBoth.addEventListener("click", addNumbers)
function divideNumbers() {
    const firstNo = document.getElementById('firstNo').value;
    const secondNo = document.getElementById('secondNo').value;
    const sumBox = document.getElementById('sum');
    const sum = firstNo / secondNo;
    sumBox.value = sum;
}
