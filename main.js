const containerCounter = document.querySelector('span');
containerCounter.textContent = localStorage.getItem('currentDigit') || 0;

setInterval(() => {
    const counter = (+containerCounter.textContent) + 1;
    containerCounter.textContent = counter;
    localStorage.setItem('currentDigit', counter);
}, 1000);
