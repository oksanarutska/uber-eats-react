import React from 'react';
import './RestaurantCard.scss'



function RestaurantCard(props) {
    const product = props.data;
    return(


    <div className={"wrapper_block"}>
    <img src={product.imgUrl}/>
<div className={"wrapper_block_content"}>
    <a href={"#"}>{product.restaurantName}</a>
    <p>{rank_to_dolar(product.priceRank)} • {product.categories.join(' • ')}</p>
    <p className={"block_content"}>{product.minTime} - {product.maxTime} Min</p>
</div>
</div>


    )
}

function rank_to_dolar(rank) {

        var dolar = '';
        for (var i =0; i<rank; i++){
            dolar +="₴"
        }
     return dolar




}

    export default RestaurantCard;