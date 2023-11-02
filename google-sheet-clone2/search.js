document.getElementById("searchIcon").addEventListener("click", searchForInput);

let outputToBeDisplayed = document.getElementById("outputShow");

// this function is used to search the some particular text through searchbar
function searchForInput() {
    let searchInputtext = document.getElementById("searchInput");

    let textToBeSearch = searchInputtext.value;

    let flag = false;
    for(let i=1; i<=100; i++) {
        for(let j=65; j<=90; j++) {
            let id = `${String.fromCharCode(j)}${i}`;
            let divElement = document.getElementById(id);

            if(divElement.innerText === textToBeSearch) {
                // onchangeBackgroundColor(divElement);
                console.log(divElement.innerText, textToBeSearch, id);
                
                outputToBeDisplayed.innerText = textToBeSearch;
                flag = true;
                break;
            }
        }
        if(flag==true) {
            break;
        }
    }
    if(flag == false) {
        outputToBeDisplayed.innerText = "Not Found";
    }
}