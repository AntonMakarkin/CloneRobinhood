import React, { useState } from 'react';
import LineGraph from './LineGraph';
import TimeLine from './TimeLine';
import Chip from './Chip';
import './Newsfeed.css';

function NewsFeed() {
    const [popularTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Healthcare Supplies",
        "Index ETFs",
        "IT",
        "China",
        "Pharma",
        "Tesla"
    ]);

    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed_chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$114,656</h1>
                        <p>+$44.63 (+0.04%) Today</p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph/>
                        <TimeLine/>
                    </div>
                </div>
                <div className="newsfeed__buying__section">
                    <h2>Buying Power</h2>
                    <h2>$4.11</h2>
                </div>
                <div className="newsfeed__market_section">
                    <div className="newsfeed__market__box">
                        <p>Markets Closed</p>
                        <h1>Happy Thanksgiving</h1>
                    </div>
                </div>
                <div className="newsfeed__popularlists__section">
                    <div className="newsfeed__popularlists__intro">
                        <h1>Popular lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed_popularlists_badges">
                        {popularTopics.map((topic) => (
                            <Chip
                                label={topic}
                                image={`https://avatars.dicebear.com/api/human/${topic}.svg`} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed;
