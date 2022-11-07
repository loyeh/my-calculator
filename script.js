// function for adding the innerText of pressed button to the display

const equation = document.getElementById("equation");
const display = document.getElementById("display");

function inputText(x) {
	if (equation.innerText == "0") {
		equation.innerText = "";
	}
	equation.innerText += x;
	shrinkText();
}

// console.log(equation.innerText);

function all_clear() {
	equation.innerText = "0";
	equation.style.fontSize = "inherit";
	equation.style.wordWrap = "unset";
}

function deletText() {
	let d = equation.innerText;
	let text = "";
	for (let i = 0; i < d.length - 1; i++) {
		text += d[i];
	}
	if (text == "") {
		text = "0";
		equation.style.fontSize = "inherit";
		equation.style.wordWrap = "unset";
	}
	equation.innerText = text;
	ExpandText();
}

function showSetting() {
	const settingContent = document.getElementById("settingContent");
	const settingIcon = document.getElementById("settingIcon");
	settingContent.style.display = "block";
	settingIcon.style.opacity = 1;
	// settingIcon.style.filter =
	// 	"invert(0%) sepia(6%) saturate(7478%) hue-rotate(307deg) brightness(98%) contrast(106%)";
	// settingIcon.style.backgroundColor = "white";
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
		vari == "/" ||
		vari == "%" ||
		vari == "(" ||
		vari == ")" ||
		vari == "."
	) {
		inputText(vari);
	}
	if (equation.rows > 4) {
		equation.style.top = "unset";
		equation.style.bottom = "5px";
	}
	if (vari == "c" || vari == "Escape") {
		all_clear();
	}
	if (vari == "*") {
		inputText("&#xD7");
	}
	if (vari == "Backspace") {
		deletText();
	}

	shrinkText();
}

function shrinkText() {
	let size = parseInt(window.getComputedStyle(equation).fontSize);
	while (isOverflown()) {
		if (size > 30) {
			size -= 0.1;
			equation.style.fontSize = `${size}px`;
		} else {
			equation.style.wordWrap = "break-word";
			equation.style.overflow = "hidden";
			return;
		}
	}
}
function ExpandText() {
	let size = parseInt(window.getComputedStyle(equation).fontSize);
	let txt = equation.innerText;

	while (isSmaller() && size < 70 && txt.length < 20) {
		size += 0.1;
		equation.style.fontSize = `${size}px`;
		equation.style.wordWrap = "unset";
		equation.style.overflow = "unset";
	}
}

function isOverflown() {
	return equation.scrollWidth * 1.04 > display.clientWidth;
}
function isX_Overflown() {
	return equation.scrollHeight > display.clientHeight;
}
function isSmaller() {
	return equation.scrollWidth * 1.04 < display.clientWidth;
}
function darkMode() {
	var element = document.getElementById("calculator_body");
	element.classList.add("darkMode");
}
function lightMode() {
	var element = document.getElementById("calculator_body");
	element.classList.remove("darkMode");
}
