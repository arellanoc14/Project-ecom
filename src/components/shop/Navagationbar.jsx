import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { ProductConsumer } from './handleCartContext';
import '../css/navbar.css';

class SubCountCart extends Component {
    render() {
		const { countTotal, cart } = this.props.value;
		const emptyCart = cart.length === 0 ? true : false;
        return (
       		<React.Fragment>
		        {!emptyCart && (
					<strong> {countTotal} </strong>
		        	)
		        }
			</React.Fragment>
        );
    }
}
class Navbar extends Component {
    render() {
    	 return(
    	  	<ProductConsumer>
	    	  	{value => {
    				const { cart } = value;
	    	  		return (
						<div className = 'navbar'>
							<ul  className = 'tabsList'>
								<li className = 'li'>
									<Link to = "/" className = 'tabs'>
										Home
									</Link>
								</li>
								<li className = 'li'>
									<Link to = "/Cart" className = 'tabs'>
										Cart: <SubCountCart value = { value } />
									</Link>
								</li>
							</ul>	
						</div>
					)
	    	  	}}
    	  	</ProductConsumer>
    	)
    }
}
export default Navbar;
