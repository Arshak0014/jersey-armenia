import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";

import './header_style.css';

import {Link} from "react-router-dom";

import {JerseyLogo} from '../ui/icons'

class Header extends Component {
    handleClick = () => {
        if(document.querySelector(".navbar-collapse")){
            document.querySelector(".navbar-collapse").classList.remove('show')
        }

    };
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: "#520000",
                    boxShadow: "-1px 1px 10px 4px #000000",
                }}
            >
                <div className="top_header bck_black_blue">
                    <div style={{display: 'flex',padding: '3px'}}>
                        <i className="fa fa-phone">
                            <a href="tel:+37477949464"
                               style={{
                                   paddingLeft: "5px",
                                   fontWeight: "600"
                               }}
                            ><span className="phone_number hover_choco_color">+374 77-94-94-64</span></a>
                        </i>
                    </div>

                    <div style={{display: 'flex'}}>


                            <a target="_blank" title="facebook.com" rel="noopener noreferrer" href="https://www.facebook.com/jerseyarmenia/"
                               className="how-social">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a target="_blank" title="instagram.com" rel="noopener noreferrer" href="https://www.instagram.com/jersey.armenia/"
                               className="how-social">
                                <i className="fa fa-instagram"></i>
                            </a>

                    </div>
                </div>

                <nav style={{padding: '7px'}} className="navbar my_navbar navbar-expand-lg navbar-light">

                            <a href='/' className="header_logo">
                                <JerseyLogo
                                    // link={true}
                                    // linkTo="/"
                                    width="80px"
                                    height="80px"
                                    marginLeft='20px'
                                    marginRight='30px'
                                />
                            </a>

                    <button style={{marginRight: "25px"}} className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="header_hover color_white nav-link" to="/">Գլխավոր <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="header_hover color_white nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Հագուստ
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="header_hover_link dropdown-item" onClick={this.handleClick(this)}  to="/jersey" >Մարզաշապիկներ</Link>
                                    <Link className="header_hover_link dropdown-item" onClick={this.handleClick(this)} to="/sportswear">Համազգեստներ</Link>
                                    <Link className="header_hover_link dropdown-item" onClick={this.handleClick(this)} to="/polo">Պոլոներ</Link>
                                    <Link className="header_hover_link dropdown-item" onClick={this.handleClick(this)} to="/coat">Բաճկոններ</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="header_hover color_white nav-link" to="/women">Կանացի</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="header_hover color_white nav-link" to="/kids">Մանկական</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="header_hover color_white nav-link dropdown-toggle" to="" id="navbarDropdown" role="button"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Կոշիկներ
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="header_hover_link dropdown-item" onClick={this.handleClick(this)} to="/sport_shoes">Մարզակոշիկներ</Link>
                                    <Link className="header_hover_link dropdown-item" onClick={this.handleClick(this)} to="/boots">Խաղակոշիկներ</Link>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <Link className="header_hover color_white nav-link" to="/available">Առկա<span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </AppBar>
        );
    }
}

export default Header;
