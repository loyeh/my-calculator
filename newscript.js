// function for adding the innerText of pressed button to the display

const equation = document.getElementById("equation");
const display = document.getElementById("display");
const settingContent = document.getElementById("settingContent");
const dropdowns = document.getElementsByClassName("settingContent");
// const settingIcon = document.getElementsByClassName("settingContent");
const calculatorBtn = document.getElementsByClassName("calculator_button");
const outputNode = document.getElementById("output");
const r = document.querySelector(":root");
let equationText = "";

function output(text) {
	outputNode.innerText = text;
	if (isNaN(text)) {
		deletText();
		outputNode.classList.add("show");
	} else {
		outputNode.classList.remove("show");
	}
}

function displayUpdate(equationText) {
	showEquation(equationText);
	matchContendSize(equationText, display);
	output(equationText);
}
function inputText(char) {
	equationText += char;
	displayUpdate(equationText);
}
function showEquation(text) {
	if (text == "") {
		equation.textContent = "0";
	}
	equation.textContent = text;
}

// console.log(equation.value);

function all_clear() {
	equationText = "0";
	equation.style.fontSize = "inherit";
	equation.style.wordWrap = "unset";
	displayUpdate(equationText);
}

function deletText() {
	let d = equation.textContent;
	let text = "";

	if (text == "") {
		text = "0";
	}
	displayUpdate(text);
}

window.onclick = function (event) {
	console.log(event.target);
	console.log(event.target.textContent);
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
		inputText(event.target.innerText);
	}
};
function calculator(event) {
	let pressdKey = event.key;

	console.log(pressdKey);

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
		pressdKey == "/" ||
		pressdKey == "(" ||
		pressdKey == ")" ||
		pressdKey == "."
	) {
		inputText(pressdKey);
		for (let i = 0; i < calculatorBtn.length; i++) {
			if (calculatorBtn[i].innerText == pressdKey) {
				let col = calculatorBtn[i].style.backgroundColor;
				calculatorBtn[i].style.backgroundColor = "#c44b4b89";
				setTimeout(() => {
					calculatorBtn[i].style.backgroundColor = col;
				}, 200);
			}
		}
	}

	if (pressdKey == "c" || pressdKey == "Escape") {
		all_clear();
	}

	if (pressdKey == "*") {
		inputText("×");
	}
	if (pressdKey == "Backspace") {
		deletText();
	}

	shrinkText();
}
function matchContendSize(nodeContent, contentPlace) {
	if (isOverflown(nodeContent, contentPlace)) {
		shrinkText(nodeContent);
	}
	if (isSmaller(nodeContent, contentPlace)) {
		ExpandText(nodeContent);
	}
	nodeContent.scrollTop = nodeContent.scrollHeight;
}

function shrinkText(nodeContent) {
	let size = parseInt(window.getComputedStyle(nodeContent).fontSize);
	if (size > 30) {
		size -= 0.1;
		nodeContent.style.fontSize = `${size}px`;
	} else {
		nodeContent.style.wordWrap = "break-word";
		nodeContent.style.overflow = "hidden";
		return;
	}
}

function ExpandText(nodeContent) {
	let size = parseInt(window.getComputedStyle(nodeContent).fontSize);
	let txt = nodeContent.textContent;

	while (size <= 70 && txt.length < 20) {
		size += 0.1;
		nodeContent.style.fontSize = `${size}px`;
		nodeContent.style.wordWrap = "unset";
		nodeContent.style.overflow = "unset";
	}
}

function isOverflown(nodeContent, contentPlace) {
	return nodeContent.scrollWidth * 1.05 > contentPlace.clientWidth;
}

function isSmaller(nodeContent, contentPlace) {
	return nodeContent.scrollWidth * 1.05 < contentPlace.clientWidth;
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
