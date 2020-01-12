import React from 'react';
import _ from "lodash";
const Pages = props =>{
	const {itemCount, pageSize,onPageChange,currentPage} = props;
	const pagesCount = Math.ceil(itemCount / pageSize);
	const pages = _.range(4, pagesCount + 1)
	return(
			<ul className = "pageNumber">
				{pages.map(page => (		
					<li key = {page} 
						id = 'page'
						className =  {currentPage === page ? 'activePage' : null}
						onClick = {() => onPageChange(page)}>
						{page}
					</li>
				))}
			</ul>
	)
};
export default Pages;