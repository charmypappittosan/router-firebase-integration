import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../../Hooks/useFireBase';
import './Header.css' ;

const Header = () => {
    const {user,handleSignOut}=useFireBase();
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/reviews">Reviews</Link>
        <h3>{user?.displayName && user.displayName}</h3>
        {user?.uid ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    );
};

export default Header;