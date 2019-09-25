import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
	return (
		<div>
			<ul class='hList'>
				<li>
					<a href='#click' class='menu'>
						<h2 class='menu-title'>animals</h2>
						<ul class='menu-dropdown'>
							<li>
								{localStorage.getItem('token') ? null : (
									<Link
										to='/signup'
										style={{
											textDecoration: 'none',
											color: 'orange'
										}}>
										{/* <h3>Don't have an account? SIGN UP</h3> */}
									</Link>
								)}
							</li>
							<li>dog</li>
							<li>horse</li>
							<li>cow</li>
							<li>pig</li>
						</ul>
					</a>
				</li>
				<li>
					<a href='#click' class='menu'>
						<h2 class='menu-title menu-title_2nd'>names</h2>
						<ul class='menu-dropdown'>
							<li>Kevin</li>
							<li>Jim</li>
							<li>Andy</li>
						</ul>
					</a>
				</li>
				<li>
					<a href='#click' class='menu'>
						<h2 class='menu-title menu-title_3rd'>things</h2>
						<ul class='menu-dropdown'>
							<li>bench</li>
							<li>pizza</li>
							<li>Honda CB125</li>
							<li>space</li>
							<li>black matter</li>
							<li>apple</li>
							<li>philodendron</li>
							<li>liver</li>
							<li>brass</li>
						</ul>
					</a>
				</li>
				<li>
					<a href='#click' class='menu'>
						<h2 class='menu-title menu-title_4th'>Movies</h2>
						<ul class='menu-dropdown'>
							<li>Godzilla</li>
							<li>Man on Wire</li>
							<li>Spirited Away</li>
							<li>Interstellar</li>
						</ul>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Navbar