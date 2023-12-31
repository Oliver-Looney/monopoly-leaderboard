interface Leaderboard {
    name: string;
    members: string[]
    wins: Win[];
}

interface Win {
    name: string;
    date: Date | null;
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