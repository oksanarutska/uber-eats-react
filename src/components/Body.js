import React from 'react';
import './Body.scss'
import RestaurantCard from "./RestaurantCard";

fetch("https://uber-eats-mates.herokuapp.com/api/v1/restaurants")
    .then(function (responce) {
        return responce.json()

    })
    .then(function (data) {
        console.log(data)
    })


const products = [
    {
        imgUrl: require('../assets/image/mak.png'),
        restaurantName: 'Макдоналдс',
        priceRank: 2,
        categories: ['Бургеры'],
        minTime: '00:25:00',
        maxTime: '00:35:00'
    },
    {
        imgUrl: require('../assets/image/wokwei.png'),
        restaurantName: 'WOKWEI',
        priceRank: 1,
        categories: ['Китайська', 'Азіатська'],
        minTime: '00:40:00',
        maxTime: '00:50:00'
    },
    {
        imgUrl: require('../assets/image/yizha.png'),
        restaurantName: 'YIZHA',
        priceRank: 2,
        categories: ['Американська', 'Бургери', 'Вулична їжа'],
        minTime: '00:35:00',
        maxTime: '00:45:00'
    },
    {
        imgUrl: require('../assets/image/musafir.png'),
        restaurantName: 'Musafir (вул. Саксаганського)',
        priceRank: 2,
        categories: ['Близькосхідна'],
        minTime: '00:30:00',
        maxTime: '00:40:00'
    },
    {
        imgUrl: require('../assets/image/wokwei_2.png'),
        restaurantName: 'WOKWEI',
        priceRank: 1,
        categories: ['Китайська', 'Азіатська'],
        minTime: '00:40:00',
        maxTime: '00:50:00'
    },
    {
        imgUrl: require('../assets/image/milk_bar.png'),
        restaurantName: 'Milk Bar',
        priceRank: 2,
        categories: ['Десерти', 'Європейська'],
        minTime: '00:25:00',
        maxTime: '00:35:00'
    },
    {
        imgUrl: require('../assets/image/mimosa.png'),
        restaurantName: 'Mimosa Brooklyn Pizza',
        priceRank: 2,
        categories: ['Італійська', ' Піца', 'Американська'],
        minTime: '00:15:00',
        maxTime: '00:25:00'
    },
    {
        imgUrl: require('../assets/image/to_be.png'),
        restaurantName: 'To Be',
        priceRank: 2,
        categories: ['Японська', ' Азіатська', 'Суші'],
        minTime: '00:25:00',
        maxTime: '00:35:00'
    },
    {
        imgUrl: require('../assets/image/druzi.png'),
        restaurantName: 'Druzi Cafe (вул. Прорізна)',
        priceRank: 2,
        categories: ['Американська', ' Сучасна європейська'],
        minTime: '00:30:00',
        maxTime: '00:40:00'
    },

];


function Body() {
    return (

        <div className={"wrapper_body"}>
            <div className={"wrapper "}>
                <div className={"wrapper_search"}>
                    <input className={"search"} placeholder={"Search for restaurant or cuisine"}/>
                    <img src={require('../assets/image/search.png')}/>
                </div>

                <div className={"body"}>
                    <h1>
                        Kyiv Restaurants
                    </h1>

                    <div className={"wrapper_content"}>
                        {products.map((product, index) => <RestaurantCard key={index} data={product}/>)}


                    </div>
                </div>

            </div>

        </div>


    )

}


export default Body;