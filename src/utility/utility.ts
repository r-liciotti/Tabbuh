import cards from "../data/Card.json";
import type { ICard } from "../interfaces/Interfaces";

export function getRandomCard(): ICard {
    const card = cards[Math.floor(Math.random() * cards.length)];
    return card;
}
