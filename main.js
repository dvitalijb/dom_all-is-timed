const tagSpan = document.querySelector('span');
tagSpan.textContent = localStorage.getItem('textSpan') || 0;
let textSpan = tagSpan.textContent;

function countClick() {
    return textSpan++;
}

let counter = function () {
    return countClick();
}
setInterval( () => {
    const newTextSpan = counter();
    tagSpan.textContent = newTextSpan;
    localStorage.setItem('textSpan', newTextSpan);
},1000)