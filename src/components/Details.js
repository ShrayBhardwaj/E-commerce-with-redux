import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {useDispatch , useSelector} from "react-redux";

const Details = () => {
    const [quantity , setQuantity] = useState(1)
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer);
    //console.log(product);
    useEffect(() => {
      dispatch({type: 'PRODUCT', id})  
    }, [id])
    //console.log(id);

    const decQuantity = () => {
        if(quantity>1)
        {
           setQuantity(quantity-1) 
        }
    }

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                <div className="details__image">
                <img src={`/images/${product.image}`} alt="" />
                </div>
                </div>
                <div className="col-6">
                <div className="detail__name">
                    {product.name}
                </div>
                <div className="detail__prices">
                <span className="detail__currency">₹</span>
                <span className="detail__actual"> { product.price} </span>
                <span> { product.discount }% </span>
                <span className="detail__discount">₹ {product.discountprice}</span>
                </div>
                <div className="detail__info">
                    <div className="details__inDec">
                <span className="dec" onClick={decQuantity}>-</span>
                <span className="quantity">{quantity}</span>
                <span className="inc" onClick={()=> setQuantity(quantity+1)}>+</span> 
                <button className="btn-default"
                 onClick={()=>dispatch({type: "ADD_TO_CART",
                 payload: {product,quantity} })}
                 >Add to cart</button>
                </div>
                </div>
                <div className="detail__p">
                    <h4>Details</h4>
                    {product.desc}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Details

