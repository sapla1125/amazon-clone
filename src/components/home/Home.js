import React from 'react'
import Product from '../product/Product';
import "./Home.css";

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5676._CB404165680_.jpg" alt='Logo Banner' />
            </div>
            <div className='home__row'>
                {/* Product */}
                <Product 
                    key={0}
                    id= {1}
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_ML2_.jpg"
                    rating={4}
                />
                <Product 
                    key={1}
                    id= {2}
                    title="Kasa Smart Light Switch HS200, Single Pole, Needs Neutral Wire, 2.4GHz Wi-Fi Light Switch Works with Alexa and Google Home, UL Certified, No Hub Required, White"
                    price={30.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71nMzhO05jL.__AC_SX300_SY300_QL70_ML2_.jpg"
                    rating={5}
                />
                
                
            </div>
            <div className='home__row'>
                <Product
                    key={2}
                    id= {3}
                    title="Samsung LC32R500FHNXZA 32' FHD Freesync 1500R Curved Monitor 3,000:1 Contrast 4ms"
                    price={349.98}
                    image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc27r500fhnxza/gallery/CR500_004_L-Perspective_Black_Gallery002.jpg?$product-details-blur-jpg$"
                    rating={4} 
                />
                <Product 
                    key={3}
                    id= {4}
                    title="PlayStation 5 Disc Edition"
                    price={1074.99}
                    image="https://cdn.shopify.com/s/files/1/0490/7312/7591/products/gaming-shop-canada-855205_400x.jpg?v=1620997453"
                    rating={5}
                />
                <Product 
                    key={4}
                    id= {5}
                    title="Xbox Series X Halo Infinite Limited Edition Kit Bundle 4k Streaming / 4k Gaming with Controller New"
                    price={1529.24}
                    image="https://m.media-amazon.com/images/I/41KvgMHsD+L._AC_.jpg"
                    rating={1} 
                />
            </div>
            <div className='home__row'>
                {/* Product */}
                <Product 
                    key={5}
                    id= {6}
                    title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip with 8‑core CPU and 14‑core GPU, 16GB RAM, 512GB SSD) - Silver - French"
                    price={2300.49}
                    image="https://m.media-amazon.com/images/I/61cCf94xIEL._AC_SL1500_.jpg"
                    rating={5}
                />
                
            </div>
        </div>
    )
}

export default Home
