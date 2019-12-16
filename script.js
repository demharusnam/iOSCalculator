const rows = [
	['C', '+/-', '%', '/'],
	['7', '8',   '9', '*'],
	['4', '5',   '6', '-'],
	['1', '2',   '3', '+'],
	['0', '00',  '.', '=']
];

const container = document.querySelector('.main');

function createGrid(rows) {
	for(row in rows) {
		row.forEach(function(element, index) {
			const button = document.createElement("BUTTON");
			button.className = "grid";
			button.id = `$(element)`;
			container.appendChild(button);
		});
	}
}

createGrid(rows);