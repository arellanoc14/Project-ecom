import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HandleCartContent from './components/shop/handleCartContext';
ReactDOM.render(
<HandleCartContent>
		<App />
</HandleCartContent>, document.getElementById('root'));
