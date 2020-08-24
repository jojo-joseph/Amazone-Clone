import React from 'react';
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";


function Checkout() {
    const [{basket}]=useStateValue();


    return (
        <div className="checkout"> 
            <div className="checkout_left">
           <img 
           className="checkout_ad" 
           src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/WFH/ProHomeOffice/PHO_StorePage_PC_Header-1.jpg"
           alt=""
           >
           </img>

           {basket?.length === 0 ? (
               <div>
                   <h2>Your Shopping Basket is empty</h2>
                <p>
                    You have items saved to buy later. To buy one or more now, click "Move to cart" next to the item.
                </p>
                </div>
           ) : (
               <div>
                   <h2 className="checkout_title">Your Shopping Basket</h2>
                   {basket?.map((item) => {
                       console.log(item);
                       return(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                        );
                     })}
                  
               </div>
           )}
           </div>
           {basket.length > 0 && (
               <div className="checkout_right">

                    <Subtotal />


               </div>
           )}
        </div>
    )
}

export default Checkout
