const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let resultString = '';
    for (i = 0; i < expr.length; i +=10) {
        let codedSymbol = expr.substring(i, i+10);
        if (codedSymbol == '**********') {
            resultString += ' ';
        }
        else {
            let morseSymbol = '';
            for (j = 0; j < codedSymbol.length; j +=2)
                {
                    let dashOrDot = codedSymbol[j] + codedSymbol[j+1];
                    switch (dashOrDot) {
                        case '10': morseSymbol += '.';
                        break;
                        case '11': morseSymbol += '-';
                        break;
                        default: break;
                    }
                }
        resultString += MORSE_TABLE[morseSymbol];
        }
    }
    return resultString;
}

module.exports = {
    decode
}
