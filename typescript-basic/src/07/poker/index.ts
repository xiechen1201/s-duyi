import { Deck } from "./deck";

const desk = new Deck();
desk.printDeck();
console.log("=====洗牌=======")
desk.shuffle()
desk.printDeck()
console.log("=====发牌=======")
const result = desk.publish()
result.player1.printDeck()
result.player2.printDeck()
result.player3.printDeck()
result.left.printDeck()