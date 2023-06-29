import React from 'react';
import { Chrono } from 'react-chrono';
import { leaderboard } from '@/utils/LeaderboardWins';

const Timeline = () => {
    const timelineItems = leaderboard.wins.reverse().map((win) => ({
        cardTitle: win.name,
        cardSubtitle: win.date?.toDateString() || "Date not recorded",
        media: {
            type: 'IMAGE',
            source: {
                url: `${win.name.toLowerCase()}.png`,
            },
        },
    }));

    return (
        <div className="timeline-container">
            <Chrono
                items={timelineItems}
                mode="VERTICAL_ALTERNATING"
                hideControls // Remove the "Read more" controls
                allowDynamicUpdate // Allow dynamic updates when the timeline items change
                theme={{
                    primary: '#ffffff', // Set the background color to white
                    secondary: '#000000', // Set the text color to black
                    cardBgColor: '#ffffff', // Set the card background color to white
                    cardForeColor: '#000000', // Set the card text color to black
                }}
            />
        </div>
    );
};

export default Timeline;
