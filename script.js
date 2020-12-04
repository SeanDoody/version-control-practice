function divideNumbers() {
    const firstNo = document.getElementById('firstNo').value;
    const secondNo = document.getElementById('secondNo').value;
    const sumBox = document.getElementById('sum');
    const sum = firstNo / secondNo;
    sumBox.value = sum;
}
