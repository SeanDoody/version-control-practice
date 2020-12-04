function multiplyNumbers() {
    const num1 = document.getElementById("mult-num-1").value;
    const num2 = document.getElementById("mult-num-2").value;
    const product = document.getElementById("product");
    product.value = (num1 * num2);
}

const submit = document.getElementById("mult-submit");
submit.addEventListener("click", multiplyNumbers)
function divideNumbers() {
    const firstNo = document.getElementById('firstNo').value;
    const secondNo = document.getElementById('secondNo').value;
    const sumBox = document.getElementById('sum');
    const sum = firstNo / secondNo;
    sumBox.value = sum;
}
