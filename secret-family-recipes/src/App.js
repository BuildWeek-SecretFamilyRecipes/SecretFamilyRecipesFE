import React from 'react'
import { Route } from 'react-router-dom'
// import './App.css'
import HomePage from './components/HomePage/HomePage'
import NewPost from './components/NewPost/NewPost'

function App() {
	return (
		<div className='App'>
			<HomePage />
			<Route exact path='/addrecipe' component={NewPost} />
		</div>
	)
}

export default App