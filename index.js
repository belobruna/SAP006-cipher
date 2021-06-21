import cipher from './cipher.js';

function encode (e) {
    e.preventDefault();

    let string = document.getElementById("input-encrypt").value;
    const offset = Number(document.getElementById("input-offset").value);
    const encryptedMsg = cipher.encode(offset, string);
    document.getElementById("input-decrypt").value = encryptedMsg;
} 

function decode(e) {
    e.preventDefault();
    
     let string = document.getElementById("input-decrypt").value;
     const offset = Number(document.getElementById("input-offset").value);
     const decryptedMsg = cipher.decode(offset, string);
     document.getElementById("input-encrypt").value = decryptedMsg;
}


let btEncrypt = document.getElementById("bt-encrypt");
btEncrypt.addEventListener("click", encode);

let btDecrypt = document.getElementById("bt-decrypt");
btDecrypt.addEventListener("click", decode);