import React, { Component} from 'react';
import { Link } from "react-router-dom";
class CarTotal extends Component {
    render() {
		const {
			cartSubTotal,
			cartTax,
			cartTotal,
			cart,
			countTotal
		} = this.props.value;
		const emptyCart = cart.length === 0 ? true : false;
        return (
       		<React.Fragment>
	        {!emptyCart && (
				<div className = "cartTotalcontainer">
				    <div className="cartTotalRows">
					    <div className="cartTotalCols">
					        <h5>
				                <span className="cartTotalText"> subtotal :</span>{" "}
				                <strong className="cartTotalAmounts">${cartSubTotal} </strong>
				            </h5>
					        <h5>
				                <span className="cartTotalText"> subCount :</span>{" "}
				                <strong className="cartTotalAmounts">#{countTotal}   </strong>
				            </h5>
				            <h5>
				                <span className="cartTotalText"> tax :</span>{" "}
				                <strong className="cartTotalAmounts">${cartTax}      </strong>
				            </h5>
				            <h5>
				                <span className="cartTotalText"> total :</span>{" "}
				                <strong className="cartTotalAmounts">${cartTotal}    </strong>
				            </h5>
				        </div>
				    </div>
				</div>
	        	)
	        }
			</React.Fragment>
        );
    }
}

export default CarTotal;
