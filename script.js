let slices = document.querySelectorAll(".qtr")
let playersClicks = 0
let computersClicks = []
let qtrs = [0, 1, 2, 3]
const sounds = {
    slice1: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    slice2: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    slice3: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    slice4: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
  };
const resetButton = document.querySelector(".reset-button")
let fakearry = []
let start = document.querySelector(".start-button")
start.addEventListener("click", function () {
    roundStart()
})
let roundStart = function () {
    resetButton.addEventListener("click", function () {
        location.reload()
    })
    flash = function () {
        for (let i = 0; i < computersClicks.length; i++) {
            setTimeout(() => {
                slices[computersClicks[i]].style.background = ""
            }, i * 1000)
            setTimeout(() => {
                slices[computersClicks[i]].style.background = "none"
            }, i * 1000 + 400)
        }
    }
    for (let i = 0; i < slices.length; i++) {
        slices[i].style.background = "none"
        slices[i].addEventListener("click", function () {
            slices[i].style = ""
            setTimeout(() => {
                slices[i].style.background = "none"
                checkLoser()
            }, 500)
            playersClicks = i
        })
    }
    let computersTurn = function () {
        randomClick = qtrs[Math.floor(Math.random() * qtrs.length)]
        computersClicks.push(randomClick)
        console.log(computersClicks)
        flash()
    }
    computersTurn()
    let checkLoser = function () {
        let fake = computersClicks.shift()
        if (fake == playersClicks) {
            fakearry.push(fake)
            if (computersClicks.length == 0) {
                computersClicks = computersClicks.concat(...fakearry)
                fakearry= []
                computersTurn()
                console.log("next round")
            }
        } else window.alert("Game over"), resetButton.click()
    }
}

