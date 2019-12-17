// MARK - UI

// calculator format
const rows = [
	{'clear' : 'C', 'int' : '+/-', 'perc' : '%', 'div' : '/' },
	{'seven' : '7', 'eight' : '8', 'nine' : '9', 'mul' : '*' },
	{'four' : '4', 'five' : '5', 'six' : '6', 'sub' : '-'	 },
	{'one' : '1', 'two' : '2', 'three' : '3', 'add' : '+'	 },
	{'zero' : '0', 'dec' : '.', 'eq' : '='					 }
];

// container containing calculator
const container = document.querySelector('.main');

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
	answerDisplay.textContent = "3+2*8-1/2";
	container.appendChild(answerDisplay);
}

// creating calculator grid
const createGrid = (rows) => {
	for(let i = 0; i < rows.length; i++) {
		const row = rows[i];
		for (const key in row) {
			const button = document.createElement("BUTTON");
			button.className = "grid";
			switch (row[key]) {
				case 'C', '+/-', '%':
					button.id = `${key}`; 
					break;
				case '/', '*', '-', '+', '=':
					button.id = `${key}`; 
					break;
				default:
					button.id = `${key}`;
					break;
			}
			button.innerHTML = row[key];
			container.appendChild(button);
		}
	}	
}

const createUI = () => createGrid(rows); createAnswerDisplay(); 
	
// MARK - Computations

// main
createUI();