const containerCounter = document.querySelector('span');
containerCounter.textContent = localStorage.getItem('currentDigit') || 0;

setInterval(() => {
    containerCounter.textContent = (+containerCounter.textContent) + 1;
    localStorage.setItem('currentDigit', containerCounter.textContent);
}, 1000);
