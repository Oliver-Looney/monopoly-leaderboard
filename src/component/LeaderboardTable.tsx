import { useState, useEffect } from 'react';
import { leaderboard } from '@/utils/LeaderboardWins';

interface WinCounts {
    [key: string]: number;
}

export default function LeaderboardTable() {
    const [winCounts, setWinCounts] = useState<WinCounts>({});

    useEffect(() => {
        // Calculate total wins for each player
        const counts: WinCounts = leaderboard.wins.reduce((acc, { name }) => {
            // @ts-ignore
            acc[name] = (acc[name] || 0) + 1;
            return acc;
        }, {});

        // Sort players based on total wins
        const sortedCounts = Object.entries(counts).sort((a, b) => b[1] - a[1]);

        // Create a new object with sorted counts
        const sortedWinCounts: WinCounts = sortedCounts.reduce((acc, [name, count]) => {
            // @ts-ignore
            acc[name] = count;
            return acc;
        }, {});

        setWinCounts(sortedWinCounts);
    }, []);

    return (
        <div className="card">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Total Wins</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(winCounts).map(([name, count]) => (
                    <tr key={name}>
                        <td>{name}</td>
                        <td>{count}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
