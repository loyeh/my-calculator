// function for adding the innerText of pressed button to the display

const equation = document.getElementById("equation");
const display = document.getElementById("display");
const dropdowns = document.getElementsByClassName("settingContent");
function inputText(x) {
	if (equation.value == "0") {
		equation.value = "";
	}
	equation.value += x;
	shrinkText();
}
// console.log(equation.value);

function all_clear() {
	equation.value = "0";
	equation.style.fontSize = "inherit";
	equation.style.wordWrap = "unset";
}

function deletText() {
	let d = equation.value;
	let text = "";
	for (let i = 0; i < d.length - 1; i++) {
		text += d[i];
	}
	if (text == "") {
		text = "0";
		equation.style.fontSize = "inherit";
		equation.style.wordWrap = "unset";
	}
	equation.value = text;
	ExpandText();
}

function showSetting() {
	const settingContent = document.getElementById("settingContent");
	settingContent.classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches(".settingIcon")) {
		var i;
		for (let i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}

	equation.focus();
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
	}
	if (equation.rows > 4) {
		equation.style.top = "unset";
		equation.style.bottom = "5px";
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
	let txt = equation.value;

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
	element.classList.remove("lightMode");
	element.classList.remove("default");
	element.classList.add("darkMode");
}
function lightMode() {
	var element = document.getElementById("calculator_body");
	element.classList.remove("default");
	element.classList.add("lightMode");
}
function defaultMode() {
	var element = document.getElementById("calculator_body");
	element.classList.add("default");
}
