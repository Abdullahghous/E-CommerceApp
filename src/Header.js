import React from 'react'
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    console.log('form email', user)

    const handleAuth = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
                />
            </Link>
            <div className="header_search">
                <input 
                className="header_searchInput"
                type="text"
                /> 
                <SearchIcon className="header_SearchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuth} className="header_options">
                    <span className="header_optionLineOne">{user ? user?.email : 'Hello Guest'}</span>
                    <span className="header_optionLineTwo">{
                        user ? 'Sign Out' : 'Sign In'
                    }</span>
                </div>
                </Link>
                <div className="header_options">
                <span className="header_optionLineOne">Return</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_options">
                <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount" >{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
