/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React from 'react'
import { useReducer } from 'react'
import './style.css'

export const Frame512899 = ({ property1, className }) => {
	const [state, dispatch] = useReducer(reducer, {
		property1: property1 || 'default',
	})

	return (
		<div
			className={`frame-512899 ${className}`}
			onMouseEnter={() => {
				dispatch('mouse_enter')
			}}
			onMouseLeave={() => {
				dispatch('mouse_leave')
			}}
			onClick={() => {
				dispatch('click')
			}}
		>
			<div
				className={`email property-1-18-${state.property1}`}
				style={{
					transition: '0.2s ease',
				}}
			>
				{['default', 'variant-2'].includes(state.property1) && <>Адрес Email</>}

				{state.property1 === 'variant-5' && <>simonov@mail.ru</>}
			</div>
		</div>
	)
}

function reducer(state, action) {
	if (state.property1 === 'default') {
		switch (action) {
			case 'mouse_enter':
				return {
					property1: 'variant-2',
				}
		}
	}

	if (state.property1 === 'variant-2') {
		switch (action) {
			case 'mouse_leave':
				return {
					property1: 'default',
				}

			case 'click':
				return {
					property1: 'variant-3',
				}
		}
	}

	if (state.property1 === 'variant-3') {
		switch (action) {
			case 'click':
				return {
					property1: 'variant-5',
				}
		}
	}

	if (state.property1 === 'variant-4') {
		switch (action) {
			case 'click':
				return {
					property1: 'variant-5',
				}
		}
	}

	if (state.property1 === 'variant-5') {
		switch (action) {
			case 'click':
				return {
					property1: 'default',
				}
		}
	}

	return state
}

Frame512899.propTypes = {
	property1: PropTypes.oneOf([
		'default',
		'variant-5',
		'variant-2',
		'variant-3',
		'variant-4',
	]),
}
