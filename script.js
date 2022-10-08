// function for adding the value of pressed button to the display

let display = document.getElementById("equation");

function inputText(x) {
	if (display.innerText == "0") {
		display.innerText = "";
	}
	display.innerText += x;
}

// console.log(display.innerText);

function all_clear() {
	display.innerText = "0";
}

function deletText() {
	let d = display.innerText;
	let text = "";
	for (let i = 0; i < d.length - 1; i++) {
		text += d[i];
	}
	if (text == "") {
		text = "0";
	}
	display.innerText = text;
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
		vari == 0 ||
		vari == "+" ||
		vari == "-" ||
		vari == "x" ||
		vari == "/" ||
		vari == "%" ||
		vari == "."
	) {
		inputText(vari);
	}

	if (vari == "c") {
		all_clear();
	}
	if (vari == "*") {
		inputText("x");
	}
	if (vari == "Backspace") {
		deletText();
	}
}
