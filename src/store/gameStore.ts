import { create } from 'zustand';
import type { ICard } from '../interfaces/Interfaces';
import { getRandomCard } from '../utility/utility';
type Team = 'red' | 'blue';
type StatusGame = 'start' | 'end' | 'pause' | 'active' | 'prep' | 'notInitialized';
interface IGameState {
    scores: Record<Team, number>;
    activeTeam: Team;
    currentCard: ICard;
    skipsRemaining: number;
    timer: number; // seconds remaining
    isTurnActive: boolean;
    statusGame: StatusGame;
    turns: number;
    startTurn: () => void;
    endTurn: () => void;
    changeTeam: () => void;
    puasePlayTurn: () => void;
    nextCard: () => void;
    skipCard: () => void;
    answerCorrect: () => void;
    answerWrong: () => void;
    tick: () => void;
}

export const useGameStore = create<IGameState>((set, get) => ({
    scores: { red: 0, blue: 0 },
    activeTeam: 'red',
    currentCard: { keyword: '', tabooWords: [] },
    skipsRemaining: 2,
    timer: 60,
    isTurnActive: false,
    statusGame: 'notInitialized',
    turns: 0,

    startTurn: () => {
        if (get().isTurnActive) return;
        set({ isTurnActive: true, timer: 60, skipsRemaining: 2, currentCard: getRandomCard(), statusGame: 'start', turns: get().turns + 1 });
    },

    endTurn: () => {
        if (get().statusGame === 'end' || !get().isTurnActive) return;

        set(() => ({
            isTurnActive: false,
            timer: 0,
            statusGame: 'end'
        }));

        get().changeTeam();
    },
    changeTeam: () => {
        const next: Team = get().activeTeam === 'red' ? 'blue' : 'red';
        set(() => ({ activeTeam: next, skipsRemaining: 2, timer: 60, statusGame: 'prep' }));
    },
    puasePlayTurn: () => {
        const { isTurnActive } = get();
        set({ isTurnActive: !isTurnActive });
        set({ statusGame: isTurnActive ? 'pause' : 'active' });
    },
    nextCard: () => {
        set(() => ({ currentCard: getRandomCard() }));
    },

    skipCard: () => {
        const { skipsRemaining, nextCard } = get();
        if (skipsRemaining > 0) {
            set(state => ({ skipsRemaining: state.skipsRemaining - 1 }));
            nextCard();
        }
    },

    answerCorrect: () => {
        const { activeTeam, scores } = get();
        set(() => ({
            scores: { ...scores, [activeTeam]: scores[activeTeam] + 1 }
        }));
        get().nextCard();
    },

    answerWrong: () => {
        const { activeTeam, scores } = get();
        set(() => ({
            scores: { ...scores, [activeTeam]: scores[activeTeam] - 1 }
        }));
        get().nextCard();
    },

    tick: () => {
        const { timer } = get();
        if (timer > 0) set({ timer: timer - 1 });
        else get().endTurn();
    }
}));