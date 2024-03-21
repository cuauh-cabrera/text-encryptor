// Get DOM elements
const inputValue = document.querySelector('#text-input');
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const textContainer = document.querySelector('#output-container');
const outputHeader = document.querySelector('#output-header');
const outputText = document.querySelector('#output-text');
const outputBkg = document.querySelector('#output-bkg');
const outputActions = document.querySelector('#output-action');
//////////////* Encrypt Text *///////////////////

// Encryption keys
const encryptKeys = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};
// Encryption RegEx
const encryptExp = /[aeiou]/gi;

// Encrypt text
btnEncrypt.addEventListener('click', () => {
    let inputText = inputValue.value.toLowerCase();
    // Replace characters by encryption key
    let encryptedText = inputText.replace(encryptExp, keys => encryptKeys[keys]);
    // Hide output warning message
    outputHeader.classList.toggle('no-show');
    outputText.classList.toggle('no-show');
    outputBkg.classList.toggle('no-show');
    // Add the encrypted text to the DOM
    const encrypted = document.createElement('p');
    encrypted.setAttribute('id', 'output-encrypted');
    encrypted.classList.toggle('output-encrypted');
    encrypted.textContent = `${encryptedText}`;
    textContainer.appendChild(encrypted);
    // Add reset text button
    const resetBtn = document.createElement('button');
    resetBtn.setAttribute('id', 'reset-btn');
    resetBtn.classList.toggle('submit-action__white');
    resetBtn.textContent = 'Reiniciar';
    outputActions.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        location.reload();
    })
});

/////////////* Decrypt Text*/////////////////////

// Decryption keys
const decryptKeys = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};
// Decryption RegEx
const decryptExp = /(ai|enter|imes|ober|ufat)/gi;

// Decrypt text
btnDecrypt.addEventListener('click', () => {
    let inputText = inputValue.value;
    // Replace characters by decryption key
    let decryptedText = inputText.replace(decryptExp, keys => decryptKeys[keys]);
    // Hide output warning message
    outputHeader.classList.toggle('no-show');
    outputText.classList.toggle('no-show');
    outputBkg.classList.toggle('no-show');
    // Add the encrypted text to the DOM
    const decrypted = document.createElement('p');
    decrypted.setAttribute('id', 'output-encrypted');
    decrypted.classList.toggle('output-encrypted');
    decrypted.textContent = `${decryptedText}`;
    textContainer.appendChild(decrypted);
    // Add reset text button
    const resetBtn = document.createElement('button');
    resetBtn.setAttribute('id', 'reset-btn');
    resetBtn.classList.toggle('submit-action__white');
    resetBtn.textContent = 'Reiniciar';
    outputActions.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        location.reload();
    })
});
