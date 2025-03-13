const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".size");
const MAX_SIZE = 100;
let opacity = 0;

//     color:rgb(138, 43, 226);

function randomColor() {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = (100/size) + "%";

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.flexBasis = squareSize;
        square.addEventListener("mouseenter", () => {
            opacity+=0.05;
            square.style.opacity=opacity;
            square.style.backgroundColor = randomColor();

        });
        container.appendChild(square);
    }
}

function getUserSize() {
    let userInput = parseInt(prompt(`Choose the size of your sketch - MAX ${MAX_SIZE}`));

    if (isNaN(userInput) || userInput <= 0) {
        alert("Please enter a valid positive number.");
        return getUserSize();
    }

    if (userInput > MAX_SIZE) {
        alert(`Maximum size is ${MAX_SIZE}. Please enter a smaller number.`);
        return getUserSize();
    }

    return userInput;
}


createGrid(16);

sizeBtn.addEventListener("click", () => {
    const newSize = getUserSize();
    if (newSize) {
        createGrid(newSize);
    }
    opacity=0;
});




