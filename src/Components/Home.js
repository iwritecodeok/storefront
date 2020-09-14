import React from "react";
import "../Styles/Home.scss";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
        alt=""
      />
      {/* product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123456771"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
          price={2088.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
        />
        <Product
          id="12345677"
          title="Eloquent JavaScript, 3rd Edition"
          price={25.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456773"
          title="Breville the Barista Express Espresso Machine"
          price={699.57}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81RfdzPfrQL._AC_SL1500_.jpg"
        />
        <Product
          id="123456774"
          title="JoyJolt Savor Double Wall Insulated Glasses Espresso Mugs (Set of 2) - 5.4-Ounces
        "
          price={16.95}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71lHAhhCHUL._AC_SL1500_.jpg"
        />
        <Product
          id="123456775"
          title="Sofa Sack - Plush Bean Bag Sofas with Super Soft Microsuede Cover - XL Memory Foam Stuffed Lounger Chairs for Kids, Adults, Couples - Jumbo Bean Bag Chair Furniture - Tangerine 7.5'"
          price={222.67}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71fxbr12KbL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123456776"
          title="Bose QuietComfort 15 Acoustic Noise Cancelling Headphones"
          price={600.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61DM41H3cFL._AC_SL1200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
