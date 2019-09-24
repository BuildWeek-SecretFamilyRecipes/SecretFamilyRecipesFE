import React from 'react'
import Navbar from './../Navbar/Navbar'

function NewPost() {
	return (
		<div>
			<Navbar />
			<main className='body'>
				<header>
					<h1>New Recipe</h1>
					<div className='line' />
				</header>

				<form>
					<div className='form-section'>
						<label htmlFor='recipe-name'>Recipe Name:</label>
						<input
							type='text'
							className='textbox'
							name='recipe-name'
							placeholder='Cornish Game Hen with Tarragon'
							required
						/>
					</div>
					<div className='form-section'>
						<label htmlFor='img-url'>500 x 500 Image URL:</label>
						<input
							type='text'
							className='textbox'
							name='img-url'
							placeholder='http://imgur.com'
							required
						/>
					</div>
					<div className='form-section'>
						<label htmlFor='recipe-ingredients'>
							Recipe Ingredients:{' '}
						</label>
						<textarea
							name='recipe-ingredients'
							className='textbox'
							rows='10'
							required
						/>
					</div>
					<div className='form-section'>
						<label htmlFor='recipe-instructions'>
							Recipe Instructions:{' '}
						</label>
						<textarea
							name='recipe-instructions'
							className='textbox'
							rows='15'
							required
						/>
					</div>
					<div className='form-section'>
						<label htmlFor='recipe-notes'>Recipe Notes: </label>
						<textarea name='recipe-notes' rows='5' required />
					</div>
					<div className='form-section'>
						<p>Recipe Time:</p>

						<input
							type='radio'
							name='recipe-time'
							value='slow'
							className='recipe-time-radio'
						/>
						<label htmlFor='recipe-time'>
							Takes under 30 minutes.
						</label>
						<br />

						<input
							type='radio'
							name='recipe-time'
							value='slow'
							className='recipe-time-radio'
						/>
						<label htmlFor='recipe-time'>
							Takes between 30 minutes and 1 hour
						</label>
						<br />

						<input
							type='radio'
							name='recipe-time'
							value='slow'
							className='recipe-time-radio'
						/>
						<label htmlFor='recipe-time'>Takes over 2 hours.</label>
						<br />

						<div className='button'>
							<button className='new-button' type='submit'>
								Save and Post
							</button>
						</div>
					</div>
				</form>
			</main>
		</div>
	)
}

export default NewPost