const cipher = {
  encode: function (offset, string) {
    if(typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError
    }

    let result = "";

    for (let i = 0; i < string.length; i++) {

      let codeASC = string.charCodeAt(i);

      if (codeASC >= 65 && codeASC <= 90) {
        codeASC = ((codeASC - 65 + offset) % 26) + 65
        result += String.fromCharCode(codeASC)
      }

      else if (codeASC >= 97 && codeASC <= 122) {
        codeASC = ((codeASC - 97 + offset) % 26) + 97
        result += String.fromCharCode(codeASC)
      }
      else {
        result += string.charAt(i)
      }
    }
    return result;
  },

  decode: function (offset, string) {

    if(typeof offset !== "number" || typeof string !== "string") {
      throw new TypeError
    }

    let result = "";

    for (let i = 0; i < string.length; i++) {

      let codeASC = string.charCodeAt(i);

      if (codeASC >= 65 && codeASC <= 90) {
        codeASC = ((codeASC - 90 - offset) % 26) + 90
        result += String.fromCharCode(codeASC)
      }
      else if(codeASC >= 97 && codeASC <= 122){
        codeASC = ((codeASC - 122 - offset) %26) + 122
        result += String.fromCharCode(codeASC)
      }
      else {
        result += string.charAt(i)
      }
    }
    return result;
  }
};

export default cipher;
