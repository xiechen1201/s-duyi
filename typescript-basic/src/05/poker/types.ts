import { EnumColor, EnumMark } from "./enums";

type TypeNormalCard = {
  color: EnumColor;
  mark: EnumMark;
};
type TypeDeck = TypeNormalCard[];

export { TypeNormalCard, TypeDeck };
