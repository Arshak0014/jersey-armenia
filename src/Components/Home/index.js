import React from 'react';
import Featured from "./Featured";
import ShowCase from "./showcase";
import Forkids from "./forKids";
import Introduction from "./introduction";
import Promotion from "./promotion";
import DesignBlock from "./designBlock";
import Slider from "./slider";



const Home = () => {
    return (
        <div className="bck_blue">
            <Featured/>
            <Slider/>
            <Introduction/>
            <ShowCase/>
            <DesignBlock/>
            <Forkids/>
            <Promotion/>

        </div>
    );
};

export default Home;
