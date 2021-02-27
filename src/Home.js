import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                    className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    alt=""/>

                <div className="home_row">
                    <Product 
                    id='1'
                    title='The lean startup'
                    price={29.99}
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
                    rating={3}
                    />
                    <Product 
                    id='2'
                     title='The lean startup'
                     price={29.99}
                     image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
                     rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                    id='3'
                     title='The lean startup'
                     price={29.99}
                     image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
                     rating={2}
                    />
                    <Product 
                    id='4'
                    title='The lean startup'
                    price={29.99}
                    image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
                    rating={2}/>
                    <Product 
                     title='The lean startup'
                     price={29.99}
                     image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
                     rating={2}
                    />
                </div>
                <div className="home_row">
                    <Product 
                    id='5'
                     title='The lean startup'
                     price={29.99}
                     image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg'
                     rating={2}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
