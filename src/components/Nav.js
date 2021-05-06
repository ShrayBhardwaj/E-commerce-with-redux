import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
  
    return (
        
        <div className="nav">
        <div className="container">
        <div className="nav__container">
        <div className="nav__left">
            <Link to="/">
            <span> Shray </span>
        <i class="fab fa-pied-piper"></i>
        </Link>
        </div>
        <div className="nav__right">
           <Link to="/cart">
               <div className="basket" >
               <i class="fas fa-cart-plus"></i>
               <span>{totalQuantities}</span>
               </div>
           </Link>
        </div>
        </div>
        </div>
         </div>  
        
    )
}

export default Nav
