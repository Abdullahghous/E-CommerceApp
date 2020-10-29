import React from 'react';
import './home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
                alt=""
                />
                <div className="home-row">
                    <Product 
                     id="123"
                     title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                     price={20.99}
                     image = 'https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg'
                     rating={5}
                    />
                    <Product 
                     id="124"
                     title='Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!' 
                     price={37.99}
                     image = 'https://m.media-amazon.com/images/I/91VokXkn8hL._AC_UY327_FMwebp_QL65_.jpg'
                     rating={3}
                    />
                </div>
                <div className="home-row">
                   <Product 
                    id="125"
                     title="TCA Boys' Youth & Men's Pro Performance Compression Shirt Long Sleeve Base Layer Thermal Top - Crew/Mock Neck" 
                     price={10.99}
                     rating={5}
                     image = 'https://m.media-amazon.com/images/I/61xrxYRzWOL._AC_UL480_FMwebp_QL65_.jpg'
                    />
                    <Product 
                     id="126"
                     title='Wrangler Authentics Men Regular Fit Comfort Flex Waist Jean' 
                     price={109.99}
                     rating={5}
                     image = 'https://m.media-amazon.com/images/I/81HIcavdH6L._AC_UL480_FMwebp_QL65_.jpg'
                    />
                    <Product 
                     id="127"
                     title="Real Essentials Men's Active Athletic Performance Shorts with Pockets - 5 Pack" 
                     price={50.99}
                     rating={5}
                     image = 'https://m.media-amazon.com/images/I/81Rc1ubcuOL._AC_UL480_FMwebp_QL65_.jpg'
                    />
                </div>
                <div className="home-row">
                <Product 
                     id="128"
                     title='Samsung Galaxy A20s A207M 32GB DUOS GSM Unlocked Phone (International Variant/US Compatible LTE) - Black' 
                     price={68.99}
                     rating={5}
                     image = 'https://m.media-amazon.com/images/I/31DVClA7BaL._AC_UY327_FMwebp_QL65_.jpg'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
