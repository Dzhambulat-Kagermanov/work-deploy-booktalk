/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import './style.css'

export const PropertyDefaultWrapper = ({ property1, className, id }) => {
	const props = [
		['ЧТО ТАКОЕ КНИЖНЫЙ КЛУБ?', 0, 280],
		['КАК СОЗДАЁТСЯ ЛИЧНАЯ ПОДБОРКА?', 1, 350],
		['КАК УЗНАТЬ ЧТО ЧИТАЮТ ДРУЗЬЯ?', 2, 320],
		['КАК ОБНОВЛЯЮТСЯ РАЗДЕЛЫ?', 3, 290],
	]
	const [question, setQuestion] = useState(props[0])

	useEffect(() => {
		const interval = setInterval(() => {
			setQuestion(cur => {
				if (cur[1] + 1 > props.length - 1) {
					return props[0]
				}
				return props[cur[1] + 1]
			})
		}, 2000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div
			className={`property-default-wrapper ${property1} ${className}`}
			id={id}
		>
			<div className='overlap-group'>
				<div
					className='rectangle'
					style={{
						width: question[2],
						transition: '0.2s ease',
					}}
				/>

				<img className='vector' alt='Vector' src='img/vector-2-20.svg' />

				<div
					className='div'
					style={{
						transition: '0.2s ease',
						opacity: question[1] === 0 ? 1 : 0,
					}}
				>
					{props[0][0]}
				</div>
				<div
					className='div'
					style={{
						transition: '0.2s ease',
						opacity: question[1] === 1 ? 1 : 0,
					}}
				>
					{props[1][0]}
				</div>
				<div
					className='div'
					style={{
						transition: '0.2s ease',
						opacity: question[1] === 2 ? 1 : 0,
					}}
				>
					{props[2][0]}
				</div>
				<div
					className='div'
					style={{
						transition: '0.2s ease',
						opacity: question[1] === 3 ? 1 : 0,
					}}
				>
					{props[3][0]}
				</div>
			</div>
		</div>
	)
}

PropertyDefaultWrapper.propTypes = {
	property1: PropTypes.oneOf([
		'variant-4',
		'variant-2',
		'variant-3',
		'default',
	]),
}