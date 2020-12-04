function addNumbers() {
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;
    let sumNumbers = document.getElementById('sum');
    sumNumbers.value = parseInt(firstNumber) + parseInt(secondNumber);
}

const addingBoth = document.getElementById("add-submit");
addingBoth.addEventListener("click", addNumbers)