import React, {Component} from 'react';
import stripes from '../../Resources/images/stripes.png';
import {firebase, firebaseDB, firebaseJerseys} from "../../firebase";
import {firebaseLooper, reverseArray, Tag} from '../ui/misc';
import Slide from "react-reveal/Slide";
import ProductCard from "../ui/product_card";
import {Promise} from "core-js";

class ProductDetails extends Component {

    state = {
        jerseyId: '',
        defaultImage: '',
        jerseyData: '',
        loading: true,
        jerseys:[]
    };

    updateFields = (jerseyData,jerseyId,defaultImage) => {
        this.setState({
            jerseyData,
            jerseyId,
            defaultImage
        });
    };

    componentDidMount() {
        const jerseyId = this.props.match.params.id;
        firebaseDB.ref(`jerseys/${jerseyId}`).once('value')
            .then((snapshot) => {
                const jerseyData = snapshot.val();

                firebase.storage().ref('jerseys')
                    .child(jerseyData.image).getDownloadURL()
                    .then((url) => {
                        this.updateFields(jerseyData,jerseyId,url)
                    }).catch((e) => {
                        this.updateFields({
                            ...jerseyData,
                        },jerseyId)
                })

            });

        firebaseJerseys.limitToLast(12).once('value').then(snapshot => {
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
        let discount = this.state.jerseyData.discount;
        let discountedPrice = Math.floor( this.state.jerseyData.price - (this.state.jerseyData.price*this.state.jerseyData.discount/100));
        let priceStrike = {
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
            fontSize: "23px"
        };
        return (
            <div>
                <div className="the_team_container"
                     style={{background: `url(${stripes}) repeat`}}
                >
                        <div className="product_details_main_block">
                            <div className="product_details_img" style={{position: "relative"}}>
                                { +this.state.jerseyData.discount > 0 ?
                                    <div className="product_details_discount">
                                        {discount}%
                                    </div>
                                    :null
                                }
                                <img src={this.state.defaultImage} alt={this.state.jerseyData.title} style={{width: '100%'}}/>
                            </div>
                            <div className="prod_desc">
                                <Tag
                                    bck="#00202e"
                                    size="20px"
                                    weight="bold"
                                    color="#ff983d"
                                >
                                    {this.state.jerseyData.title}
                                </Tag>
                                <div style={{marginTop: '30px'}}>
                                    <div style={{color: '#ff983d',fontSize: '23px',fontWeight: 'bold'}}>Նկարագրություն՝ </div>
                                    {this.state.jerseyData.description}
                                </div>

                                <div className="product_details_price">
                                    <span style={{color: '#ff983d'}}>Ապրանքանիշը՝</span>&#10240;
                                    { this.state.jerseyData.brand}
                                </div>

                                <div className="product_details_price">
                                    <b>
                                        <div className="price_title">
                                            Գինը՝
                                        </div>&#10240;
                                        { discount > 0 ?
                                            <span>
                                <span style={priceStrike}>
                                {this.state.jerseyData.price} դր.</span> / <span style={{color: '#ff983d'}}>{discountedPrice}</span>
                                </span>
                                            : this.state.jerseyData.price}
                                    </b> դր.
                                </div>

                                { +this.state.jerseyData.discount > 0 ?
                                    <div className="product_details_price">
                                        <span style={{color: '#ff983d'}}>Զեղչ՝</span>&#10240;{discount}%
                                    </div>
                                    :null
                                }
                                <div className="product_details_price">
                                    <span style={{color: '#ff983d'}}>Կարգավիճակ՝</span>&#10240;
                                    { this.state.jerseyData.availability === "Available" ?
                                        <span>Առկա</span>
                                        :
                                        <span>Պատվերով</span>
                                    }
                                </div>
                                <div className="product_details_price">
                                    <span style={{color: '#ff983d'}}>Տարիք՝</span>&#10240;
                                    { this.state.jerseyData.ageLimit === "Adult" ?
                                        <span>Մեծահասակների</span>
                                        :
                                        <span>Երեխաների</span>
                                    }
                                </div>
                            </div>
                        </div>

                </div>
                <div style={{background: '#00202e'}} className="container_table">
                    {this.showJerseys(this.state.jerseys)}
                </div>
            </div>
            )
    }
}

export default ProductDetails;
