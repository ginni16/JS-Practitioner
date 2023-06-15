


let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array







function gethands(){
    let randomIndex = Math.floor(Math.random() * 3) // 0- 2.99999
    return hands[randomIndex]
}

console.log(gethands())