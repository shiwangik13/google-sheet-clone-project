let activeCellElement = document.getElementById("active-cell");


const initialOptionsState = {
    fontFamily: "",
    isBoldSelected: false,
    isItalicSelected: false,
    isUnderlineSelected: false,
    textAlign: "start", // 'right' or 'center'
    textColor: "#000", // default black
    backgroundColor: "#fff", // default white  
    fontSize: 14,
};

// making active cell to display id for which cell we are adding text and performing operations
let activeCell = null;

let activeOptionsState;

// THESE ALL BUTTONs will be needed for permamnet every times whhen user clicks on any cell thats why we are keeping it global
const boldButton  = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underline");

// accessing all three text-align buttons for different text align
const textAlignButtons = document.getElementsByClassName("text-align");

// function to change style 
function toggleButtonsStyle(button, isSelected) {
    if(isSelected) {
    
        button.classList.add("active-options");
    } else {
        button.classList.remove("active-options");
    }    
}

function highlightOptionsButtonsOnFocus() {

    // checking that the current state is bold or not
    toggleButtonsStyle(boldButton, activeOptionsState.isBoldSelected);

    // checking for italic buttons
    // if(activeOptionsState.isItalicSelected) {

    //     italicButton.classList.add("active-options");
    // } else {
    //     italicButton.classList.remove("active-options");
    // }
    toggleButtonsStyle(italicButton, activeOptionsState.isItalicSelected);

    // chekcing for underlines buttons
    // if(activeOptionsState.isUnderlineSelected) {

    //     underlineButton.classList.add("active-options");
    // } else {
    //     underlineButton.classList.remove("active-options");
    // }
    toggleButtonsStyle(underlineButton, activeOptionsState.isUnderlineSelected);

// we are passing the current aligns for this function either left, right or center
    highlightTextAlignButtons(activeOptionsState.textAlign);

}


// fucntion to get on which cell we are focusing we will get id for that cell
function onCellFocus(event) {

    // we are refraining to execute again if some block is clicked and again we clicked else not in any block ao our focus should remains in same block but task should not executed again aftyer blur events that why we put this consitions
    if(activeCell === event.target.id) {
        return;
    }

    // here we are upda
    activeCell = event.target.id;
    activeCellElement.innerText = activeCell;
    // console.log(event.target.id);

    const element = document.getElementById(activeCell);
    const computedStyle = getComputedStyle(element);

    // These codes are used to show present selected header highlighiting with dim blue colors when user clicks on any cell
    let string = activeCell+"";
    let charId = activeCell.charAt(0);
    let headers = document.getElementsByClassName("columnheaders");
    //console.log(typeof headers);
    
    for(let i=0;i<headers.length;i++) {
        if(headers[i].id==charId) {
            // console.log(i);
            headers[i].style.backgroundColor = "#D3E3FD";
        } else {
            headers[i].style.backgroundColor = "white";
        }
    };

    // let cellToBeHighlight = document.getElementById(charId); 
    // cellToBeHighlight.style.backgroundColor = "red";


    // console.log("last line executed");
    // for each element all these properties should be intitalised
    activeOptionsState = {
        fontFamily: computedStyle.fontFamily,
        isBoldSelected: computedStyle.fontWeight === "600",
        isItalicSelected: computedStyle.fontStyle === "italic",
        isUnderlineSelected: computedStyle.textDecoration.includes("underline"),
        textAlign: computedStyle.textAlign, // 'right' or 'center'
        textColor: computedStyle.color, // default black
        backgroundColor: computedStyle.backgroundColor, // default white  
        fontSize: computedStyle.fontSize,
    };
    // cellToBeHighlight.style.backgroundColor = "";
    // console.log(activeOptionsState);

    // highlightTextAlignButtons(activeOptionsState);
    highlightOptionsButtonsOnFocus();
}


// const activeOptionsState = {...initialOptionsState};

// this function will be trigerred when user clicks on it and make it bold if not else unblold it
function onClickBold(boldButton) {
    /*
    1. Toggle active-optioons class for button
    2. Get the selected cell
     */
    // toggle classList properties toggle class name if it is preset then remove else add it
    boldButton.classList.toggle("active-options");


    const element = document.getElementById(activeCell);
    const fontWeight = getComputedStyle(element).fontWeight;
    // console.log(element.style.fontWeight);

    // if(activeCell) {
    //    if(fontWeight === "400") {
    //       element.style.fontWeight = "600";
    //     } else {
    //        element.style.fontWeight = "400";
    //     }
    // }

    if (activeCell) {
        if (activeOptionsState.isBoldSelected === false) {
            element.style.fontWeight = "600";
            activeOptionsState.isBoldSelected = true;

        } else {
            element.style.fontWeight = "400";
            activeOptionsState.isBoldSelected = false;
        }
    }
}

// this function will be trigerred when user clicks on it and make it Italic if not else make it noraml
function onClickItalic(italicButton) {

    italicButton.classList.toggle("active-options");
    const element = document.getElementById(activeCell);
    const fontStyle = getComputedStyle(element).fontStyle;

    if (activeCell) {
        if (activeOptionsState.isItalicSelected === false) {
            element.style.fontStyle = "italic";
            activeOptionsState.isItalicSelected = true;
        } else {
            element.style.fontStyle = "normal";
            activeOptionsState.isItalicSelected = false;
        }
    }
}


// this function will be trigerred when user clicks on it and make it Italic if not else make it noraml
function onClickUnderline(underlineButton) {

    underlineButton.classList.toggle("active-options");
    const element = document.getElementById(activeCell);
    const underline = getComputedStyle(element).fontStyle;

    if (activeCell) {
        if (activeOptionsState.isUnderlineSelected === false) {
            element.style.textDecoration = "underline";
            activeOptionsState.isUnderlineSelected = true;
        } else {
            element.style.textDecoration = "none";
            activeOptionsState.isUnderlineSelected = false;
        }
    }
}

// The below function takes care that text align should be highlighted based on event triggering
function highlightTextAlignButtons(highlightButtons) {
    /*
    highlightButton === "left" than make left buttons as hignlight
    highlightButton === "right" than make right buttons as hignlight
    highlightButton === "center" than make ceter buttons as hignlight
     */

    for(let i=0; i<textAlignButtons.length; i++) {
        if(textAlignButtons[i].getAttribute("data-value") === highlightButtons) {
            textAlignButtons[i].classList.add("active-options");
        } else {
            textAlignButtons[i].classList.remove("active-options");
        }
    } 
}


function onClickTextAlign(textAlignButton) {
    let selectedValue = textAlignButton.getAttribute("data-value");
    // highlightTextAlignButtons(selectedValue);
    console.log(selectedValue);

    if(activeCell) {
        let element = document.getElementById(activeCell);
        element.style.textAlign = selectedValue;
        activeOptionsState.textAlign = selectedValue;
    }
}


function onChangeTextColor(textColorInput) {
    let selectedColorValue = textColorInput.value;
    // console.log(selectedColorValue);

    let element = document.getElementById(activeCell);

    if(activeCell) {
        element.style.color = selectedColorValue;
        activeOptionsState.textColor = selectedColorValue;
    }
}


function onchangeBackgroundColor(backgroundColor) {
    let selectedBackgoundColor = backgroundColor.value;

    let element = document.getElementById(activeCell);

    if(activeCell) {
        element.style.backgroundColor = selectedBackgoundColor;
        activeOptionsState.backgroundColor = selectedBackgoundColor;
    }
}  