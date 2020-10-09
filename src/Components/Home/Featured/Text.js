import React, {Component} from 'react';
import {easePolyOut} from 'd3-ease';
import Animate from 'react-move/Animate';

import featuredPlayer from '../../../Resources/images/featured_player.png'

class Text extends Component {

    animateNumber = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                rotate: 0
            }}
            enter={{
                opacity: [1],
                rotate: [360],
                timing: {duration: 1000, ease: easePolyOut}
            }}
        >
            {({opacity,rotate}) => {
                return (
                    <div
                        className="featured_number"
                        style={{
                            opacity,

                            transform: `translate(260px,115px) rotateY(${rotate}deg)`
                        }}
                    >
                        10
                    </div>
                )
            }}
        </Animate>
    );

    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 450

            }}
            enter={{
                opacity: [1],
                x: [273],
                y: [395],
                timing: {duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity,x,y}) => {
                return (
                    <div
                        className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >
                        choose
                    </div>
                )
            }}
        </Animate>
    );

    animateSecond = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 531
            }}
            enter={{
                opacity: [1],
                x: [273],
                y: [531],
                timing: {delay: 300, duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity,x,y}) => {
                return (
                    <div
                        className="featured_second"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >
                        your jersey
                    </div>
                )
            }}
        </Animate>
    );

    animatePlayer = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
            }}
            enter={{
                opacity: [1],
                timing: {delay: 700, duration: 500, ease: easePolyOut}
            }}
        >
            {({opacity}) => {
                return (
                    <div
                        className="featured_player"
                        style={{
                            opacity,
                            background: `url(${featuredPlayer})`,
                            transform: `translate(550px,146px)`
                        }}
                    >
                    </div>
                )
            }}
        </Animate>
    );




    render() {
        return (
            <div className="featured_text">
                {this.animatePlayer()}
                {this.animateNumber()}
                {this.animateFirst()}
                {this.animateSecond()}
            </div>
        );
    }
}

export default Text;