import React from 'react'
import Header from "./Header"
//useSelector is used so that we used that store data here
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Home = () => {
    //basically useSelector take a function 

    //here state means the data that is given in productReducer
    //here state take a initState ,  action 
    // here first state is a variable store that take state means initstate

    //here we destructre so we change const state to product
    /*so that we get direct data before product use we have product
    and in product we have data now we have direct data*/
    
    const {products} = useSelector(state => state.ProductsReducer);
    //console.log(products);
    return (
        <div>
        <Header />
        {/*here mtb means margin top bottom */}
        <div className="container ">
            <div className="row">
                {products.map(product =>(
                    <div className="col-3" key={product.id}>
                     <div className="product">
                        <div className="product__img">
                        <Link to={`/details/${product.id}`}>
                        <img src={`./images/${product.image}`} alt="image name" />
                        </Link>
                        </div>

                        <div className="product__name">
                        {product.name}
                        </div>
                        <div className="row">
                        <div className="col-6">
                        <div className="product__price">
                        ₹ {product.price}
                            <span> { product.discount }% </span>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="product__discount__price">
                        ₹ {product.discountprice}
                            </div>
                        </div> 
                        </div>
                    </div>   
                    </div>
                ))}
                
            </div>
        </div>
         
        </div>
    )
}

export default Home
