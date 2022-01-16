import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from '../../StateProvider';


function Header() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='header'>

            <Link to="/"> 
                <img className='header__logo' 
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt="Amazon" />
            </Link>
            
            <LocationOnIcon className='header__locationLogo' />
             <div className='header__location'>
                    
                    <span className='header__optionLineOne'>Hello</span>
                    <span className='header__optionLineTwo'>Select Your Address</span>
                </div>

            <div className='header__search'>
                <input className='header__searchInput' type="text" />
                <SearchIcon className="header__searchIcon" />
                
            </div>
            <div className='header__nav' >
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon className="header__baseketLogo"/>
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>

    )
}

export default Header;