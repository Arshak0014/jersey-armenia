import React, {Component} from 'react';
import {firebase, firebaseJerseys} from "../../../firebase";

import {firebaseLooper,reverseArray} from '../../ui/misc';
import ProductCard from '../../ui/product_card';
import Slide from 'react-reveal/Slide';
import {Promise} from "core-js";

class Blocks extends Component {

    state = {
        jerseys:[]
    };

    componentDidMount() {
        firebaseJerseys.limitToLast(15).once('value').then(snapshot => {
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
                    jerseys: reverseArray(jerseys)
                });
            })

        })
    }

    showJerseys = (jerseys) => (
        jerseys ?
            jerseys.map((jersey) => (
                <Slide bottom key={jersey.id}>
                    <div className="item">
                        <div className="wrapper">
                            <ProductCard
                                jersey={jersey}
                            />
                        </div>
                    </div>
                </Slide>

            ))
                :null
    );


    render() {
        return (
            <div className="home_matches">
                {this.showJerseys(this.state.jerseys)}
            </div>
        );
    }
}

export default Blocks;
