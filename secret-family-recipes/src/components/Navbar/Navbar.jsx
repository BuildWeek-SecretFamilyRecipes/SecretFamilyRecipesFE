import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
	return (
		<header class='page-header'>
			<input id='menu-toggle-input' type='checkbox' />
			<label class='menu-toggle' for='menu-toggle-input'>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</label>
			<nav className='menu'>
				<ol>
					<li className='menu-item'>
						<a href='/'>HOME</a>
					</li>
					<li className='menu-item'>
						<a href='/'>ABOUT</a>
					</li>
					<li className='menu-item'>
						<a href='/'>RECIPES</a>
						<ol className='sub-menu'>
							<li className='menu-item'>
								<a href='/'>VIEW RECIPES</a>
							</li>
							<li className='menu-item'>
								<a href='/'>EDIT RECIPES</a>
							</li>
							<Link to={`/addrecipe`} className='nav-link'>
								<li>ADD A RECIPE</li>
							</Link>
						</ol>
					</li>
					<li className='menu-item'>
						<a href='/'>MEMBERS ENTRANCE</a>
						<ol className='sub-menu'>
							<li className='menu-item'>
								<a href='/'>SIGN IN</a>
							</li>
							<li className='menu-item'>
								<a href='/'>SIGN UP</a>
							</li>
							<li className='menu-item'>
								<a href='/'>SIGN OUT</a>
							</li>
						</ol>
					</li>
					<li className='menu-item'>
						<a href='/'>CONTACT</a>
					</li>
				</ol>
			</nav>
		</header>
	)
}

export default Navbar