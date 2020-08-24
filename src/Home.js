import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home"> 
            <img 
                className="home_image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/DesktopHero_1500x600._CB407658174_.jpg"
                alt=""
             ></img>
            <div className="home_row">

                <Product
                    id="12321341"
                    title="Acer Nitro 5 Intel i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop (8GB Ram/1TB HDD/Windows 10 Home/GTX 1650 Graphics/Obsidian Black/2.3 Kgs), AN515-54"
                    price={61784}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/419523kekaL._AC_SY200_.jpg"
                />

                <Product
                    id="32321341"
                    title="ASUS VivoBook S14 AMD Ryzen 5 4500U, 14-inch FHD Thin and Light Laptop (8GB RAM/512GB NVMe SSD/Windows 10/MS Office 2019/Integrated Graphics/Indie Black/1.40 kg), M433IA-EB594TS"
                    price={64786}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Hsm+C3XfL._AC_UY218_.jpg"
                />
            </div>

            <div className="home_row">
                 <Product
                    id="42321341"
                    title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
                    price={9749}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
                />

                <Product
                    id="52321341"
                    title="Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Black/Carbon, One Size (S & L Bands Included) (Black/Carbon)"
                    price={19905}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/715obo1cz0L._AC_UY218_.jpg"
                />
                 <Product
                    id="16321341"
                    title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)"
                    price={120848}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._SL1500_.jpg"
                />
               
            </div>

            <div className="home_row">
                <Product
                    id="89321341"
                    title="LG 34 inch Curved 21:9 Ultrawide Monitor - WQHD, IPS Panel with, HDMI, Display, USB, Thunderbolt Ports - 34UC98 (Black/Silver)"
                    price={89998}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/418fPJ7pn3L.jpg"
                />
            </div>
             

        </div>
    )
}

export default Home
