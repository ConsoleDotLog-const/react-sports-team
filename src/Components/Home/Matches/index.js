import React from 'react';
import { Tag } from '../../UI/misc'


const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
            <Tag
                bck="#0e1731"
                size="50px"
                color="#ffffff"
                
            >
                Matches
            </Tag>

            BLOCK

            <Tag
                bck="#ffffff"
                size="22px"
                color="#0e1731"
                link={true}
                linkto="/the_team"
            >
                See more matched
                
            </Tag>

            </div>
        </div>
    );
};

export default MatchesHome;