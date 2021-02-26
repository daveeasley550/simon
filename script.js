let slices = document.querySelectorAll(".qtr")
let playersClicks = 0
let computersClicks = []
let qtrs = [0, 1, 2, 3]
let round = 1
const resetButton = document.querySelector(".reset-button")
let temp = []
let fakearry = []
let roundStart = function () {

}
// let playersTurn = function () {
for (let i = 0; i < slices.length; i++) {
    slices[i].style.background = "none"
    slices[i].addEventListener("click", function () {
        slices[i].style = ""
        setTimeout(() => {
            slices[i].style.background = "none"
        }, 250)
        playersClicks = i



        // console.log(playersClicks)


        // let temp= [...computersClicks]
        checkLoser()
    })

}

// }

//conputers turn
let computersTurn = function (fakearry) {
    console.log(fakearry)
    // computersClicks.concat(fakearry)
    // for (let j = 0; j < round; j++) {
    randomClick = qtrs[Math.floor(Math.random() * qtrs.length)]
    computersClicks = [...computersClicks, randomClick]
    console.log(computersClicks)

    // }

}
computersTurn()

// let copy = [...computersClicks]
// console.log(copy)
// let temp = copy.shift()
let checkLoser = function () {

    console.log(playersClicks)
    // console.log(temp)
    let fake = computersClicks.shift()

    console.log(fake)
    if (fake == playersClicks) {
        fakearry.push(fake)
        console.log(fakearry)
        console.log(computersClicks.length)
        if (computersClicks.length == 0) {
            console.log(computersClicks)
            computersClicks=[...computersClicks, ...fakearry]
            computersTurn(fakearry)
            console.log("next round")
        }
        // temp=[...temp, fake]
    } else console.log("Fgame over")


    // console.log(temp)
}


