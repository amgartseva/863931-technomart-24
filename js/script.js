var linkMap = document.querySelector(".map-image");
var popupMap = document.querySelector(".pop-up-map");
var closeMap = popupMap.querySelector(".modal-close");

var linkWrite = document.querySelector(".write-us-button");
var popupWrite = document.querySelector(".pop-up-write-us");
var closeWrite = popupWrite.querySelector(".modal-close");
var nameWrite = popupWrite.querySelector("[type=text]");

//Pop-up-map

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("pop-up-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("pop-up-show");
});

//Pop-up-write

linkWrite.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWrite.classList.add("pop-up-show");
    nameWrite.focus();
});

closeWrite.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupWrite.classList.remove("pop-up-show");
});

