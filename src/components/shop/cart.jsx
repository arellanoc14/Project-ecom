import React,{Component} from 'react';
import {ProductConsumer} from './handleCartContext';
import CartList from './carList';
import CartTotal from './cartTotal';
import '../css/cart.css';

class Cart extends Component{
	render(){
return(
		<section className = 'cart'>		
			<ProductConsumer>
				{value => {
					const {cart} = value;
						if(cart.length > 0){				
							return(									
								<div className = 'cartContainer'>
									<CartList  value = {value} />
									<CartTotal value = {value} />
								</div>
							)
						} else {
							return <h1>Your cart is empty</h1>
						}		
					}} 
			</ProductConsumer>	
		</section>
		)		
	}
}
export default Cart;