

let hearts = ['♥️7', '♥️8', '♥️9', '♥️10', '♥️J', '♥️Q', '♥️K', '♥️A']
let diamonds = ['♦️7', '♦️8', '♦️9', '♦️10', '♦️J', '♦️Q', '♦️K', '♦️A']
let spades = ['♣️7', '♣️8', '♣️9', '♣️10', '♣️J', '♣️Q', '♣️K', '♣️A'];
let clubs = ['♠️7', '♠️8', '♠️9', '♠️10', '♠️J', '♠️Q', '♠️K', '♠️A'];


let deck = [...hearts, ...diamonds, ...spades, ...clubs];

let player = [
];

let enemy = [

];

document.write('Deck: <br>', deck, '<br>')

let temp
let lastItem = deck.length -1;



temp = deck[lastItem]

deck.pop()
player.push(temp)

document.write('After Draw: <br>', deck, '<br>')
document.write('Player hand: <br>', player)

//drawCard function
//playCard function

