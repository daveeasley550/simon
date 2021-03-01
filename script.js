let slices = document.querySelectorAll(".qtr")
let playersClicks = 0
let computersClicks = []
let qtrs = [0, 1, 2, 3]
let round = 1
const resetButton = document.querySelector(".reset-button")
let temp = []
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
            // slices[computersClicks[i]].style.background = ""
            // delay(i)
            setTimeout(() => {
                slices[computersClicks[i]].style.background = ""

            }, i * 1000)
            setTimeout(() => {
                slices[computersClicks[i]].style.background = "none"
            }, i * 1000 + 300)
            // if (computersClicks[i] == 0) {
            //     slices[0].style = ""
            //     setTimeout(() => {
            //         slices[0].style.background = "none"
            //     }, 500)
            // } if (computersClicks[i] == 1) {
            //     slices[1].style = ""
            //     setTimeout(() => {
            //         slices[1].style.background = "none"
            //     }, 500)
            // } if (computersClicks[i] == 2) {
            //     slices[2].style = ""
            //     setTimeout(() => {
            //         slices[2].style.background = "none"
            //     }, 500)
            // } if (computersClicks[i] == 3) {
            //     slices[3].style = ""
            //     setTimeout(() => {
            //         slices[3].style.background = "none"
            //     }, 500)
            // }

        }

    }
    // let delay = function(i){
    //     setTimeout(() => {
    //         slices[computersClicks[i]].style.background = "none"
    //     }, 1000)
    // }
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
    let computersTurn = function (fakearry) {
        randomClick = qtrs[Math.floor(Math.random() * qtrs.length)]
        computersClicks = [...computersClicks, randomClick]
        console.log(computersClicks)
        flash()
    }
    computersTurn()


    let checkLoser = function () {
        console.log(playersClicks)
        let fake = computersClicks.shift()
        if (fake == playersClicks) {
            fakearry.push(fake)
            if (computersClicks.length == 0) {
                computersClicks = [...computersClicks, ...fakearry]
                computersTurn(fakearry)

                console.log("next round")
            }
        } else window.alert("Game over"), resetButton.click()

    }
}

