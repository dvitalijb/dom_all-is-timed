const tagSpan = document.querySelector('span');
tagSpan.textContent = localStorage.getItem('textSpan') || 0;
let textSpan = tagSpan.textContent;

function countClick() {
    return textSpan++;
}

setInterval( () => {
    const newTextSpan = countClick();
    tagSpan.textContent = newTextSpan;
    localStorage.setItem('textSpan', newTextSpan);
},1000);
