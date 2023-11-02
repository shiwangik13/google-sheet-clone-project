let header = document.getElementById("header");

const body = document.getElementById("body");

for (let i = 65; i <= 90; i++) {
    let ch = String.fromCharCode(i);

    let bold = document.createElement("b");
    bold.id = ch;
    bold.classList.add("columnheaders");
    bold.innerText = ch;

    header.appendChild(bold);

}

// appending row and column function
function appendRow(sNO) {
    let row = document.createElement("div");
    row.className = "row";
    // for every single row we ned to make 27 cells
    for (let i = 64; i <= 90; i++) {
        // append s.no of every rows
        if (i === 64) {
            let boldElement = document.createElement("b");
            boldElement.innerText = `${sNO}`;
            row.appendChild(boldElement);

        } else {
            let cell = document.createElement("div");
            cell.contentEditable = "true";
            cell.id = `${String.fromCharCode(i)}${sNO}`;
            cell.addEventListener("focus", onCellFocus);
            row.appendChild(cell);
        }
    }

    body.appendChild(row);
}
let i = 1;
// creating 100 rows that why we are calling it 100 times 
for (i = 1; i <= 100; i++) {
    appendRow(i);
}

// here is the function that will add more 10 cell each times for new data 
let limit = i;
function addMoreCells() {
    for (i = limit; i < 10 + limit; i++) {
        appendRow(i);
    }
    limit = i;
}





