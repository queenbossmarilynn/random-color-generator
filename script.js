const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    
}

// randomColor();
const colorContainerEls = document.querySelectorAll(".color-container");
// console.log(colorContainerEls);

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor()
        // console.log(newColorCode)
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    })
}

generateColors()

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        // console.log(randomNum)
        colorCode += chars.substring(randomNum, randomNum +1);
        // console.log(colorCode, randomNum);   
    }
    return colorCode
}