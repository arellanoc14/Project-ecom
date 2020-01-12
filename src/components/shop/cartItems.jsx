import React, { Component } from 'react';
class Cartitem extends Component {
    render() {
      const {id,name,picture,price,total,count,size
      } = this.props.item;
      const { increment, decrement } = this.props.value;    
        return(
            <div className = "cartItemContainer">
                 
                 <div className = "cartItemCol">
                    <div>
                         <img src={picture} alt ="" id = 'choosenImg' />
                     </div>
                     <div>
                        <p className = 'cartItemColText'>product:
                             <strong className = 'cartItemColName'> {name} </strong>
                         </p>
                     </div>
                          <p className = 'cartItemColText'>size:  
                              <strong className = 'cartItemColName'> {size}  </strong> 
                          </p>
                     <div>
                        <p className = 'cartItemColText'>price:
                            <strong className = 'cartItemColName'> ${price}  </strong>
                        </p>
                     </div>
                  </div>

                  <div className = "cartItemCol">
                    <div className="cart-btn"
                        style = {{ cursor : 'pointer'}}
                        onClick={() => { return increment(id) }}>
                        <p className = 'cartItemcrement'> increment</p>                       
                    </div>
                    <div 
                         style = {{ cursor : 'pointer'}}
                        onClick={() => { return decrement(id) }}>
                        <p className = 'cartItemcrement'> decrement</p>
                    </div>
                    <div>
                        <p className = 'cartItemColText'>Count:
                              <strong className = 'cartItemColName'> #{count}  </strong>
                        </p>
                    </div>    
                    <div className = "TextCol">
                        <p className = 'cartItemColText'>item total :
                             <strong className = 'cartItemColName'> ${total}  </strong>
        
                         </p>
                    </div>
                </div>
            </div>
         );
      }
  }

export default Cartitem;
