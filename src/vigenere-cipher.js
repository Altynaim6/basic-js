const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let currentChar = message[i];

      if (/[A-Z]/.test(currentChar)) {
        let messageCharCode = currentChar.charCodeAt(0) - 65;
        let keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65;
        let encryptedCharCode = (messageCharCode + keyCharCode) % 26;

        encryptedMessage += String.fromCharCode(encryptedCharCode + 65);
        keyIndex++;
      } else {
        encryptedMessage += currentChar;
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let currentChar = message[i];

      if (/[A-Z]/.test(currentChar)) {
        let messageCharCode = currentChar.charCodeAt(0) - 65;
        let keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65;
        let decryptedCharCode = (messageCharCode - keyCharCode + 26) % 26;

        decryptedMessage += String.fromCharCode(decryptedCharCode + 65);
        keyIndex++;
      } else {
        decryptedMessage += currentChar;
      }
    }

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};