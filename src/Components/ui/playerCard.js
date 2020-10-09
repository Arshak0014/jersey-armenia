import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className="player_card_wrapper">
            <div
                className="player_card_thmb"
                style={{background: `url(${props.bck})`}}
            >
            </div>

        </div>
    );
};

export default PlayerCard;