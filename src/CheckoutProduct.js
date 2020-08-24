import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, image, price, rating}) {
  
  console.log(id, title, image, price, rating);
  const [{basket}, dispatch] = useStateValue();  
  const removeFromBasket=()=>{
      //remove from basket

      dispatch({
          type:"REMOVE FROM BASKET",
          id: id,

      });

  }
  
    return (
        <div className="checkoutProduct"> 
            <img className="checkoutProduct_image" src={image} alt=""></img>
            <div className="checkoutProduct_info">
                <p className="checkout_product_title">{title}</p>
                
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
             
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i)=>(
                            <p>⭐</p>
                        ))
                    }
                </div>  

                <button onClick={removeFromBasket}>Remove from basket</button> 
            </div>

        </div>
    )
}

export default CheckoutProduct
