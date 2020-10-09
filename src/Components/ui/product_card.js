import React from 'react';
import {Tag} from './misc';


const ProductCard = ({jersey}) => {

    let discount = jersey.discount;
    let discountedPrice = Math.floor( jersey.price - (jersey.price*jersey.discount/100));
    let priceStrike = {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: "14px"
    };

    return (
        <a href={`/product_details/${jersey.id}`} className="prod_card_a">
            <div className="card">
                { jersey.availability === "Available" ?
                    <div className="product_card_availability" style={{backgroundColor: "#4CAF50"}}>
                        Առկա
                    </div>
                :
                    null
                }


                { +discount > 0 ?
                    <div className="product_card_discount">
                        {jersey.discount}%
                    </div>
                    : null
                }
                <img src={jersey.url} alt={jersey.title}/>
                    <h2>{jersey.title}</h2>
                    <div style={{
                        height: "38px",
                        color: '#ffffff',
                        padding: '5px',
                        fontSize: "14px"
                    }}>{jersey.description}</div>

                    <div className="price">
                        <b>
                            <div className="price_title">
                                Գինը՝
                            </div>&#10240;
                            { discount > 0 ?
                            <span>
                                <span style={priceStrike}>
                                {jersey.price} դր.</span> / <span style={{color: '#ff983d'}}>{discountedPrice}</span>
                            </span>
                            : jersey.price}
                        </b> դր.
                    </div>
                    <div style={{padding: "10px"}}>
                        <Tag
                             bck="black"
                             size="14px"
                             weight="bold"
                             padding="5px 5px"
                             border="2px solid"
                             color="#ff983d"
                             // link={true}
                             // linkTo={`/product_details/${jersey.id}`}
                        >Տեսնել Ավելին</Tag>
                    </div>
            </div>
        </a>
    );
};

export default ProductCard;
