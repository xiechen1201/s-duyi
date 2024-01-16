import { EnumColor, EnumMark } from "./enums";
import { TypeDeck } from "./types";

function createDeck(): TypeDeck {
  const deck: TypeDeck = [];
  const colors = Object.values(EnumColor);
  const marks = Object.values(EnumMark);

  for (const color of colors) {
    for (const mark of marks) {
      deck.push({ mark: mark, color: color });
    }
  }

  return deck;
}

function printDeck(deck: TypeDeck) {
  deck.forEach((card) => {
    console.log(card.color, card.mark);
  });
}

export { createDeck, printDeck };
