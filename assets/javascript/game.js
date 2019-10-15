var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins= 0
var losses=0
var computerLetter = ""
var attempts = 9
var lettersClicked = []
// choose a letter from the alphabet (random)

//


function start(){

    // get a raondom letter form the alphabet
    var index = Math.floor(Math.random() * alphabet.length)
    console.log(index)
    computerLetter = alphabet[index]
    console.log(computerLetter)
    attempts = 9
    lettersClicked =[]
    document.querySelector("#wins").innerHTML= wins
    document.querySelector("#lost").innerHTML= losses
    document.querySelector("#attempts").innerHTML= attempts
    document.querySelector("#lettersClicked").innerHTML= lettersClicked

}

document.onkeydown = function(event) {

    var input = event.key
    console.log(input)
    attempts--
    lettersClicked.push(input)
    document.querySelector("#attempts").innerHTML= attempts
    document.querySelector("#lettersClicked").innerHTML= lettersClicked

    console.log("attemps: ", attempts)
    if (computerLetter === input){
        wins++
        console.log("wins: ", wins)
        start()
    }
    else if(attempts === 0){
        losses++
        console.log("losses:", losses)
        start()
    }


}

start()




    // get the key the user has clicked and then
    // compare clicked with the computer
    // if === is going to win
    // if we need to very attempts left
    // if all the attemps are consumend then lost