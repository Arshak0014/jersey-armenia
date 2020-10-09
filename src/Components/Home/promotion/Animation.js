import React from 'react';
import Zoom from 'react-reveal/Zoom';
import sl_1 from '../../../Resources/images/prom_slider/image-21-03-20-07-24-1.jpeg';
import sl_2 from '../../../Resources/images/prom_slider/image-21-03-20-07-24.jpeg';
import sl_3 from '../../../Resources/images/prom_slider/image-22-03-20-12-46.jpeg';
import {Tag} from '../../ui/misc'

const PromotionAnimation = () => {
    return (
        <div>
            <div className="promotion_animation">
                <div className="left">
                    <Zoom>
                        <div style={{color: '#00202e'}}>
                            <span style={{fontSize: '114px'}}>Win a</span>
                            <span style={{fontSize: '114px'}}>Jersey</span>
                        </div>
                    </Zoom>
                </div>

                <div className="my_slide right" >
                    <Zoom>
                        {/*<div style={{background: `url(${jers}) no-repeat`}} />*/}
                        <div id="carouselExampleIndicators" className=" carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={sl_1} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={sl_2} alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={sl_3} alt="Third slide"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className="anim">
                <Tag
                    bck="#00202e"
                    size="18px"
                    color="#ffffff"
                    padding="10px 20px"
                    link={true}
                    border="2px solid #ff983d"
                    linkTo="/win"
                    add={{
                        display: 'inline-block',
                        marginBottom: '30px',
                        padding: '10px',
                        boxShadow: '3px 5px 5px 5px #888888'
                    }}
                >
                    Ծանոթանալ
                </Tag>
            </div>
        </div>

    );
};

export default PromotionAnimation;
