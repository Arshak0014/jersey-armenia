import React from 'react';
import {Tag} from '../../ui/misc';
import Blocks from "./Blocks";

const ShowcaseHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div>
                <div className="title_showcase">
                    <Tag
                        bck="#00202e"
                        size="20px"
                        weight="bold"
                        color="#ffffff"
                        margin="5px 95px"
                        // add={{}}
                    >
                        Ծանոթացեք մեր տեսականուն
                    </Tag>
                </div>

                <Blocks>

                </Blocks>
                <div style={{display: 'flex',justifyContent: 'center',paddingTop: '30px' }}>
                    <Tag
                        size="40px"
                        weight="bold"
                        color="#ff983d"
                        link={true}
                        linkTo="/jersey"
                    >
                        ︾
                    </Tag>
                </div>

            </div>
        </div>
    );
};

export default ShowcaseHome;
