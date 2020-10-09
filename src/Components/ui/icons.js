import React from "react";

import Link from "react-router-dom/Link";
import jerseyArmeniaLogo from '../../Resources/images/logos/jersey_armenia_logo.png';

export const JerseyLogo = (props) => {
    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background: `url(${jerseyArmeniaLogo}) no-repeat`,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight
        }}
    >
    </div>;

    if(props.link) {
        return (
            <Link to={props.linkTo} className="link_logo">
                {template}
            </Link>
        )
    }else{
        return template
    }
};
