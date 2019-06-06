const containerCounter = document.querySelector('span');
let currentValue = localStorage.getItem('currentDigit') || 0;
containerCounter.textContent = currentValue;

setInterval(() => {
    currentValue++;
    containerCounter.textContent = currentValue;
    localStorage.setItem('currentDigit', currentValue);
}, 1000);
