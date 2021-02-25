const boxes = document.querySelectorAll(".box");
console.log(boxes)
const resetButton = document.querySelector(".reset-button")

let checkWinner = function () {
    window.alert("Winner winner chicken dinner!")
}
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function (e) {
        e.preventDefault()
        if (boxes[i].style.background === "") {
            boxes[i].style.background = "blue"
        } else if (boxes[i].style.background == "blue") {
            boxes[i].style.background = "red"
        } else boxes[i].style.background = ""
    })
    resetButton.addEventListener("click", function (e) {
        e.preventDefault()
        boxes[i].style.background = ""
    })
}


