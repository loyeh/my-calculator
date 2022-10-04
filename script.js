// function for adding the value of pressed button to the display

const display = document.getElementById("equation");

function inputText(x) {
	if (display.innerText == 0) {
		display.innerText = "";
	}
	display.innerText += x;
}

function all_clear() {
	display.innerText = "0";
}
