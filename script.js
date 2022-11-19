// function for adding the innerText of pressed button to the display

const equation = document.getElementById("equation");
const display = document.getElementById("display");
const settingContent = document.getElementById("settingContent");
const dropdowns = document.getElementsByClassName("settingContent");
const r = document.querySelector(":root");
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
	settingContent.classList.toggle("show");
}
window.onclick = function (event) {
	if (!event.target.matches(".settingIcon")) {
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
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
	equation.scrollTop = equation.scrollHeight;
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
	equation.scrollTop = equation.scrollHeight;
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
	r.style.setProperty("--back", "#ffffff");
	r.style.setProperty("--btnTextColor", "#ffffff");
	r.style.setProperty("--menueTextColor", "#ffffff");
	r.style.setProperty("--displayTextColor", "#000000");
	r.style.setProperty("--numbersBackgroundColor", "#636363");
	r.style.setProperty("--operatorsBackgroundColor", "#214c7a");
	r.style.setProperty("--functionsBackgroundColor", "#404040");
	r.style.setProperty("--bodyBackgroundColor", "#000000");
	r.style.setProperty("--displayBackgroundColor", "#717070");
	r.style.setProperty("--menueBackgroundColor", "#626262");
	r.style.setProperty("--menueHoverBackgroundColor", "#0f0f0f");
}
function lightMode() {
	r.style.setProperty("--back", "#ffffff");
	r.style.setProperty("--btnTextColor", "#000000");
	r.style.setProperty("--menueTextColor", "#000000");
	r.style.setProperty("--displayTextColor", "wheat");
	r.style.setProperty("--numbersBackgroundColor", "#d1d1d185");
	r.style.setProperty("--operatorsBackgroundColor", "#2990fe85");
	r.style.setProperty("--functionsBackgroundColor", "#7e7d7d53");
	r.style.setProperty("--bodyBackgroundColor", "#ffffff");
	r.style.setProperty("--displayBackgroundColor", "#000000dd");
	r.style.setProperty("--menueBackgroundColor", "#ffffff8b");
	r.style.setProperty("--menueHoverBackgroundColor", "#fffffffc");
}
function defaultMode() {
	r.style.setProperty("--back", "initial");
	r.style.setProperty("--btnTextColor", "initial");
	r.style.setProperty("--menueTextColor", "initial");
	r.style.setProperty("--displayTextColor", "initialt");
	r.style.setProperty("--numbersBackgroundColor", "initial");
	r.style.setProperty("--operatorsBackgroundColor", "initial");
	r.style.setProperty("--functionsBackgroundColor", "initial");
	r.style.setProperty("--bodyBackgroundColor", "initial");
	r.style.setProperty("--displayBackgroundColor", "initial");
	r.style.setProperty("--menueBackgroundColor", "initial");
	r.style.setProperty("--menueHoverBackgroundColor", "initial");
}
