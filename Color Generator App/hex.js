const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".changer-btn");
const Color = document.querySelector(".colors-Id");

btn.addEventListener("click", function () {
    let hexColors = "#";
    for (let index = 0; index < 6; index++) {
        hexColors += hex[getRandomNumbers()];

    }
    Color.textContent = hexColors;
    document.body.style.backgroundColor = hexColors

})
function getRandomNumbers() {
    return Math.floor(Math.random() * hex.length)

};































