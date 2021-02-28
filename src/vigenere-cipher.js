class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag;
  }

  static alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  encrypt(str, key) {
    return this.process(str, key, true);
  }
  decrypt(str, key) {
    return this.process(str, key, false);
  }

  process(str, key, isEncode) {
    if (!str || !key) throw new Error();

    let alph = VigenereCipheringMachine.alph;

    let clearStr = str.replace(/[^A-Za-z]/g, "").toUpperCase();
    key = key.toUpperCase();

    if (clearStr.length >= key.length) {
      for (let i = 0; key.length != clearStr.length; i++) {
        key = key + key[i];
      }
    } else {
      key = key.substring(0, clearStr.length);
    }

    let cipher = "";

    for (let i = 0; i < clearStr.length; i++) {
      if (isEncode) {
        cipher += alph[(alph.indexOf(clearStr[i]) + alph.indexOf(key[i])) % 26];
      } else {
        cipher += alph[(alph.indexOf(clearStr[i]) - alph.indexOf(key[i]) + 26) % 26];
      }
    }

    for (let i = 0, k = 0; i < str.length; i++) {
      if (/[A-Za-z]/.test(str[i])) {
        str = str.substring(0, i) + cipher[k] + str.substring(i + 1);
        k++;
      }
    }

    return this.flag === false ? str.split("").reverse().join("") : str;
  }
}

module.exports = VigenereCipheringMachine;
