import React from "react";
import Logo from "../Assets/shamazon-logo.png";
import "./../Styles/Nav.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Nav() {
  const [{ cart, user }] = useStateValue();
  const login = () =>{
    if (user){
      auth.signOut();
    }
  }
  return (
    <nav className="navBar">
      <Link to="/" className="logo_link">
        <img className="navBar__logo" src={Logo} alt="" />
      </Link>
      <div className="navBar__searchContainer">
        <input type="text" className="navBar__input" />
        <SearchIcon className="navBar__searchIcon" />
      </div>
      <div className="navBar__nav">
        <Link to="/login" className="navBar__link">
          <div onClick={login} className="navBar__option">
  <span className="nav__optionLineOne">Hello, {user ? user.email : 'Guest'}</span>
            <span className="nav__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
          </div>
        </Link>
        <Link to={ !user && "/login"} className="navBar__link">
          <div className="navBar__option">
            <span className="nav__optionLineOne">Returns</span>
            <span className="nav__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="navBar__link">
          <div className="navBar__option">
            <span className="nav__optionLineOne">Your</span>
            <span className="nav__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="navBar__link">
          <div className="nav__basket">
            <LocalGroceryStoreOutlinedIcon />
            <span className="nav_optionLineTwo nav__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
