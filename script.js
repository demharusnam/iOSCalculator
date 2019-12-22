// MARK - UI

// calculator format
const rows = {
	'clear' : 'AC', 'backspace' : 'del', 'int' : '+/-', 'div' : '/'	,
	'seven' : '7', 'eight' : '8', 'nine' : '9', 'mul' : '*'			,
	'four' : '4', 'five' : '5', 'six' : '6', 'sub' : '-'			,
	'one' : '1', 'two' : '2', 'three' : '3', 'add' : '+'			,
	'zero' : '0', 'dec' : '.', 'eq' : '='					 
};

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
	for (const key in rows) {
		const button = document.createElement("BUTTON");
		button.className = "grid";
		button.id = `${key}`; 				// key of rows dict becomes button ID
		button.textContent = rows[key];
		container.appendChild(button);
	}
}

const initUI = () => createGrid(rows); createAnswerDisplay(); 

const updateDisplayText = (str) => {
	displayTextUI = document.querySelector('.disp');
	const lastPos = displayText.length-1;
	switch (str) {
		case 'clear':
			displayText = "0";
			break;
		case 'backspace':
			// regex pattern handle deletion of numbers with/without brackets and negative signs
			// [^()]+(?=\)[^()]*$) excludes brackets (UNUSED)
			displayText = (displayText.charAt(lastPos) == ")") 
			?  displayText.replace(/\((?=[^\(]*$)(.*)/, (match) => {
				return match.length > 3
				? match.slice(0,-2) + ')'
				: match.length == displayText.length
				? "0"
				: ""
				})
			: displayText.slice(0, -1);
			break;
		case 'int':
			// regex pattern to prevent operators from affected by int operator
			displayText = displayText.replace(/\(?-?\d+\.?\d*\)?$/, (match) => { 
				return (match === '0') 
				? '0' 
				: (match.charAt(match.length-1) == ')') 
				? match.slice(2,-1)
				: `(${match*-1})`;
			});
			break;
		case 'add': case 'sub': case 'mul': case 'div':
			// regex pattern to prevent chaining of multiple operators without any values to operate on
			displayText = displayText.match(/\.$/) === null
			? displayText.replace(/\/?\*?\+?\-?$/, (match) => rows[str])
			: displayText;
			break;//\(?-?\d+\.?\d*\)?$
		case 'dec':
			// regex pattern to prevent decimal being added after operators/consecutive decimals/multiple decimals in one number
			displayText = (displayText.match(/[(^0-9\.)]+(?=[^.0-9\+\-\/\*]*$)/) === null) || (displayText.match(/[(^0-9\.)]+(?=[^.0-9\+\-\/\*]*$)/)[0].match(/\./g) !== null)
			? displayText
			: displayText + rows[str];
			break;
		case 'eq':
			displayText.match(/[\.\+\-\*\/]$/) !== null // checks if calculation ends in decimal or operator
			? alert(`Error. Cannot end expression with "${displayText.match(/[\.\+\-\*\/]$/)[0]}"!`)
			: displayText.match(/[\-\+\*\/]/g) !== null // checks if calculation contains any operators at all
			? compute()
			: null;
			break;
		default:
			displayText = (displayText === "0") ? "" : displayText;
			(displayText.charAt(lastPos) == ")") 
			? displayText = displayText.substring(0, lastPos) + rows[str] + displayText.substring(lastPos)  
			: displayText += rows[str];
			break;
	}
	displayTextUI.textContent = displayText;
	updateClear();
}

// update the label for the clear button (AC/C)
const updateClear = () => document.querySelector("#clear").textContent = (displayText === "0") ? 'AC' : 'C'; 
	
// MARK - Computations
const add 		= (x, y) => x + y;
const subtract 	= (x, y) => x - y;
const multiply 	= (x, y) => x*y;
const divide 	= (x, y) => x/y;

const operate = (op, x, y = 0, str = "") => {
	switch (op) {
		case '+':
			return add(x, y);
		case '-':
			return subtract(x, y); 
		case '*':
			return multiply(x, y); 
		case '/':
			return divide(x, y); 
		default:
			return null;
	}
}

const compute = () => {
	let computing = displayText.match(/([0-9\.]+)|([\+\/\-\*])|(\(-[0-9\.]*\))/g), 
		computed;
	console.log(computing);
	/*const operatorCount = displayText.match(/[\-\+\*\/]/g).length;
	for(let i = 0; i < operatorCount; i++) {
		
	}*/
}

//const checkForNegative

// main
initUI();

const buttons = Array.from(document.querySelectorAll(".grid"));

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		updateDisplayText(button.id);
	});
});

//let strr = "10.11+11.3-89987+(-12.32)-(-123.3234235)*(-123123.45645)";
//console.log(strr.match(/([0-9\.]+)|([\+\/\-\*])|(\(-[0-9\.]*\))/g));

compute();

















