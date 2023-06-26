interface Leaderboard {
    name: string;
    wins: Win[];
}

interface Win {
    name: string;
    date: Date;
}

export type {
    Leaderboard,
    Win
}