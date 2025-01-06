import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import images from "./images.jpg"; 
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; 
import { useStateValue } from './StateProvider';
import {auth} from './Firebase'

function Header() {
    const [{basket,loginuser},dispatch]=useStateValue();
    //console.log("my basket",basket)
    const logoutUser = () =>{
        if(loginuser){
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <img className='header__logo' alt="logo" src={images} />
 
            <div className='header__search'>
                <input type="text" className='header__searchInput' />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className='header nav'>
                {/* 1er lien */}
                <Link to={!loginuser && "/login"}  className="header__link">
                    <div  onClick={logoutUser} className='header_option'>
                        <span className='header__optionLineOne'>Hello,{loginuser?.email}</span>
                        <span className='header__optionLineTwo'>{loginuser? 'Signout':'Sign In'}</span>
                    </div>
                </Link>
                {/* 2nd lien */}
                <Link to="/" className="header__link">
                    <div className='header_option'>
                        
                        <span className='header__optionLineTwo'>& orders</span>
                    </div>
                </Link>
                {/* 3ème lien */}
                <Link to="/" className="header__link">
                    <div className='header_option'>
                        
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
            </div>
            {/*basket icon with number */}
            <Link to="/checkout" className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    {/*number of items in the basket */}
                    <span className='header_optionLineTwo header__productCount'>{basket?.length}</span>
                </div>
            </Link>
        </nav>
    );
}

export default Header;
