import React from 'react';
import Pages from './getPages';
import '../css/paginationBar.css';

const SideBar = props => {		 		
 	const{catorgies,valueprops,textprops,pageSize,onItemSelect,
 		 itemsCount,currentPage,handlePageChange,
		 selectedItem} = props;
	 	return(
	 		<div className = "sideBarContainer">
			 	<Pages 
					itemsCount = {itemsCount}
					pageSize= {pageSize}
					currentPage ={currentPage}
					onPageChange = {handlePageChange}/> 
			 	<ul className = "sideBar">
				 	{catorgies.map(catorgy => (
					 	<li 
					 		id = 'catorgy'
						 	onClick = {() => onItemSelect(catorgy)}
						 	key = {catorgy[valueprops]}
						 	className = {catorgy === selectedItem ? 'activeCatorgy': null}>
						 	{
						 		catorgy[textprops]
						 	}
					 	</li>
					))}
			 	</ul>	
	 		</div>
 		)
 	}
SideBar.defaultProps = {
 	valueprops: "id",
 	textprops: "name"
 }
 export default SideBar;