import React from 'react';
import Zoom from 'react-reveal/Zoom';
import designBlock from '../../../Resources/images/designBlock.jpeg'

const DesignBlock = () => {
    return (
        <Zoom>
            <div className="dis_block">
                 <img className="slider_images" src={designBlock}/>
            </div>
        </Zoom>
    );
};

export default DesignBlock;
