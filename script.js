// function for adding the value of pressed button to the display

const display = document.getElementById("equation");

function inputText(x, y = 1) {
	let d = display.innerText;
	let text = "";
	if (d[0] == 0 || d[0] == "%") {
		display.innerText = "";
	}
	if (
		(y == "a") &
		(d[0] == "/" ||
			d[0] == "x" ||
			d[0] == "." ||
			d[0] == "-" ||
			d[0] == "+" ||
			d[0] == "%" ||
			d[0] == 0)
	) {
		x = 0;
	}
	if (y != 1) {
		if (
			d[d.length - 1] == "/" ||
			d[d.length - 1] == "x" ||
			d[d.length - 1] == "." ||
			d[d.length - 1] == "-" ||
			d[d.length - 1] == "+"
		) {
			for (let i = 0; i < d.length - 1; i++) {
				text += d[i];
			}
			d = text;
			display.innerText = d + x;
		} else {
			display.innerText += x;
		}
	} else {
		display.innerText += x;
	}
}
// console.log(display.innerText);

function all_clear() {
	display.innerText = "0";
}
function calculator(event) {
	let vari = event.key;
	console.log(vari);

	if (
		vari == 1 ||
		vari == 2 ||
		vari == 3 ||
		vari == 4 ||
		vari == 5 ||
		vari == 6 ||
		vari == 7 ||
		vari == 8 ||
		vari == 9 ||
		vari == 0
	) {
		inputText(vari);
	}
	if (
		vari == "+" ||
		vari == "-" ||
		vari == "x" ||
		vari == "/" ||
		vari == "%" ||
		vari == "."
	) {
		inputText(vari, "a");
	}
	if (vari == "c") {
		all_clear();
	}
	if (vari == "*") {
		inputText("x", " a");
	}
}
