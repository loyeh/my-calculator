// function for adding the value of pressed button to the display

const display = document.getElementById("equation");

function inputText(x, y = 1) {
	if (display.innerText == 0) {
		display.innerText = "";
	}
	if (y == "a") {
		let d = display.innerText;
		if (d[d.length - 1] !== x) {
			display.innerText += x;
		}
	} else {
		display.innerText += x;
	}
}
console.log(display.innerText);

function all_clear() {
	display.innerText = "0";
}
