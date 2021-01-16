import React from 'react';
import LineGraph from './LineGraph';
import './Newsfeed.css';

function NewsFeed() {
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed;
