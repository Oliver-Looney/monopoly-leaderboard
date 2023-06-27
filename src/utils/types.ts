interface Leaderboard {
    name: string;
    wins: Win[];
}

interface Win {
    name: string;
    date: Date;
    game: number;
}

type GameData = {
    game: number;
    [key: string]: number | undefined;
};

export type {
    Leaderboard,
    Win,
    GameData
}