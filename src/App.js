import React from 'react';
import SideBar from './Sidebar';
import CommentBox from './CommentBox';

import './styles/App.css';

export default function App() {
	return (
		<div id="App">
			<div id='outer-container'>
				<SideBar pageWrapId={ 'page-wrap' } outerContainerId={ 'outer-container' } />
				<main id='page-wrap'>
					<h1>AppDividend</h1>
					<h2>Check out our tutorials the side menubar</h2>
					<CommentBox />
					<div>Test</div>
				</main>
			</div>
		</div>
	);
}