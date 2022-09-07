import { getReverse } from './getReverse';

export const getFirstPalindromicNumbers = (entryNumber, digits) => {
	let numbersInRange = [];
	const numberArray = Array.from(String(entryNumber), Number);
	let j = 0;
	let found = false;
	while (found == false) {
		for (let i = 0; i < digits; i++) {
			if (numberArray[i + j] == undefined)
				return `Não há palíndromos com ${digits} dígitos dentro do número informado.`;

			numbersInRange.push(numberArray[i + j]);
		}

		const number = numbersInRange.toString();

		if (number == getReverse(number)) {
			found = true;
			return numbersInRange.toString();
		}
		j += 1;
		numbersInRange = [];
	}
};
