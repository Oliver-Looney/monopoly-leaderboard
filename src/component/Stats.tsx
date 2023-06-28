import React from 'react';
import { leaderboard } from '@/utils/LeaderboardWins';

const calculateCurrentWinStreak = (playerName: string): number => {
    let currentStreak = 0;
    for (let i = leaderboard.wins.length - 1; i >= 0; i--) {
        if (leaderboard.wins[i].name === playerName) {
            currentStreak++;
        } else {
            break;
        }
    }
    return currentStreak;
};

const calculateCurrentLostStreak = (playerName: string): number => {
    let currentStreak = 0;
    for (let i = leaderboard.wins.length - 1; i >= 0; i--) {
        if (leaderboard.wins[i].name !== playerName) {
            currentStreak++;
        } else {
            break;
        }
    }
    return currentStreak;
};

const calculateBiggestWinStreak = (playerName: string): number => {
    let currentStreak = 0;
    let biggestStreak = 0;
    for (let i = leaderboard.wins.length - 1; i >= 0; i--) {
        if (leaderboard.wins[i].name === playerName) {
            currentStreak++;
        } else {
            if (currentStreak > biggestStreak) {
                biggestStreak = currentStreak;
            }
            currentStreak = 0;
        }
    }
    return biggestStreak;
};

const calculateBiggestLostStreak = (playerName: string): number => {
    let currentStreak = 0;
    let biggestStreak = 0;
    for (let i = leaderboard.wins.length - 1; i >= 0; i--) {
        if (leaderboard.wins[i].name !== playerName) {
            currentStreak++;
        } else {
            if (currentStreak > biggestStreak) {
                biggestStreak = currentStreak;
            }
            currentStreak = 0;
        }
    }
    return biggestStreak;
};

const calculateWinRate = (playerName: string): number => {
    const wins = leaderboard.wins.filter((win) => win.name === playerName);
    const totalGames = leaderboard.wins[leaderboard.wins.length - 1].game;
    const winCount = wins.length;

    return (winCount / totalGames) * 100;
};

export default function Stats() {
    return (
        <div className="card">
            <h2>Statistics</h2>

            <div className="stat-card">
                <div>
                    <h3>Current Win Streak</h3>
                    {leaderboard.members
                        .map((member) => ({
                            name: member,
                            currentWinStreak: calculateCurrentWinStreak(member)
                        }))
                        .sort((a, b) => b.currentWinStreak - a.currentWinStreak) // Sort by currentWinStreak in descending order
                        .map((data, index) => (
                            <p key={index}>
                                <div>{data.name}: {data.currentWinStreak}</div>
                            </p>
                        ))}
                </div>

                <div>
                    <h3>Games Since Last Win</h3>
                    {leaderboard.members
                        .map((member) => ({
                            name: member,
                            gamesSinceLastWin: calculateCurrentLostStreak(member)
                        }))
                        .sort((a, b) => a.gamesSinceLastWin - b.gamesSinceLastWin) // Sort by gamesSinceLastWin in ascending order
                        .map((data, index) => (
                            <p key={index}>
                                <div>{data.name}: {data.gamesSinceLastWin}</div>
                            </p>
                        ))}
                </div>
            </div>

            <div className="stat-card">
                <div>
                    <h3>Biggest Win Streak</h3>
                    {leaderboard.members
                        .map((member) => ({
                            name: member,
                            biggestWinStreak: calculateBiggestWinStreak(member)
                        }))
                        .sort((a, b) => b.biggestWinStreak - a.biggestWinStreak) // Sort by biggestWinStreak in descending order
                        .map((data, index) => (
                            <p key={index}>
                                <div>{data.name}: {data.biggestWinStreak}</div>
                            </p>
                        ))}
                </div>

                <div>
                    <h3>Biggest Loss Streak</h3>
                    {leaderboard.members
                        .map((member) => ({
                            name: member,
                            biggestLostStreak: calculateBiggestLostStreak(member)
                        }))
                        .sort((a, b) => b.biggestLostStreak - a.biggestLostStreak) // Sort by biggestLostStreak in descending order
                        .map((data, index) => (
                            <p key={index}>
                                <div>{data.name}: {data.biggestLostStreak}</div>
                            </p>
                        ))}
                </div>
            </div>

            <div className="stat-card">
                <div>
                    <h3>Win Rate</h3>
                    {leaderboard.members
                        .map((member) => ({
                            name: member,
                            winRate: calculateWinRate(member)
                        }))
                        .sort((a, b) => b.winRate - a.winRate) // Sort by winRate in descending order
                        .map((data, index) => (
                            <p key={index}>
                                <div>{data.name}: {data.winRate.toFixed(2) + '%'}</div>
                            </p>
                        ))}
                </div>
            </div>

        </div>
    );
}
