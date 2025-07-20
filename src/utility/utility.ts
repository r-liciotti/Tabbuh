import cards from "../data/Card.json";
import type { ICard } from "../interfaces/Interfaces";

const cardsList = cards;

export function getRandomCard(): ICard {
    if (cardsList.length === 0) {
        cardsList.push(...cards);
    }
    const card = cardsList[Math.floor(Math.random() * cards.length)];
    const index = cardsList.indexOf(card);
    if (index > -1) {
        cardsList.splice(index, 1);
    }
    return card;
}



