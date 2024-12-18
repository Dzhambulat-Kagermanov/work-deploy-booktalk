/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import './style.css'

export const Frame512951 = ({ property1, className }) => {
	const props = [
		[
			'Вы можете не только вступать в уже существующие клубы, но так же создавать новые и приглашать друзей',
			0,
			357,
		],
		[
			'Чтобы узнать, что читают ваши друзья, вы сможете подписаться на их профиль и следить за обновлениями',
			1,
			407,
		],
		[
			'Все разделы и подборки, включая личные, регулярно обновляются с				выходом новых книг',
			2,
			367,
		],
		[
			'Ваша личная подборка создается на основе результатов пройденного теста и регулярно обновляется',
			3,
			437,
		],
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
			className={`frame-512951 questions12 property-1-10-${property1} ${className}`}
		>
			<div className='overlap-group-4'>
				<div className='rectangle-4' />

				<div className='div-4'>
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

				<img className='vector-3' alt='Vector' src='img/vector-4.svg' />
			</div>
		</div>
	)
}

Frame512951.propTypes = {
	property1: PropTypes.oneOf([
		'variant-4',
		'variant-2',
		'variant-3',
		'default',
	]),
}
