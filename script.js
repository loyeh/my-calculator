window.addEventListener("resize", () => {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--h_size", `${vh}px`);
});

// text of the equation that is inputed from the user
const equation = document.getElementById("equation");

// the text that has been shown in the main display of the calculator
const display = document.getElementById("display");

// the text that has been shown underneeth the display of the calculator
const outputNode = document.getElementById("output");

const settingContent = document.getElementById("settingContent");
const dropdowns = document.getElementsByClassName("settingContent");
const calculatorBtn = document.getElementsByClassName("calculator_button");
const r = document.querySelector(":root");
var text = equation.value;

// function for adding the innerText of pressed button to the display
function inputText(x, text = "") {
	let endChar = text.slice(-1);
	if (Number(x) && endChar != ")") {
		if (text == "0") {
			text = "";
		}
		text += x;
	} else {
		text += x;
		if (isNaN(text.slice(-2, -1))) {
			text = sieveX(x);
		}
	}
	// console.log(text);
	return text;
}

function displayEquation(text) {
	equation.value = text;
	// if (isNaN(text.slice(-1))) {
	// 	deletText(text, 1);
	// }
	resizeText();
}

// console.log(equation.value);
function sieveX(x) {
	let text = equation.value;
	let endChar = text.slice(-1);
	// console.log(endChar);
	switch (x) {
		case ".":
			text += "0.";
			displayEquation(text);
			break;
		case "+":
		case "-":
		case "\xF7":
		case "\xD7":
		case "^":
			if (endChar != "(" && endChar != ")") {
				text = deletText(equation.value, 1) + x;
				break;
			}
			if (endChar == "(" || endChar == ".") {
				x = "";
				text += x;
				break;
			}
			if (endChar == ")") {
				text += x;
				break;
			}
		case `(...)`:
			if (text == "0" || text == "") {
				text = "(";
				break;
			}
			if (endChar != ")") {
				if (!text.includes("(")) {
					if (isNaN(endChar)) {
						text += "(";
					} else {
						text += "";
					}
				} else {
					if (!isNaN(endChar)) {
						text += ")";
					} else {
						text += "(";
					}
				}
			} else {
				if (text.includes("(")) {
					if (text.includes(")")) {
						let open = text.match(/\(/g);
						let close = text.match(/\)/g);
						if (open.length > close.length) {
							text += ")";
						} else {
							text += "";
						}
					}
					break;
				}
			}
	}
	// console.log(text);
	displayEquation(text);
	return text;
}

function all_clear() {
	let text = "0";
	equation.style.fontSize = "inherit";
	equation.style.wordWrap = "unset";

	return text;
}

//function deletText, deletes "n" charectors from the end of the
// "text" and returns the remaning string...
function deletText(text, n) {
	text += "";
	let reminedText = "";
	for (let i = 0; i < text.length - n; i++) {
		reminedText += text[i];
	}
	if (reminedText == "") {
		reminedText = all_clear();
	}
	resizeText();
	console.log(reminedText);
	return reminedText;
}

//Mouse functionality
window.onclick = function (event) {
	console.log(event.target);
	// console.log(event.target.textContent);
	if (!event.target.matches(".settingIcon")) {
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
	if (event.target.matches(".settingIcon")) {
		settingContent.classList.toggle("show");
	}
	if (event.target.matches(".operator") || event.target.matches(".number")) {
		text = inputText(event.target.innerText, text);
	}
	if (event.target.matches(".delete")) {
		text = deletText(text, 1);
	}
	if (event.target.matches(".clear")) {
		text = all_clear();
	}
	displayEquation(text);
	output(text);
	if (event.target.matches(".equals")) {
		if (outputNode.value == "") {
			text = "Syntax Error";
		} else {
			text1 = outputNode.value;
			displayEquation(text1);
			output("");
		}
	}
	return text;
};

//Keyboard functionality
function calculator(event) {
	let pressdKey = event.key;

	if (
		pressdKey == 1 ||
		pressdKey == 2 ||
		pressdKey == 3 ||
		pressdKey == 4 ||
		pressdKey == 5 ||
		pressdKey == 6 ||
		pressdKey == 7 ||
		pressdKey == 8 ||
		pressdKey == 9 ||
		pressdKey == 0 ||
		pressdKey == "+" ||
		pressdKey == "-" ||
		pressdKey == "*" ||
		pressdKey == "(" ||
		pressdKey == ")" ||
		pressdKey == "." ||
		pressdKey == "^" ||
		pressdKey == "/"
	) {
		for (let i = 0; i < calculatorBtn.length; i++) {
			if (calculatorBtn[i].innerText == pressdKey) {
				let col = calculatorBtn[i].style.backgroundColor;
				calculatorBtn[i].style.backgroundColor = "#c44b4b89";
				setTimeout(() => {
					calculatorBtn[i].style.backgroundColor = col;
				}, 200);
			}
			if (calculatorBtn[i].innerText == "\xD7" && pressdKey == "*") {
				let col = calculatorBtn[i].style.backgroundColor;
				calculatorBtn[i].style.backgroundColor = "#c44b4b89";
				setTimeout(() => {
					calculatorBtn[i].style.backgroundColor = col;
				}, 200);
			}
			if (calculatorBtn[i].innerText == "\xF7" && pressdKey == "/") {
				let col = calculatorBtn[i].style.backgroundColor;
				calculatorBtn[i].style.backgroundColor = "#c44b4b89";
				setTimeout(() => {
					calculatorBtn[i].style.backgroundColor = col;
				}, 200);
			}
		}
		text = inputText(pressdKey, text).replace("*", "\xD7").replace("/", "\xF7");
	}

	if (pressdKey == "c" || pressdKey == "Escape") {
		text = all_clear();
		let ac = document.querySelector(".clear");
		console.log(ac);
		let col = ac.style.backgroundColor;
		ac.style.backgroundColor = "#c44b4b89";
		setTimeout(() => {
			ac.style.backgroundColor = col;
		}, 200);
	}

	if (pressdKey == "Backspace") {
		text = deletText(text, 1);
		let ac = document.querySelector(".delete");
		console.log(ac);
		let col = ac.style.backgroundColor;
		ac.style.backgroundColor = "#c44b4b89";
		setTimeout(() => {
			ac.style.backgroundColor = col;
		}, 200);
	}

	displayEquation(text);
	output(text);

	if (pressdKey == "=") {
		if (outputNode.value == "") {
			text = "Syntax Error";
		} else {
			text1 = outputNode.value;
			displayEquation(text1);
			output("");
		}
	}
	return text;
}

function resizeText() {
	resizeTextImpl(equation, display.clientWidth * 0.92, 30);
	resizeTextImpl(outputNode, display.clientWidth * 0.88, 24);
}

function resizeTextImpl(elem, w, minSize) {
	let size = parseInt(window.getComputedStyle(elem).fontSize);
	elem.cols = elem.value.length;
	console.log(elem.cols);
	console.log(elem.scrollWidth);
	elem.style.whiteSpace = "nowrap";
	elem.style.wordWrap = "unset";
	elem.style.overflow = "unset";

	while (elem.scrollWidth < w && size < 70) {
		size += 0.1;
		elem.style.fontSize = `${size}px`;
	}
	while (elem.scrollWidth > w && size > minSize) {
		size -= 0.1;
		elem.style.fontSize = `${size}px`;
	}
	elem.style.whiteSpace = "normal";
	elem.style.wordWrap = "break-word";
	elem.style.overflow = "hidden";

	elem.scrollTop = elem.scrollHeight;
}

function isOverflown(elem, p) {
	return elem.scrollWidth * 1.05 > display.clientWidth * p;
}

function isSmaller(elem, p) {
	return elem.scrollWidth * 1.05 < display.clientWidth * p;
}

function darkMode() {
	r.style.setProperty("--back", "#ffffff");
	r.style.setProperty("--btnTextColor", "#ffffff");
	r.style.setProperty("--menueTextColor", "#ffffff");
	r.style.setProperty("--displayTextColor", "wheat");
	r.style.setProperty("--numbersBackgroundColor", "#636363");
	r.style.setProperty("--operatorsBackgroundColor", "#214c7a");
	r.style.setProperty("--functionsBackgroundColor", "#404040");
	r.style.setProperty("--bodyBackgroundColor", "#000000");
	r.style.setProperty("--displayBackgroundColor", "#303030");
	r.style.setProperty("--menueBackgroundColor", "#626262");
	r.style.setProperty("--menueHoverBackgroundColor", "#0f0f0f");
	r.style.setProperty(
		"--filter",
		"invert(100%) sepia(0%) saturate(7467%) hue-rotate(133deg) brightness(114%) contrast(105%)"
	);
}

function lightMode() {
	r.style.setProperty("--back", "#ededed");
	r.style.setProperty("--btnTextColor", "#000000");
	r.style.setProperty("--menueTextColor", "#000000");
	r.style.setProperty("--displayTextColor", "000000");
	r.style.setProperty("--numbersBackgroundColor", "#d1d1d185");
	r.style.setProperty("--operatorsBackgroundColor", "#2990fe85");
	r.style.setProperty("--functionsBackgroundColor", "#7e7d7d53");
	r.style.setProperty("--bodyBackgroundColor", "#fff");
	r.style.setProperty("--displayBackgroundColor", "#e3f1ff");
	r.style.setProperty("--menueBackgroundColor", "#85c4ffb8");
	r.style.setProperty("--menueHoverBackgroundColor", "#fffffffc");
	r.style.setProperty("--filter", "none");
}

function defaultMode() {
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		darkMode();
	} else {
		lightMode();
	}
}

function output(text) {
	let final = text;
	let endChar = text.slice(-1);
	if (isNaN(endChar) && endChar != ")") {
		final = deletText(text, 1);
	}
	let open = [0];
	let close = [0];
	if (text.includes("(")) {
		open = text.match(/\(/g);
		let n = open.length - close.length;
		if (text.includes(")")) {
			close = text.match(/\)/g);
			n = open.length - close.length - 1;
		}
		for (let i = 0; i <= n; i++) {
			final += ")";
		}
	}

	final = final
		.replace(/\^/g, "**")
		.replace(/\xD7/g, "*")
		.replace(/\xF7/g, "/");

	console.log(final);
	try {
		const result = eval(final);
		outputNode.value = result;
	} catch (error) {
		outputNode.value = "";
	}
	if (isNaN(text)) {
		outputNode.classList.add("show");
	} else {
		outputNode.classList.remove("show");
	}
	resizeText();
}
