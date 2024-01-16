import { EnumColor, EnumMark } from "./enums";
import { ICard, IJoker, INormalCard, TypeDeck } from "./types";

function createDeck(): TypeDeck {
  const deck: TypeDeck = [];
  const colors = Object.values(EnumColor);
  const marks = Object.values(EnumMark);

  for (const color of colors) {
    for (const mark of marks) {
      /* const card: INormalCard = {
        mark: mark,
        color: color,
        getString() {
          return this.mark + this.color;
        }
      };
      deck.push(card); */

      /*  deck.push({
        mark: mark,
        color: color,
        getString() {
          return this.mark + this.color;
        }
      } as ICard); */

      deck.push(<ICard>{
        mark: mark,
        color: color,
        getString() {
          return this.mark + this.color;
        }
      });
    }
  }

  deck.push({
    type: "big",
    getString() {
      return this.type;
    }
  } as IJoker);

  return deck;
}

function printDeck(deck: TypeDeck) {
  deck.forEach((card) => {
    console.log(card.getString());
  });
}

export { createDeck, printDeck };
