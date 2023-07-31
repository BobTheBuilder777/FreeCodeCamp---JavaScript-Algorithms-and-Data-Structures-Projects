function rot13(str) {
    var decryptedStr = "";
    var encryptedStr = str.toUpperCase(); // convert string to uppercase
    var regex = /[A-Z]/;
    for (let encryptedChar of encryptedStr){
        var isAlpha = regex.test(encryptedChar);
        // if the encrypted character is an alphabet, decrypt it
        if(isAlpha){
            var encryptedUnicode = encryptedChar.charCodeAt(0);
            var encryptedAlphaCode = encryptedUnicode - 64;
            // if encrypted alphabet code is greater than 13
             if (encryptedAlphaCode > 13){
                var decryptedAlphaCode = encryptedAlphaCode - 13;
            }
            // if encrypted alphabet code is less than or equal to 13
            else{
                var decryptedAlphaCode = 26 - (13 - encryptedAlphaCode);
            }
            var decryptedUnicode = decryptedAlphaCode + 64;
            var decryptedChar = String.fromCharCode(decryptedUnicode);
            decryptedStr += decryptedChar;
        }
        // if it is not an alphabet, it is not encrypted, so use as is
        else{
            decryptedStr += encryptedChar;
        }
    }
    return decryptedStr;
  }
  
  //console.log(rot13("SERR PBQR PNZC"));
  //console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
  //console.log(rot13("s??"));
  //console.log(rot13("N"));
  console.log(rot13("M"));
