import React from 'react'
import { connect } from 'react-redux'
import { search } from '../Actions'
import './SearchBar.css'

class SearchBar extends React.Component {
	render() {
		return (
			<div className='searchbar'>
				<input
					type='search'
					className='searchbar--input'
					placeholder='Search...'
				/>
				<div className='searchbar--buttons'>
					<input
						type='submit'
						className='searchbar--submit'
						value='Search'
					/>
					<div className='select-wrapper'>
						<select className='searchbar--select'>
							<option value='All' disabled selected>
								All Categories
							</option>
							<option value='Women-C'>American</option>
							<option value='Men-C'>Mexiacn</option>
							<option value='Electronics'>Soul Food</option>
							<option value='Music-MP3'>Southern</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	recipes: state.recipes
})

export default connect(
	mapStateToProps,
	{ search }
)(SearchBar)