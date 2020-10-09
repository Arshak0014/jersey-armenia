import React, {Component} from 'react';
import ProductCard from "../../ui/product_card";
import Fade from 'react-reveal/Fade';

import stripes from "../../../Resources/images/stripes.png";

import {firebaseJerseys,firebase} from "../../../firebase";
import {firebaseLooper, reverseArray} from "../../ui/misc";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Promise} from 'core-js';
import {Tag} from '../../ui/misc';

class TheSportShoes extends Component {

    state = {
        loading: true,
        jerseys: [],
        filterShoes: [],
        brandFilter: 'All'
    };

    componentDidMount() {
        firebaseJerseys.limitToLast(200).once('value').then(snapshot => {
            const jerseys = firebaseLooper(snapshot);
            let promises = [];
            for(let key in jerseys){
                promises.push(
                    new Promise((resolve,reject) => {
                        firebase.storage().ref('jerseys')
                            .child(jerseys[key].image).getDownloadURL()
                            .then(url => {
                                jerseys[key].url = url;
                                resolve()
                            })
                    })
                )
            }

            Promise.all(promises).then(() => {
                this.setState({
                    loading: false,
                    jerseys: reverseArray(jerseys),
                    filterShoes: reverseArray(jerseys),
                });
            })

        });

    }

    showJerseys = (jerseys) => (
        jerseys ?
            jerseys.map((jersey) => (
                jersey.type === 'SportShoes' ?
                    <Fade left delay={jersey.id*10} key={jersey.id}>
                        <div className="item">
                            <div className="wrapper">
                                <ProductCard
                                    jersey={jersey}
                                />
                            </div>
                        </div>
                    </Fade>
                    : null

            ))
            :null
    );

    showFilteredShoes = (brand) => {
        const list = this.state.jerseys.filter((jersey) => {
            return jersey.brand === brand;
        });
        this.setState({
            filterShoes: brand === "All" ? this.state.jerseys : list,
            brandFilter: brand
        })
    };

    render() {
        return (
            <div>
                <div className="the_team_container"
                     style={{background: `url(${stripes}) repeat`}}
                >
                    <div style={{
                        display: "flex",
                        justifyContent: 'center',
                        marginTop: '150px'
                    }}
                         className="admin_progress">
                        {this.state.loading ?
                            <CircularProgress thickness={7} style={{color: '#98c5e9',zIndex: '10'}}/>
                            : null
                        }
                        {this.state.loading ?
                            <div className="cyrcul"></div>
                            : null
                        }
                    </div>
                    { !this.state.loading ?
                        <div  className="container_the_shop">
                            <Tag
                                bck="#00202e"
                                size="20px"
                                weight="bold"
                                color="#ffffff"
                                margin="0px 20px"

                            >
                                Մարզակոշիկներ
                            </Tag>

                            <div className="match_filters">
                                <div className="match_filters_box">
                                    <div className="cont">
                                        <div className={`option ${this.state.brandFilter === "All" ? "active" : ""}`}
                                             onClick={() => this.showFilteredShoes("All")}
                                        >
                                            All
                                        </div>
                                        <div className={`option ${this.state.brandFilter === "Adidas" ? "active" : ""}`}
                                             onClick={() => this.showFilteredShoes("Adidas")}
                                        >
                                            #Adidas
                                        </div>
                                        <div className={`option ${this.state.brandFilter === "Nike" ? "active" : ""}`}
                                             onClick={() => this.showFilteredShoes("Nike")}
                                        >
                                            #Nike
                                        </div>
                                        <div className={`option ${this.state.brandFilter === "Puma" ? "active" : ""}`}
                                             onClick={() => this.showFilteredShoes("Puma")}
                                        >
                                            #Puma
                                        </div>
                                        <div className={`option ${this.state.brandFilter === "New Balance" ? "active" : ""}`}
                                             onClick={() => this.showFilteredShoes("New Balance")}
                                        >
                                            #New Balance
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="container_table">
                                {this.showJerseys(this.state.filterShoes)}
                            </div>

                        </div>
                        : null
                    }

                </div>
            </div>
        );
    }
}

export default TheSportShoes;
