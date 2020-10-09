import React, {Component} from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import {Tag} from '../../ui/misc';
import Reveal from "react-reveal/Reveal";
import HomeCards from "./cards";

class Forkids extends Component {

    state = {
        show: false
    };

    render() {
        return (
<div className="kids_home">
            <Reveal
                fraction={0.7}
                onReveal={() => {
                    this.setState({
                        show: true
                    })
                }}
            >
                <div className="home_meetplayers"
                     style={{
                         background: `#ffffff url(${Stripes})`,
                     }}
                >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <HomeCards
                                    show={this.state.show}
                                />
                            </div>
                            <div className="kidss">
                            <div className="home_text_wrapper">
                                <div>
                                    <Tag
                                        bck="#00202e"
                                        size="60px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        Meet
                                    </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="#00202e"
                                        size="60px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        kids
                                    </Tag>
                                </div>
                                <div>
                                    <Tag
                                        bck="#00202e"
                                        size="60px"
                                        color="#ffffff"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '20px'
                                        }}
                                    >
                                        products
                                    </Tag>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Reveal>
</div>
        );
    }
}

export default Forkids;
