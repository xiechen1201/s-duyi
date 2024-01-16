import { EnumColor, EnumMark } from "./enums";
import { ICard, IJoker, INormalCard, TypeDeck } from "./types";

interface PublishResult {
  player1: Deck;
  player2: Deck;
  player3: Deck;
  left: Deck;
}

export class Deck {
  private cards: ICard[] = [];

  constructor(cards?: ICard[]) {
    if (cards) {
      this.cards = cards;
    } else {
      this.init();
    }
  }

  private init() {
    const colors = Object.values(EnumColor);
    const marks = Object.values(EnumMark);

    for (const c of colors) {
      for (const m of marks) {
        this.cards.push(<ICard>{
          color: c,
          mark: m,
          getString() {
            return this.color + this.mark;
          }
        });
      }
    }

    this.cards.push(<IJoker>{
      type: "big",
      getString() {
        return this.type;
      }
    });

    this.cards.push(<IJoker>{
      type: "small",
      getString() {
        return this.type;
      }
    });
  }

  printDeck() {
    let str = "\n";
    this.cards.forEach((card, index) => {
      str += card.getString() + "\t\t";
      if ((index + 1) % 5 === 0) {
        str += "\n";
      }
    });
    console.log(str);
  }

  /**
   * 洗牌，打乱数组的顺序
   */
  shuffle() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  /**
   * 发牌，有 4 个数组
   */
  publish(): PublishResult {
    let player1: Deck, player2: Deck, player3: Deck, left: Deck;

    player1 = this.takeCards(17);
    player2 = this.takeCards(17);
    player3 = this.takeCards(17);
    left = new Deck(this.cards);

    return {
      player1,
      player2,
      player3,
      left
    };
  }

  private takeCards(n: number): Deck {
    const cards: ICard[] = [];

    for (let i = 0; i < n; i++) {
      cards.push(this.cards.shift() as ICard);
    }

    return new Deck(cards);
  }
}
