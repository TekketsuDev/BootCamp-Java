$(document).ready(function() {
    $("#toggleRed").click(function() {
        $("#paragraphJQ").toggleClass("red-text");
    });
});

const paragraph = document.getElementById("paragraphJS");
const toggleButton = document.getElementById("toggleBlue");

toggleButton.addEventListener("click", () => {
    paragraph.classList.toggle("blue-text");
});