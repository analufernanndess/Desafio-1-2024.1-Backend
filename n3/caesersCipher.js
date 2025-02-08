function rot13(str) {
    let decoded = "";

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            let shifted = charCode + 13;
            if (shifted > 90) {
                shifted -= 26;
            }
            decoded += String.fromCharCode(shifted);
        } else {
            decoded += str[i];
        }
    }

    return decoded;
}
