const multipleThree = () => {
	let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("").map(Number);
	let sum = 0;
	let n;
	input.forEach(m => sum += m);
	input.length > 1 ? n = 1 : n = 0;

	while (sum >= 10) {
		let sum2 = 0;
		while (sum > 0) {
			sum2 += sum % 10;
			sum = Math.floor(sum / 10);
		}
		n++;
		sum = sum2;
	}
	console.log(`${n}\n${sum % 3 ? "NO" : "YES"}`);
}

multipleThree();
