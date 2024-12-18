/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import './style.css'

export const Frame512948 = ({ property1, className }) => {
	const props = [
		['ЧТО ТАКОЕ КНИЖНЫЙ КЛУБ?', 0, 357],
		['КАК УЗНАТЬ, ЧТО ЧИТАЮТ ДРУЗЬЯ?', 1, 407],
		['КАК ОБНОВЛЯЮТСЯ РАЗДЕЛЫ?', 2, 367],
		['КАК СОЗДАЁТСЯ ЛИЧНАЯ ПОДБОРКА?', 3, 437],
	]
	const [question, setQuestion] = useState(props[1])

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
			className={`frame-512948 questions213 property-1-15-${property1} ${className}`}
		>
			<div className='overlap-group-5'>
				<div
					className='rectangle-5'
					style={{
						transition: '0.1s ease',
						width: question[2],
					}}
				/>

				<img className='vector-4' alt='Vector' src='img/vector-2-4.svg' />

				<div className='div-5'>
					<p
						className='text-wrapper-64'
						style={{
							transition: '0.2s ease',
							opacity: question[1] === 0 ? 1 : 0,
						}}
					>
						{props[0][0]}
					</p>
					<p
						className='text-wrapper-64'
						style={{
							transition: '0.2s ease',
							opacity: question[1] === 1 ? 1 : 0,
						}}
					>
						{props[1][0]}
					</p>
					<p
						className='text-wrapper-64'
						style={{
							transition: '0.2s ease',
							opacity: question[1] === 2 ? 1 : 0,
						}}
					>
						{props[2][0]}
					</p>
					<p
						className='text-wrapper-64'
						style={{
							transition: '0.2s ease',
							opacity: question[1] === 3 ? 1 : 0,
						}}
					>
						{props[3][0]}
					</p>
				</div>
			</div>
		</div>
	)
}

Frame512948.propTypes = {
	property1: PropTypes.oneOf([
		'variant-4',
		'variant-2',
		'variant-3',
		'default',
	]),
}
