import React, {Component} from 'react';
import ProductCard from "../ui/product_card";
import Fade from 'react-reveal/Fade';

import stripes from '../../Resources/images/stripes.png';

import {firebaseJerseys,firebase} from "../../firebase";
import {firebaseLooper, reverseArray} from "../ui/misc";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Promise} from 'core-js';
import {Tag} from '../ui/misc';

class TheWomen extends Component {

    state = {
        loading: true,
        jerseys: [],
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
                    jerseys: reverseArray(jerseys)
                });
            })

        });

    }

    showJerseys = (jerseys) => (
        jerseys ?
            jerseys.map((jersey) => (
                jersey.gender === 'Female' || jersey.gender === "Unisex" ?
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

    render() {
        return (
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
                            Կանացի հագուստ
                        </Tag>

                        <div className="container_table">
                            {this.showJerseys(this.state.jerseys)}
                        </div>

                    </div>
                    : null
                }

            </div>
        );
    }
}

export default TheWomen;
