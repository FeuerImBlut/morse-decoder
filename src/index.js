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
	let result = '';
	for (let i = 0; i < expr.length; i += 10) {
		let decodedSymbol = expr.substring(i,i+10);
		let key = '';
		
		if (decodedSymbol !== '**********') {
			
			for (let j = 0; j < decodedSymbol.length; j+=2 ) {
				let partSymbol = decodedSymbol.substring(j,j+2);
				
				if (partSymbol !== '00') {
					if (partSymbol === '10') {
						key = key + '.';
					}
					else {
						key = key + '-';
					}
				}
			}
		result = result + MORSE_TABLE[key];
		}
		else {
					result = result + ' '; 
		}
	}
	return result;
}

module.exports = {
    decode
}