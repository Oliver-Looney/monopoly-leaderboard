import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {GameData, Leaderboard} from '@/utils/types';
import {playerColors} from "@/utils/constants";

type Props = {
    leaderboard: Leaderboard;
};

const PositionsGraph: React.FC<Props> = ({ leaderboard }) => {
    const [chartData, setChartData] = useState<GameData[]>([]);

    useEffect(() => {
        const playerNames = Array.from(new Set(leaderboard.wins.map((win) => win.name)));

        const transformedData: GameData[] = [];

        leaderboard.wins.forEach((win) => {
            const gameData: GameData = { game: win.game };

            const winsCountMap: { [player: string]: number } = {};

            playerNames.forEach((player) => {
                winsCountMap[player] = leaderboard.wins.filter((w) => w.name === player && w.game <= win.game).length;
            });

            const sortedPlayerNames = Object.keys(winsCountMap).sort((a, b) => winsCountMap[b] - winsCountMap[a]);

            sortedPlayerNames.forEach((player, position) => {
                gameData[player] = position + 1;
            });

            transformedData.push(gameData);
        });

        setChartData(transformedData);
    }, [leaderboard]);


    if (chartData.length === 0) {
        return <div>Loading...</div>; // Add a loading state while waiting for the data
    }

    return (
        <div>
            <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
                <LineChart width={2000} height={300} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="game" label={{ value: 'Game Number', position: 'insideBottom', offset: -5 }} />
                    <YAxis
                        label={{ value: 'Position', angle: -90, position: 'insideLeft' }}
                        reversed
                        allowDecimals={false}
                    />
                    <Tooltip />
                    <Legend />
                    {Object.keys(chartData[0]).map((player) => (
                        player !== 'game' && (
                            <Line
                                key={player}
                                type="stepAfter"
                                dataKey={player}
                                stroke={playerColors[player]}
                                name={player}
                            />
                        )
                    ))}
                </LineChart>
            </div>
        </div>
    );
};

export default PositionsGraph;
