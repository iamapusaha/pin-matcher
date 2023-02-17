function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayElement = document.getElementById('show-pin');
    displayElement.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const typedNumerField = document.getElementById('typed-numbers');
    const preTypedNumber = typedNumerField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumerField.value = '';
        } else if (number === '<') {
            const digits = preTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumerField.value = remainingDigits;
        }
    } else {
        const newTypedNumber = preTypedNumber + number;
        typedNumerField.value = newTypedNumber;

    }
})
document.getElementById('btn-sumbit').addEventListener('click', function () {
    const displayElement = document.getElementById('show-pin');
    const newDisplayPin = displayElement.value;
    const typedNumerField = document.getElementById('typed-numbers')
    const typedNumber = typedNumerField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFail = document.getElementById('pin-fail');
    if (newDisplayPin === typedNumber) {

        pinSuccess.style.display = 'block';
        pinFail.style.display = 'none';
    } else {
        const pinFail = document.getElementById('pin-fail');
        pinFail.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})