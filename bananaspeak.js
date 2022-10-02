var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var Output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error is occured!", error);
    alert("the server is down!");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var Translatedtxt = json.contents.translated
            output.innerText = Translatedtxt;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);