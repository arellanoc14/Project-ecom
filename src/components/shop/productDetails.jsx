import React,{Component} from 'react';
import {ProductConsumer} from './handleCartContext';
import {Link} from "react-router-dom";
import '../css/productDetails.css';

class ProductDetails extends Component{
  state = {
    seleted: null,
    size: false,
    productSizes: ['XS','S','M','L','XL']
  }
  handlesizes = item => {   
      this.setState({
        seleted: item,
        size: true
    })
  }
	render(){	     
  return (
      <ProductConsumer>
        {value => {
          const { id, picture, price, name, inCart, total, count } = value.detailProduct;
          return(
            <div id = 'productsDetails'>
              <div style = {{display: 'flex', flexDirection: 'row', position: 'relative'}}>
                <div id = 'productDetailsImgContiner'>
                  <img id = 'productDetailsPicture'
                  src={picture} alt = ""/>
                </div>
                <div id = 'productsOptions'>    
                      <h1>{name}</h1>
                      <div> price:  ${price}</div>
                  <div className = 'sizes'>    
                     {
                        this.state.productSizes.map(item => 
                          <div 
                            className = 'btnSizes'
                            onClick = {() => this.handlesizes(item)} 
                            id = { this.state.seleted === item ? 'click' : null }>
                            {item}
                          </div>
                     )}                                                                                                              
                  </div>
                  <div id = 'buyOptions'>
                      <button   
                            disabled= { this.state.size ? false : true }
                            onClick={() => { value.addToCart(id, this.state.seleted) }}
                            id = { inCart ? 'addedToCart': 'addToCartBtn' }>
                            { inCart ? "In Cart" : 'selectSize' }
                      </button> 
                      <button className = 'incrementBtns'> 
                        <Link id = 'cartLink'  to = "/Cart">Go To Cart</Link>
                      </button> 
                      <div id = 'btnIcontainer'>
                        <button
                            className = 'incrementBtns' 
                            disabled={ count === 0 ? true : false } 
                               onClick={() => {value.incrementValue(id) }}>
                               Increment
                        </button>
                        <button 
                            className = 'incrementBtns' 
                            disabled={ count === 0 ? true : false }
                              onClick={() => {
                                value.decrementValue(id)
                              }}>
                              Decrement
                        </button>  
                     </div> 
                      <div id = 'countAndtotal'>
                         <span id = 'total'>Item Total: $ {total}</span> 
                         <span id = 'count'>Item Count: # {count}</span> 
                      </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
	}
}
export default ProductDetails;