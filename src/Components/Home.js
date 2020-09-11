import React from 'react';
import '../Styles/Home.scss';
import Product from './Product';

function Home() {
    return (
        <div className="home">
         <img className="home__img"
         src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg" 
         alt=""/>
        {/* product id, title, price, rating, image */}
        <div className="home__row">
        <Product
        id ="123456771"
        title="Eloquent JavaScript, 3rd Edition"
        price={25.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
        />
        <Product
        id ="123456771"
        title="Eloquent JavaScript, 3rd Edition"
        price={25.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
        id ="123456771"
        title="Eloquent JavaScript, 3rd Edition"
        price={25.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
        />
        <Product
        id ="123456771"
        title="Eloquent JavaScript, 3rd Edition"
        price={25.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
        />
        <Product
        id ="123456771"
        title="Eloquent JavaScript, 3rd Edition"
        price={25.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
        />
        </div>
        <div className="home__row">
        <Product
        id ="123456771"
        title="Eloquent JavaScript, 3rd Edition"
        price={25.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
        />
        </div>


        </div>
    )
}

export default Home
