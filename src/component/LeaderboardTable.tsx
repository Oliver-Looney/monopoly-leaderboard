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
        setWinCounts(counts);
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