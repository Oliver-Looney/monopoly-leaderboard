import React from 'react';
import { leaderboard } from '@/utils/LeaderboardWins';

const calculateCurrentWinStreak = (playerName: string): number => {
    const wins = leaderboard.wins.filter((win) => win.name === playerName);
    let currentStreak = 0;

    for (let i = wins.length - 1; i >= 0; i--) {
        if (wins[i].game === wins[i + 1]?.game - 1) {
            currentStreak++;
        } else {
            break;
        }
    }

    return currentStreak;
};


const calculateCurrentLostStreak = (playerName: string): number => {
    const losses = leaderboard.wins.filter((win) => win.name !== playerName);
    let currentStreak = 0;

    for (let i = losses.length - 1; i >= 0; i--) {
        if (losses[i].game === losses[i - 1]?.game + 1) {
            currentStreak++;
        } else {
            break;
        }
    }

    return currentStreak;
};

const calculateBiggestWinStreak = (playerName: string): number => {
    const wins = leaderboard.wins.filter((win) => win.name === playerName);
    let currentStreak = 0;
    let biggestStreak = 0;

    for (let i = 0; i < wins.length; i++) {
        if (wins[i].game === wins[i - 1]?.game + 1) {
            currentStreak++;
        } else {
            currentStreak = 1;
        }

        if (currentStreak > biggestStreak) {
            biggestStreak = currentStreak;
        }
    }

    return biggestStreak;
};

const calculateBiggestLostStreak = (playerName: string): number => {
    const losses = leaderboard.wins.filter((win) => win.name !== playerName);
    let currentStreak = 0;
    let biggestStreak = 0;

    for (let i = 0; i < losses.length; i++) {
        if (losses[i].game === losses[i - 1]?.game + 1) {
            currentStreak++;
        } else {
            currentStreak = 1;
        }

        if (currentStreak > biggestStreak) {
            biggestStreak = currentStreak;
        }
    }

    return biggestStreak;
};

const calculateWinRate = (playerName: string): string => {
    const wins = leaderboard.wins.filter((win) => win.name === playerName);
    const totalGames = leaderboard.wins[leaderboard.wins.length - 1].game;
    const winCount = wins.length;

    const winRate = (winCount / totalGames) * 100;
    return winRate.toFixed(2) + '%';
};

export default function Stats() {
    return (
        <div className="card">
            <h2>Statistics</h2>

            <div>
                <h3>Current Win Streak</h3>
                {leaderboard.members.map((member, index) => (
                    <p key={index}>
                        <div>{member}: {calculateCurrentWinStreak(member)}</div>
                    </p>
                ))}
            </div>

            <div>
                <h3>Current Loss Streak</h3>
                {leaderboard.members.map((member, index) => (
                    <p key={index}>
                        <div>{member}: {calculateCurrentLostStreak(member)}</div>
                    </p>
                ))}
            </div>

            <div>
                <h3>Biggest Win Streak</h3>
                {leaderboard.members.map((member, index) => (
                    <p key={index}>
                        <div>{member}: {calculateBiggestWinStreak(member)}</div>
                    </p>
                ))}
            </div>

            <div>
                <h3>Biggest Loss Streak</h3>
                {leaderboard.members.map((member, index) => (
                    <p key={index}>
                        <div>{member}: {calculateBiggestLostStreak(member)}</div>
                    </p>
                ))}
            </div>

            <div>
                <h3>Win Rate</h3>
                {leaderboard.members.map((member, index) => (
                    <p key={index}>
                        <div>{member}: {calculateWinRate(member)}</div>
                    </p>
                ))}
            </div>
        </div>
    );
}
