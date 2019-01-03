import React from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';

export default props => {
	return (
		<div id='out-container'>
            		<Menu pageWrapId={ 'page-wrap' } outerContainerId={ 'outer-container' } >
				<a className="menu-item" href="/">
          Home
				</a>
  
				<a className="menu-item" href="/laravel">
          Laravel
				</a>
  
				<a className="menu-item" href="/angular">
          Angular
				</a>
  
				<a className="menu-item" href="/react">
          React
				</a>
  
				<a className="menu-item" href="/vue">
          Vue
				</a>
  
				<a className="menu-item" href="/node">
          Node
				</a>
			</Menu>
		</div>
	);
};