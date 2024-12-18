/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export const Frame17 = ({ className, text = 'BUTTON' }) => {
	return (
		<div className={`frame-17 ${className}`} onClick={() => {}}>
			<button className='button'>{text}</button>
		</div>
	)
}

Frame17.propTypes = {
	text: PropTypes.string,
}
