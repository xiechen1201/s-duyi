/* 
    创建并打印扑克牌
    目标：
        1、创建一副扑克牌（不含大小王）
        2、打印该扑克牌
*/

enum EnumColor {
  heart = "♥️",
  spade = "♠️",
  club = "♣️",
  diamond = "♦️"
}

enum EnumMark {
  A = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  jack = "J",
  queen = "Q",
  king = "K"
}

type TypeNormalCard = {
  color: EnumColor;
  mark: EnumMark;
};
type TypeDeck = TypeNormalCard[];

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

const result = createDeck();
printDeck(result);
