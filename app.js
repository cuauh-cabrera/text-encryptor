// Get DOM elements
const inputValue = document.querySelector('#text-input');
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const textContainer = document.querySelector('#output-container');
const outputHeader = document.querySelector('#output-header');
const outputText = document.querySelector('#output-text');
const outputBkg = document.querySelector('#output-bkg');
const outputActions = document.querySelector('#output-action');

// Encryption & Decryption keys
const encryptKeys = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};
const decryptKeys = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};
// Matching RegEx
const encryptExp = /[aeiou]/gi;
const decryptExp = /(ai|enter|imes|ober|ufat)/gi;
// Setup vars
let encryptedText;
let decryptedText;
let encryptError = 'Por favor ingresa el mensaje que deseas encriptar';
let decryptError = 'Por favor ingresa el mensaje que deseas desencriptar';
let clickReset = 'Da click en Reiniciar para procesar un nuevo mensaje';

/////////*Functions*/////////////

// Encrypt function
function encryptText() {
    let inputText = inputValue.value.toLowerCase();
    encryptedText = inputText.replace(encryptExp, keys => encryptKeys[keys]);
}
// Decrypt function
function decryptText() {
    let inputText = inputValue.value.toLowerCase();
    encryptedText = inputText.replace(decryptExp, keys => decryptKeys[keys]);
}
// Hide output message function
function hideOutputMessage() {
    outputHeader.classList.toggle('no-show');
    outputText.classList.toggle('no-show');
    outputBkg.classList.toggle('no-show');
}
// Append encrypted text function
function appendEncryptedText() {
    const encrypted = document.createElement('p');
    encrypted.setAttribute('id', 'output-encrypted');
    encrypted.classList.toggle('output-encrypted');
    encrypted.textContent = `${encryptedText}`;
    textContainer.appendChild(encrypted);
}
// Append reset button
function appendResetTextBtn() {
    const resetBtn = document.createElement('button');
    resetBtn.setAttribute('id', 'reset-btn');
    resetBtn.classList.toggle('submit-action__white');
    resetBtn.textContent = 'Reiniciar';
    outputActions.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        location.reload();
    });
}
// Disable encrypt button
function disableBtn () {
    btnEncrypt.disabled = true;
    btnDecrypt.disabled = true;
}

///////////////*Event handlers*///////////////

/// Input check
btnEncrypt.addEventListener('click', (event) => {
    if (inputValue.value === null || inputValue.value === undefined || inputValue.value.trim() === '') {
        alert(`${encryptError}`);
        event.stopImmediatePropagation();
    }
});
btnDecrypt.addEventListener('click', (event) => {
    if (inputValue.value === null || inputValue.value === undefined || inputValue.value.trim() === '') {
        alert(`${decryptError}`);
        event.stopImmediatePropagation();
    }
});
/// Encrypt
btnEncrypt.addEventListener('click', () => {
    encryptText();
    hideOutputMessage();
    appendEncryptedText();
    appendResetTextBtn();
    disableBtn();
});
/// Decrypt
btnDecrypt.addEventListener('click', () => {
    decryptText();
    hideOutputMessage();
    appendEncryptedText();
    appendResetTextBtn();
    disableBtn();
});
