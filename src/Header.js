import React from 'react';
import logo from './Images/amzone.png';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"; 
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

    const [{basket, user }] = useStateValue();

    const login = () =>{
        if (user) {
            auth.signOut();
        }
    };
    console.log(basket);



    return (
        <div className="header">
            <Link to="/"> 
                <img 
                    className="header_logo" 
                    src={logo} 
                    alt="Logo"
                ></img>
            </Link>

            <div className="header_search">
                  <input type="text" className="Header_searchInput"/>
                  <SearchIcon className="header_SearchIcon" />
            </div>
            
            <div className="header_div">

                
                <Link to={!user &&"/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello {user}</span>
                         <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

               

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                <span className="header_optionLineTwo header_basketCount">{basket.length}</span>

                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
