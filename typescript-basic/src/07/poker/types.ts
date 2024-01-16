import { EnumColor, EnumMark } from "./enums";

interface ICard {
  getString(): string;
}

interface IJoker extends ICard {
  type: "big" | "small";
}

interface INormalCard extends ICard {
  color: EnumColor;
  mark: EnumMark;
}

type TypeDeck = ICard[];

export { ICard, IJoker, INormalCard, TypeDeck };
