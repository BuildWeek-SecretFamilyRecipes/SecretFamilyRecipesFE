import React from 'react'
import './Navbar.css'

function Nav() {
	return (
		<div id='nav-container'>
			{/* <img
				src={IMG}
				style={{ width: '200px', float: 'left', clear: 'both' }}
				alt='logo'></img> */}
			<nav>
				<ul id='menu'>
					<li>
						<a>MEMBERS AREA</a>
						<ul>
							<li>
								<a>VIEW RECIPES</a>
							</li>
							<li>
								<a>DELETE RECIPES</a>
							</li>
							<li>
								<a>EDIT RECIPES</a>
							</li>
							<li>
								<a>CREATE RECIPES</a>
							</li>
						</ul>
					</li>
					<li>
						<a>About Us</a>
					</li>
					<li>
						<a>Contact Us</a>
					</li>
					<li>
						<a>RECIPES</a>
						<ul>
							<li>
								<a>VIEW RECIPES</a>
							</li>
							<li>
								<a>DELETE RECIPES</a>
							</li>
							<li>
								<a>EDIT RECIPES</a>
							</li>
						</ul>
					</li>
					<div id='lavalamp'></div>
				</ul>
			</nav>
		</div>
	)
}

export default Nav