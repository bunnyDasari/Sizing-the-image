let imageElement = document.getElementById("image");
let warningMessage = document.getElementById("warningMessage");
let imagewidth = document.getElementById("imageWidth");

let originalImageWidth = 200;
let maxWidth = 300;
let minWidth = 100;
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image.";
imageElement.style.width = originalImageWidth + "px";
imagewidth.textContent = originalImageWidth + "px";

function onButton() {
    if (originalImageWidth <= minWidth) {
        warningMessage.textContent = maxWidthWarningMessage;
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updatedValue = originalImageWidth + "px";
        warningMessage.textContent = "";
        imageElement.style.width = updatedValue;
        imageElement.textContent = updatedValue;

        imagewidth.textContent = updatedValue;
    }
}

function offButton() {
    if (originalImageWidth >= maxWidth) {
        warningMessage.textContent = minWidthWarningMessage;
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updatedValue = originalImageWidth + "px";
        warningMessage.textContent = "";
        imageElement.style.width = updatedValue;
        imageElement.textContent = updatedValue;

        imagewidth.textContent = updatedValue;
    }
}