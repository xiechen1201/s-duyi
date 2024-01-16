/* 
    创建并打印扑克牌
    目标：
        1、创建一副扑克牌（不含大小王）
        2、打印该扑克牌
*/

type TypeColor = "♥️" | "♠️" | "♣️" | "♦️";
type TypeNormalCard = {
  color: TypeColor;
  mark: number;
};
type TypeDeck = TypeNormalCard[];

function createDeck(): TypeDeck {
  const deck: TypeDeck = [];

  for (let index = 1; index < 13; index++) {
    deck.push({ mark: index, color: "♠️" });
    deck.push({ mark: index, color: "♣️" });
    deck.push({ mark: index, color: "♥️" });
    deck.push({ mark: index, color: "♦️" });
  }

  return deck;
}

function printDeck(deck: TypeDeck) {
  deck.forEach((card) => {
    console.log(card.color, card.mark);
  });
}

const result = createDeck()
printDeck(result);

// function findCards(color: TypeColor) {}
