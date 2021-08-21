

const screenDisplay = document.getElementById('screen');

document.addEventListener("DOMContentLoaded", function() {

	const spans = document.querySelectorAll('.buttons span');
	const spanArray = Array.from(spans);

	spanArray.map(button => button.addEventListener('click', function() {
		
		if (button.innerText === "C") {
			clear();
		}else if (button.innerText === "=") {
			evaluate();
		}else{
			append(button.innerText);
		}	
	}));
});

function append(text) {

	if (text == "÷") {
		screenDisplay.innerText += "/";
	}else if (text === "x") {
		screenDisplay.innerText += "*";
	}else{
		screenDisplay.innerText += text;
	}
}

function evaluate() {

	screenDisplay.innerText = eval(screenDisplay.innerText);
}

function clear() {

	screenDisplay.innerText = "";
}