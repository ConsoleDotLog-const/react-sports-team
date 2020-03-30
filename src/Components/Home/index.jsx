import React from 'react';
import Features from './Features'
import Matches from './Matches'
import MeetPlayers from './MeetPlayers'

const Home = () => {
    return (
        <div className="bck_blue">
            <Features/>
            <Matches/>
            <MeetPlayers/>
        </div>
    );
};

export default Home;