import React from 'react';
import {JerseyLogo} from '../ui/icons'

const Footer = () => {
    return (
        <div>
            <footer className="bck_black_blue">
                <div>
                    <div className="footer_icons_section_right">
                        <i className="fa fa-phone">
                            <a href="tel:+37477949464"
                               style={{
                                   paddingLeft: "5px",
                                   fontWeight: "600"
                               }}
                            ><span
                                style={{fontSize: '16px', color: '#ffffff'}}
                                className="phone_number hover_choco_color">
                                +374 77-94-94-64
                            </span>
                            </a>
                        </i>
                    </div>
                    <div className="footer_icons_section_left"
                         style={{display: 'flex'}}
                    >
                        <div className="flex-w flex-c-m">
                            <a target="_blank" title="facebook.com" rel="noopener noreferrer" href="https://www.facebook.com/jerseyarmenia/"
                               className="size3 m-r-10 flex-c-m how-social trans-04">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a target="_blank" title="instagram.com" rel="noopener noreferrer" href="https://www.instagram.com/jersey.armenia/"
                               className="size3 flex-c-m how-social trans-04 ">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>


                    <div className="footer_logo">
                        <JerseyLogo
                            width="90px"
                            height="90px"
                            link={true}
                            linkTo="/"
                        />
                    </div>
                </div>
                <div className="footer_discl">
                    © 2020: jerseyarmenia.am:
                </div>
            </footer>
        </div>
    );
};

export default Footer;
