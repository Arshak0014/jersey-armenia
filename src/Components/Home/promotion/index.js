import React from 'react';
import PromotionAnimation from "./Animation";
// import Enroll from "./Enroll";

const Promotion = () => {
    return (
        <div className="promotion_wrapper" style={{background: 'bisque'}}>
            <div className="">
                <PromotionAnimation/>
                {/*<Enroll/>*/}
            </div>
        </div>
    );
};

export default Promotion;