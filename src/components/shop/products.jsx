import React,{Component} from 'react';
import Data, {getCatogory}  from '../data/data';
import '../css/shop.css';
import SideBar from './paginationBar';
import {paginate} from './pagination';
import Items from './getItems';
class Products extends Component{
	state = {
		products:  [],
		catogories: [],
		currentPage: 1,
	   	pageSize: 8
	}
	componentDidMount(){
	  	let listProducts = Data.products;
	  	const catogories = [
	 	 	{name: 'Products' }, 
	 	 	...getCatogory()
	  	]; 	
	  	this.setState({
	  		catogories, 
	  		products: listProducts,
	  	});
	};
	handlePageChange = page => {
	  	this.setState({
	  		currentPage: page	  
	  	});
	};
	handleCatorgies = selected =>{
		this.setState({
	  		selectedCatorgy: selected, 
	  		currentPage: 1
	  	});
	};	 
	render(){
		const {currentPage,catogories,pageSize,products,selectedCatorgy} = this.state;
		const filterProducts = selectedCatorgy && selectedCatorgy.id
		 ? products.filter(value => value.catogory.id === selectedCatorgy.id) : products;
		const display = paginate(filterProducts, currentPage, pageSize);	
		return(
		<div className = 'shopContainer'>
			<SideBar 
				itemsCount = {filterProducts.length}
				catorgies = {catogories}
				pageSize= {pageSize}
				currentPage = {currentPage}
				handlePageChange = {this.handlePageChange}
				selectedItem = {selectedCatorgy}
				onItemSelect = {this.handleCatorgies} />
			<div className = 'grid'>
				{display.map(items => (
					<Items   
			           	key = {items.id} 
			           	property = {items}/>
			    ))}
			</div>
		</div>
		)
	}
}
export default Products;