import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Hello!!</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">Products</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;