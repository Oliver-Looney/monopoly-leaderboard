import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {GameData, Leaderboard} from '@/utils/types';
import {playerColors} from "@/utils/constants";

type Props = {
    leaderboard: Leaderboard;
};

const TotalWinsGraph: React.FC<Props> = ({ leaderboard }) => {
    const [chartData , setChartData] = useState<GameData[]>([]);

    useEffect(() => {
        const playerNames = Array.from(
            new Set(leaderboard.wins.map((win) => win.name))
        );

        const transformedData: GameData[] = [];

        leaderboard.wins.forEach((win, index) => {
            if (index === 0) {
                const gameData: GameData = { game: win.game };
                playerNames.forEach((player) => {
                    gameData[player] = player === win.name ? 1 : 0;
                });
                transformedData.push(gameData);
            } else {
                const prevGameData = transformedData[index - 1];
                const gameData = { ...prevGameData, game: win.game };
                playerNames.forEach((player) => {
                    // @ts-ignore
                    gameData[player] =
                        player === win.name ? (prevGameData[player] ?? 0) + 1 : prevGameData[player];
                });
                transformedData.push(gameData);
            }
        });

        setChartData(transformedData);
    }, [leaderboard]);

    return (
        <div className="card">
            <h2>Total Wins</h2>
            <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
                <LineChart width={2000} height={300} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="game" label={{ value: 'Game Number', position: 'insideBottom', offset: -5 }} />
                    <YAxis
                        label={{ value: 'Total Wins', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip />
                    <Legend />
                    {Object.keys(playerColors).map((player) => (
                        <Line
                            key={player}
                            type="linear"
                            dataKey={player}
                            stroke={playerColors[player]}
                            name={player}
                        />
                    ))}
                </LineChart>
            </div>
        </div>
    );
};

export default TotalWinsGraph;
