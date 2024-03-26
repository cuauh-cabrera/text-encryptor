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
const alertWarning = 'Aviso';
const copiedText = 'Texto copiado al porta papeles';
const copyTextError = 'Ocurrio un error al ejecutar la funcion appendCopyTextBtn';
const alertIconColor = '#0A3871';
let encryptedText;
let encryptError = 'Por favor ingresa el mensaje que deseas encriptar';
let decryptError = 'Por favor ingresa el mensaje que deseas desencriptar';


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
// Append copy text button
function appendCopyTextBtn() {
    const copyTextBtn = document.createElement('button');
    copyTextBtn.setAttribute('id', 'copy-btn');
    copyTextBtn.classList.toggle('submit-action__white');
    copyTextBtn.textContent = 'Copiar';
    outputActions.appendChild(copyTextBtn);
    copyTextBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(encryptedText.trim());
            inputAlert(alertWarning,copiedText,'success',alertIconColor,alertIconColor);
            setTimeout (() => {
                location.reload();
            }, 2000);
        } catch (error) {
            alert(`Error fatal ${copyTextError}`);
        }
    })
}
// Disable encrypt button
function disableBtn() {
    btnEncrypt.disabled = true;
    btnDecrypt.disabled = true;
}
// Input alert
function inputAlert(title, text, icon, confirmButtonColor, iconColor) {
    Swal.fire({
        title,
        text,
        icon,
        confirmButtonColor,
        iconColor
    });
}

///////////////*Event handlers*///////////////

/// Input check
btnEncrypt.addEventListener('click', (event) => {
    if (inputValue.value === null || inputValue.value === undefined || inputValue.value.trim() === '') {
        inputAlert(alertWarning, encryptError, 'warning', alertIconColor, alertIconColor);
        event.stopImmediatePropagation();
    }
});
btnDecrypt.addEventListener('click', (event) => {
    if (inputValue.value === null || inputValue.value === undefined || inputValue.value.trim() === '') {
        inputAlert(alertWarning, decryptError, 'warning', '#0A3871', '#0A3871');
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
    appendCopyTextBtn();
});
/// Decrypt
btnDecrypt.addEventListener('click', () => {
    decryptText();
    hideOutputMessage();
    appendEncryptedText();
    appendResetTextBtn();
    disableBtn();
    appendCopyTextBtn();
});
