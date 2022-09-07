export const getReverse = (number) => {
	let reverse = '';
	for (let i = String(number).length; i > 0; i--) {
		reverse += String(number)[i - 1];
	}
	return reverse;
};
