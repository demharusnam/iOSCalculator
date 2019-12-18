// MARK - UI

// calculator format
const rows = [
	{'clear' : 'C', 'backspace' : 'del', 'int' : '-1', 'div' : '/'  },
	{'seven' : '7', 'eight' : '8', 'nine' : '9', 'mul' : '*' },
	{'four' : '4', 'five' : '5', 'six' : '6', 'sub' : '-'	 },
	{'one' : '1', 'two' : '2', 'three' : '3', 'add' : '+'	 },
	{'zero' : '0', 'dec' : '.', 'eq' : '='					 }
];

// container containing calculator
const container = document.querySelector('.main');
// display text for calculator
let displayText = "0";
// calculation query
let query = "";

// setting multiple attributes of doc element at once
const setAttributes = (docElement, attrs) => {
	for(const key in attrs) {
		docElement.setAttribute(key, attrs[key]);
	}
}

const createAnswerDisplay = () => {
	const answerDisplay = document.createElement("LABEL");
	answerDisplay.className = "disp";
	answerDisplay.id = "disp";
	answerDisplay.textContent = displayText;
	container.appendChild(answerDisplay);
}

// creating calculator grid
const createGrid = (rows) => {
	for(let i = 0; i < rows.length; i++) {
		const row = rows[i];
		for (const key in row) {
			const button = document.createElement("BUTTON");
			button.className = "grid";
			button.id = `${key}`; 
			button.innerHTML = (key == 'int') ? '+/-' : row[key];
			container.appendChild(button);
		}
	}	
}

const initUI = () => createGrid(rows); createAnswerDisplay(); 

const updateDisplayText = (str) => {
	displayTextUI = document.querySelector('.disp');
	switch (str) {
		case 'int':
			//displayText += displayText[displayText.length-1] ==
			break;
		default:
			// statements_def
			break;
	}
}
	
// MARK - Computations
const add 		= (x, y) => x + y;
const subtract 	= (x, y) => x - y;
const multiply 	= (x, y) => x*y;
const divide 	= (x, y) => x/y;

const operate = (op, x, y = 0, str = "") => {
	switch (op) {
		case '+':
			add(x, y); // return value unused
			break;
		case '-':
			subtract(x, y); // return value unused
			break;
		case '*':
			multiply(x, y); // return value unused
			break;
		case '/':
			divide(x, y); // return value unused
			break;
		case '-1':
			if (str.length != 0) {
				index = str.length-1;
				char = str[index];
				switch (char) {
					case '*', '/', '+', '-':
						alert("Cannot make operator an integer!");
						break;
					case '0':

						alert("Cannot make 0 negative!");
						break;
					default:
						
						break;
				}
			}
			break;
	}
}

// main
initUI();

/*const buttons = Array.from(document.querySelectorAll(".grid"));

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		switch (button.id) {
			case 'int':
				
				break;
			default:
				// statements_def
				break;
		}
	});
});*/





















