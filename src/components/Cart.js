import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const Cart = () => {
    //destruct the products of cartreducer
    const {products ,totalQuantities,totalPrice} = useSelector(state => state.CartReducer);
    //console.log(products);
    const dispatch = useDispatch();
    return (
        <div className="cart">
        <div className="container">
        <h3>your cart</h3>
        {products.length > 0 ? <>
        <div className="row">
            <div className="col-9">
            <div className="cart__heading">
                <div className="row">
                <div className="col-2">
                picture
                </div>
                <div className="col-2">
                name
                </div>
                <div className="col-2">
                price
                </div>
                <div className="col-2">
                inc/dec
                </div>
                <div className="col-2">
                total price
                </div>
                <div className="col-2">
                remove
                </div>
                </div>
            </div>
            {products.map(product => (
                <div className="row vertical_Align"  key={product.id}>
                    <div className="col-2">
                    <div className="cart__image">
                    <img src={`/images/${product.image}`} alt=" " />
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="cart__name">
                        {product.name}
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="cart__price">
                        {product.discountprice}
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="detail__info cart__inDec">
                    <div className="details__inDec">
                <span className="dec" onClick={()=> dispatch({type: 'DEC' ,  payload: product.id })}>-</span>
                <span className="quantity">{product.quantity}</span>
                <span className="inc" onClick={() => dispatch({type: 'INC' , payload: product.id})}>+</span> 

                </div>
                </div>
                    </div>
                    <div className="col-2">
                    <div className="cart__total text-center">
                        {product.discountprice * product.quantity}
                    </div>
                    </div>
                    <div className="col-2">
                    <div className="cart__remove"  onClick={()=> dispatch({type: 'REMOVE' ,  payload: product.id })}>
                    <i class="fas fa-trash-alt"></i>
                    </div>
                    </div>
                </div>
            ))}
            </div>
            <div className="col-3" summary__col>
                <div className="summary">
                 <div className="summary__heading">
                     summary
                 </div>
                <div className="summary__details">
                <div className="row mb-10" >
                <div className="col-6">
                    Total items:
                    </div>
                    <div className="col-6">
                        {totalQuantities}
                       </div>
                      </div>
                      <div className="row mb-10">
                    <div className="col-6">
                        Total price
                    </div>
                    <div className="col-6">
                          {totalPrice}
                       </div>
                    
                    </div> 
                    <button type="button" className="checkout">
                                 checkout
                  </button> 
                </div>
                </div>
            
            </div>
        </div>
        </> : "cart is empty"}
        </div>
        </div>
    )
}

export default Cart
