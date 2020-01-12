import React,{Component} from 'react';
import DetailProduct from '../data/details';
import Data from '../data/data';
const ProductContext = React.createContext();

class HandleCartContent extends Component{	
	state = {
	    products: [],
	    detailProduct: DetailProduct.product,
	    cart:[],
      sizes:[],
      cartSubTotal: 0,
      countTotal: 0,
      cartTax: 0,
      cartTotal: 0
	};
	componentDidMount(){
	  let listProducts = Data.products;
	  this.setState({ products: listProducts });
	};
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id,sizes) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.size = sizes; 
    product.inCart = true;
    product.total = product.price;
    product.count = product.count === 0 ? product.count + 1 : product.count;
    this.setState(() => {
      return{
        cart: [...this.state.cart, product]
      };
    }, this.addTotals);
  };
  incrementValue = id => {
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;
    this.setState(() => {    
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };
  decrementValue = id => {
    let tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    const product = tempCart[index];
    if(product.count > 0) product.count = product.count - 1;
    if(product.count === 0) product.inCart = false;
    product.total = product.price * product.count;
    this.setState(() => {    
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  };
  decrement = id => {  
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { 
          cart: [...tempCart] 
        };
      }, this.addTotals);
    }
  };
  getTotals = () => {
    let subTotal = 0;
    let subCount = 0;
    this.state.cart.map(item => (subCount += item.count));
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subCount,
      subTotal,
      tax,
      total
    };
  };
  addTotals = () => {
    const totals = this.getTotals();    
    this.setState(() => {
        return {
          countTotal: totals.subCount,
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        };
      }
    );
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, this.addTotals);
  };
	render(){
		return(
			<ProductContext.Provider 
				value = {{
						...this.state,
						handleDetail: this.handleDetail,	
						addToCart: this.addToCart,
						increment: this.increment,
				    decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart,
            incrementValue: this.incrementValue,
            decrementValue: this.decrementValue
					}}>	
				{this.props.children}	
			</ProductContext.Provider>
			);
		}
	}
export const ProductConsumer = ProductContext.Consumer;
export default HandleCartContent;

