function subtract(e) {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    let total = document.getElementById('total');
    total.value = (firstNumber - secondNumber);
}