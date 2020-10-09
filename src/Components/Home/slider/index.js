import React from 'react';
import slide_1 from '../../../Resources/images/banner_sider/slide_1.jpeg';
import slide_2 from '../../../Resources/images/banner_sider/slide_2.jpeg';
import slide_3 from '../../../Resources/images/banner_sider/slide_3.jpeg';

const Slider = () => {
    return (
        <div className='slid'>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div  style={{boxShadow: '-1px 1px 10px 4px #000000',    borderTop: '10px solid #ffffff'}} className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="slider_images d-block w-100" src={slide_2} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="slider_images d-block w-100" src={slide_1} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="slider_images d-block w-100" src={slide_3} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Slider;
