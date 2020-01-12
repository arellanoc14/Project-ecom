import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from './handleCartContext';
import '../css/styledItems.css';
class Items extends Component { 
    render() {
    	const {picture,name, price,id} = this.props.property
        return (
         	 <ProductConsumer>
              {value => (    		
              <div id = 'containerOfProducts'>
      							 	<img id = 'productsImg' alt = ""  src = {picture} />
          				<div style = {{
                       position: 'relative',
                       width:'100%',display: 'flex',
                       justifyContent:'center',
                       flexDirection:'column',
                       textAlign:'center'
                    }}>
            					<div id = 'nameAndPrice'>
            							<div id = 'name'>{name}</div> 
                          <div id ='price'> ${price}</div>
            					</div>
                      <Link to = {`/product/details/${id}`}
                        onClick={() => { value.handleDetail(id) }}>
                         <span id = 'buybtn'>
                             Buy now
                         </span>
                      </Link>
          				</div>
      				</div>	
            	)
            } 
           </ProductConsumer>
        )
    }
}
export default Items;

