/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React from 'react'
import { useReducer } from 'react'
import { DivWrapper } from '../DivWrapper'
import './style.css'

export const Component836 = ({ property1, className }) => {
	const [state, dispatch] = useReducer(reducer, {
		property1: property1 || 'default',
	})

	return (
		<div
			className={`component-836 ${className}`}
			onMouseLeave={() => {
				dispatch('mouse_leave')
			}}
			onMouseEnter={() => {
				dispatch('mouse_enter')
			}}
		>
			<DivWrapper
				href={'#POSSIBILITIES'}
				className='component-835'
				divClassName={`${state.property1 === 'variant-2' && 'class'}`}
			/>
		</div>
	)
}

function reducer(state, action) {
	switch (action) {
		case 'mouse_enter':
			return {
				...state,
				property1: 'variant-2',
			}

		case 'mouse_leave':
			return {
				...state,
				property1: 'default',
			}
	}

	return state
}

Component836.propTypes = {
	property1: PropTypes.oneOf(['variant-2', 'default']),
}
