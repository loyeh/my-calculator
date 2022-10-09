// function for adding the value of pressed button to the display

const equation = document.getElementById("equation");
const display = document.getElementById("display");

function inputText(x) {
	if (equation.innerText == "0") {
		equation.innerText = "";
	}
	equation.innerText += x;
}

// console.log(equation.innerText);

function all_clear() {
	equation.innerText = "0";
}

function deletText() {
	let d = equation.innerText;
	let text = "";
	for (let i = 0; i < d.length - 1; i++) {
		text += d[i];
	}
	if (text == "") {
		text = "0";
	}
	equation.innerText = text;
}

function showSetting() {
	const settingContent = document.getElementById("settingContent");
	const settingIcon = document.getElementById("settingIcon");
	settingContent.style.display = "block";
	settingIcon.style.opacity = 1;
	settingIcon.style.filter =
		"invert(0%) sepia(6%) saturate(7478%) hue-rotate(307deg) brightness(98%) contrast(106%)";
	settingIcon.style.backgroundColor = "white";
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
