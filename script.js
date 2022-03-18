let text = document.querySelector('textarea');

let upperCaseButton = document.querySelector('#upper-case');
let lowerCaseButton = document.querySelector('#lower-case');
let properCaseButton = document.querySelector('#proper-case');
let sentenceCaseButton = document.querySelector('#sentence-case');
let saveTextFile = document.querySelector('#save-text-file');

upperCaseButton.addEventListener('click', function () {
    text.value = text.value.toUpperCase();
});

lowerCaseButton.addEventListener('click', function () {
    text.value = text.value.toLowerCase();
});

properCaseButton.addEventListener('click', function () {
    let textArr = text.value.split(' ');
    let newText = [];

    textArr.forEach((el, i) => {
        if (el !== '') {
            newText[i] = el[0].toUpperCase() + el.substring(1).toLowerCase();
        }
    })
    text.value = newText.join(' ');
});

sentenceCaseButton.addEventListener('click', function () {
     let textArr = text.value.split('.').map((el) => el.trim());
     let newText = [];

     textArr.forEach((el, i) => {
         if (el !== '') {
             newText[i] = el[0].toUpperCase() + el.substring(1).toLowerCase() + '.';
         }
     })
    text.value = newText.join(' ');
});

saveTextFile.addEventListener('click', function () {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.value));
    downloadLink.setAttribute('download', 'text.txt');

    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
});