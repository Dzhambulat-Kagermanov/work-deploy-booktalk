/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React from 'react'
import './style.css'

export const Frame512901 = ({
	className,
	text = 'Наша платформа объединяет читателей разных возрастов и предпочтений, предлагая множество различных подборок по жанрам и настроению',
	text1 = 'ПОДБОРКИ',
	id,
}) => {
	return (
		<div className={`frame-512901 ${className}`} id={id}>
			<p className='text-wrapper-6'>{text}</p>

			<div className='text-wrapper-7'>{text1}</div>

			<div className='frame-2'>
				<div className='text-wrapper-8'>ВОЗМОЖНОСТИ</div>
			</div>
		</div>
	)
}

Frame512901.propTypes = {
	text: PropTypes.string,
	text1: PropTypes.string,
}
