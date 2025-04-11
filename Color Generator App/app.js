const Colors = ["red" , "blue", " green ", "orange" ,"yellow"];
const btn = document.querySelector(".changer-btn")
const Color = document.querySelector(".colors-Id")



btn.addEventListener("click",function(){
// Get Random Number between 0 - 4;
const randomNum = getRandomNumber();
Color.textContent = Colors[randomNum];
document.body.style.backgroundColor = Colors[randomNum];
})
function getRandomNumber(){
    return Math.floor(Math.random()*Colors.length);
}


