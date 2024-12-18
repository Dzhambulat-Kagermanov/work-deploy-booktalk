import React, { useEffect, useState } from 'react'
import { useWindowWidth } from '../../breakpoints'
import { Component } from '../../components/Component'
import { Component836 } from '../../components/Component836'
import { Component838 } from '../../components/Component838'
import { Component840 } from '../../components/Component840'
import { Frame } from '../../components/Frame'
import { Frame17 } from '../../components/Frame17'
import { Frame512899 } from '../../components/Frame512899'
import { Frame512901 } from '../../components/Frame512901'
import { Frame512945 } from '../../components/Frame512945'
import { Frame512946 } from '../../components/Frame512946'
import { Frame512947 } from '../../components/Frame512947'
import { Frame512948 } from '../../components/Frame512948'
import { Frame512951 } from '../../components/Frame512951'
import { Frame512967 } from '../../components/Frame512967'
import { Frame512994 } from '../../components/Frame512994'
import { PropertyDefaultWrapper } from '../../components/PropertyDefaultWrapper'
import './style.css'
import { Link } from 'react-router-dom'

export const Screen = () => {
	const screenWidth = useWindowWidth()

	const props = [
		['ЧТО ТАКОЕ КНИЖНЫЙ КЛУБ?', 0, 337],
		['КАК УЗНАТЬ, ЧТО ЧИТАЮТ ДРУЗЬЯ?', 1, 377],
		['КАК ОБНОВЛЯЮТСЯ РАЗДЕЛЫ?', 2, 337],
		['КАК СОЗДАЁТСЯ ЛИЧНАЯ ПОДБОРКА?', 3, 400],
	]
	const responses = [
		[
			'Вы можете не только вступать в уже существующие клубы, но так же создавать новые и приглашать друзей',
			0,
			436,
		],
		[
			'Чтобы узнать, что читают ваши друзья, вы сможете подписаться на их профиль и следить за обновлениями',
			1,
			436,
		],
		[
			'Все разделы и подборки, включая личные, регулярно обновляются с выходом новых книг',
			2,
			436,
		],
		[
			'Ваша личная подборка создается на основе результатов пройденного теста и регулярно обновляется',
			3,
			446,
		],
	]
	const [response, setResponse] = useState(responses[0])
	const [topQuestion, setTopQuestion] = useState(props[0])
	const [nextQuestion, setNextQuestion] = useState(props[1])

	useEffect(() => {
		const interval = setInterval(() => {
			setTopQuestion(cur => {
				if (cur[1] + 1 > props.length - 1) {
					return props[0]
				}
				return props[cur[1] + 1]
			})
			setResponse(cur => {
				if (cur[1] + 1 > responses.length - 1) {
					return responses[0]
				}
				return responses[cur[1] + 1]
			})
			setNextQuestion(cur => {
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
			className='screen'
			style={{
				backgroundColor:
					(screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834
						? '#eeedf2'
						: screenWidth >= 1440
						? '#edecf1'
						: undefined,
			}}
		>
			<div
				className='iphone'
				style={{
					backgroundColor:
						(screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834
							? '#eeedf2'
							: screenWidth >= 1440
							? 'var(--collection-1-color-background)'
							: undefined,
					height:
						screenWidth < 834
							? '3616px'
							: screenWidth >= 834 && screenWidth < 1440
							? '2016px'
							: screenWidth >= 1440
							? '2873px'
							: undefined,
					overflow: screenWidth < 834 ? 'hidden' : undefined,
					width:
						screenWidth < 834
							? '393px'
							: screenWidth >= 834 && screenWidth < 1440
							? '834px'
							: screenWidth >= 1440
							? '1440px'
							: undefined,
				}}
			>
				{screenWidth < 834 && (
					<>
						<div className='frame-3'>
							<div className='frame-4'>
								<a href='#POSSIBILITIES' className='text-wrapper-9'>
									ВОЗМОЖНОСТИ
								</a>

								<a href='#QUESTIONS' className='text-wrapper-9'>
									ВОПРОСЫ
								</a>

								<a href='#COMMUNITY' className='text-wrapper-9'>
									СООБЩЕСТВО
								</a>
							</div>
						</div>

						<Frame className='frame-15' />
					</>
				)}

				{(screenWidth >= 1440 || screenWidth < 834) && (
					<div
						className={`frame-5 ${screenWidth <= 834 && 'tenzerclow'}`}
						id={screenWidth <= 834 && 'POSSIBILITIES'}
						style={{
							backgroundColor:
								screenWidth < 834
									? 'var(--collection-1-color-main-3)'
									: screenWidth >= 1440
									? '#000000'
									: undefined,
							borderRadius:
								screenWidth < 834
									? '20px'
									: screenWidth >= 1440
									? '50px'
									: undefined,
							height:
								screenWidth < 834
									? '267px'
									: screenWidth >= 1440
									? '76px'
									: undefined,
							left:
								screenWidth < 834
									? '12px'
									: screenWidth >= 1440
									? '17px'
									: undefined,
							top:
								screenWidth < 834
									? '1148px'
									: screenWidth >= 1440
									? '16px'
									: undefined,
							width:
								screenWidth < 834
									? '368px'
									: screenWidth >= 1440
									? '1406px'
									: undefined,
						}}
					>
						{screenWidth < 834 && (
							<>
								<p className='text-wrapper-10'>
									Наша платформа объединяет читателей разных возрастов и
									предпочтений, предлагая множество различных подборок по жанрам
									и настроению
								</p>

								<div className='text-wrapper-11'>ПОДБОРКИ</div>

								<div className='frame-6'>
									<div className='text-wrapper-12'>ВОЗМОЖНОСТИ</div>
								</div>
							</>
						)}

						{screenWidth >= 1440 && (
							<>
								<div className='frame-17-wrapper'>
									<Frame17
										className='frame-17-instance'
										text='ВСТУПИТЬ В КЛУБ'
									/>
								</div>

								<img
									className='frame-7'
									alt='Frame'
									src='img/frame-512956.svg'
								/>

								<div className='frame-8'>
									<Component836 className='view' property1='default' />
									<Component838
										className='component-838-instance'
										property1='default'
									/>
									<Component840
										className='component-840-instance'
										property1='default'
									/>
								</div>
							</>
						)}
					</div>
				)}

				{screenWidth >= 1440 && (
					<div className='overlap'>
						<div className='overlap-group-wrapper'>
							<div className='overlap-group-8'>
								<div className='rectangle-7' />

								<div className='text-wrapper-13'>ООО «BOOKTALK NN»</div>
							</div>
						</div>

						<div className='frame-9'>
							<div className='text-wrapper-14'>Политика конфиденциальности</div>

							<div className='text-wrapper-15'>2024 г.</div>
						</div>
					</div>
				)}

				{(screenWidth >= 1440 || screenWidth < 834) && (
					<div
						className='frame-10'
						id={screenWidth >= 834 && 'COMMUNITY'}
						style={{
							height:
								screenWidth < 834
									? '267px'
									: screenWidth >= 1440
									? '388px'
									: undefined,
							left:
								screenWidth < 834
									? '12px'
									: screenWidth >= 1440
									? '17px'
									: undefined,
							top:
								screenWidth < 834
									? '1744px'
									: screenWidth >= 1440
									? '1975px'
									: undefined,
							width:
								screenWidth < 834
									? '368px'
									: screenWidth >= 1440
									? '695px'
									: undefined,
						}}
					>
						{screenWidth < 834 && (
							<>
								<p className='text-wrapper-16'>
									Благодаря тесту вы так же можете получить индивидуальную
									подборку, которая будет обновляться с выходом новых книг и
									рецензий
								</p>

								<div className='text-wrapper-17'>ТЕСТ</div>
							</>
						)}

						<div
							className='frame-11'
							style={{
								height:
									screenWidth >= 1440
										? '30px'
										: screenWidth < 834
										? '23px'
										: undefined,
								left:
									screenWidth >= 1440
										? '32px'
										: screenWidth < 834
										? '20px'
										: undefined,
								top:
									screenWidth >= 1440
										? '32px'
										: screenWidth < 834
										? '20px'
										: undefined,
								width:
									screenWidth >= 1440
										? '139px'
										: screenWidth < 834
										? '115px'
										: undefined,
							}}
						>
							<div
								className='div-7'
								style={{
									fontFamily:
										screenWidth >= 1440
											? 'var(--BUTTONS-font-family)'
											: screenWidth < 834
											? 'var(--BUTTONS-i-font-family)'
											: undefined,
									fontSize:
										screenWidth >= 1440
											? 'var(--BUTTONS-font-size)'
											: screenWidth < 834
											? 'var(--BUTTONS-i-font-size)'
											: undefined,
									fontStyle:
										screenWidth >= 1440
											? 'var(--BUTTONS-font-style)'
											: screenWidth < 834
											? 'var(--BUTTONS-i-font-style)'
											: undefined,
									fontWeight:
										screenWidth >= 1440
											? 'var(--BUTTONS-font-weight)'
											: screenWidth < 834
											? 'var(--BUTTONS-i-font-weight)'
											: undefined,
									letterSpacing:
										screenWidth >= 1440
											? 'var(--BUTTONS-letter-spacing)'
											: screenWidth < 834
											? 'var(--BUTTONS-i-letter-spacing)'
											: undefined,
									lineHeight:
										screenWidth >= 1440
											? 'var(--BUTTONS-line-height)'
											: screenWidth < 834
											? 'var(--BUTTONS-i-line-height)'
											: undefined,
									marginBottom:
										screenWidth >= 1440
											? '-8.50px'
											: screenWidth < 834
											? '-9.50px'
											: undefined,
									marginLeft:
										screenWidth >= 1440
											? '-48.00px'
											: screenWidth < 834
											? '-52.00px'
											: undefined,
									marginRight:
										screenWidth >= 1440
											? '-48.00px'
											: screenWidth < 834
											? '-52.00px'
											: undefined,
									marginTop:
										screenWidth >= 1440
											? '-10.50px'
											: screenWidth < 834
											? '-11.50px'
											: undefined,
								}}
							>
								{screenWidth >= 1440 && <>СООБЩЕСТВО</>}

								{screenWidth < 834 && <>ВОЗМОЖНОСТИ</>}
							</div>
						</div>

						{screenWidth >= 1440 && (
							<div className='frame-12'>
								<p className='telegram'>
									Книжный telegram канал с регулярными обновлениями новинок книг
									и рецензий. Подписывайтесь, чтобы быть <br />в курсе всех
									книжных событий
								</p>

								<div className='text-wrapper-18'>НАШЕ СООБЩЕСТВО</div>

								<div className='frame-instance-wrapper'>
									<Frame17 className='instance-node' text='@BTALKCOM' />
								</div>
							</div>
						)}
					</div>
				)}

				{screenWidth >= 1440 && (
					<>
						<Frame512951
							className='frame-512951-instance'
							property1='default'
						/>
						<Frame512948
							className='frame-512948-instance'
							property1='default'
						/>
						<div className='frame-13'>
							<div className='frame-14'>
								<div className='text-wrapper-19'>РАССЫЛКА</div>
							</div>

							<div className='frame-16'>
								<p className='text-wrapper-20'>
									Подпишитесь на рассылку и узнайте первыми <br />о запуске
									платформы
								</p>

								<div className='text-wrapper-21'>СОВСЕМ СКОРО ЗАПУСК!</div>

								<div className='frame-18'>
									<Frame17 className='instance-node' text='ПОДПИСАТЬСЯ' />
								</div>

								<Frame512899
									className='frame-512899-instance'
									property1='default'
								/>
							</div>
						</div>
					</>
				)}

				{(screenWidth >= 1440 ||
					(screenWidth >= 834 && screenWidth < 1440)) && (
					<div
						className='overlap-2'
						style={{
							height:
								screenWidth >= 834 && screenWidth < 1440
									? '298px'
									: screenWidth >= 1440
									? '518px'
									: undefined,
							left:
								screenWidth >= 834 && screenWidth < 1440
									? '12px'
									: screenWidth >= 1440
									? '17px'
									: undefined,
							top:
								screenWidth >= 834 && screenWidth < 1440
									? '85px'
									: screenWidth >= 1440
									? '108px'
									: undefined,
							width:
								screenWidth >= 834 && screenWidth < 1440
									? '810px'
									: screenWidth >= 1440
									? '1406px'
									: undefined,
						}}
					>
						<div
							className='overlap-wrapper'
							style={{
								height:
									screenWidth >= 1440
										? '518px'
										: screenWidth >= 834 && screenWidth < 1440
										? '298px'
										: undefined,
								width:
									screenWidth >= 1440
										? '1406px'
										: screenWidth >= 834 && screenWidth < 1440
										? '810px'
										: undefined,
							}}
						>
							<div
								className='overlap-15'
								style={{
									height:
										screenWidth >= 1440
											? '518px'
											: screenWidth >= 834 && screenWidth < 1440
											? '298px'
											: undefined,
									position: screenWidth >= 1440 ? 'relative' : undefined,
								}}
							>
								{screenWidth >= 1440 && (
									<>
										<div className='rectangle-8' />

										<div className='text-wrapper-22'>
											НЕ ЗНАЕТЕ, ЧТО ПРОЧИТАТЬ?
										</div>

										<p className='text-wrapper-23'>
											Поможем вам найти новые книги, которые вы захотите
											прочитать и обсудить с друзьями
										</p>
										<Link to={'/stub'}>
											<Frame17 className='frame-19' text='ПРИСОЕДИНИТЬСЯ' />
										</Link>

										<img
											className='mask-group'
											alt='Mask group'
											src='img/mask-group-2.png'
										/>
									</>
								)}

								{screenWidth >= 834 && screenWidth < 1440 && (
									<div className='overlap-group-9'>
										<div className='rectangle-9' />

										<div className='group' />
									</div>
								)}
							</div>
						</div>

						{screenWidth >= 834 && screenWidth < 1440 && (
							<>
								<Link to={'/stub'}>
									<Frame className='frame-15-instance' text='ПРИСОЕДИНИТЬСЯ' />
								</Link>
								<div className='frame-20'>
									<p className='text-wrapper-24'>
										НЕ ЗНАЕТЕ, КАКУЮ КНИГУ ВЫБРАТЬ?
									</p>
								</div>

								<p className='div-8'>
									<span className='span'>Поможем вам найти </span>

									<span className='text-wrapper-25'>новые книги</span>

									<span className='span'>
										, которые вы захотите прочитать и{' '}
									</span>

									<span className='text-wrapper-25'>обсудить</span>

									<span className='span'> с друзьями</span>
								</p>
							</>
						)}

						{screenWidth >= 1440 && (
							<div className='mask-group'>
								<div className='overlap-3'>
									<div className='rectangle-8' />

									<img
										className='mask-group'
										alt='Mask group'
										src='img/mask-group-2.png'
									/>

									<div className='frame-21'>
										<p className='text-wrapper-26'>
											НЕ ЗНАЕТЕ, КАКУЮ КНИГУ ВЫБРАТЬ?
										</p>
									</div>

									<p className='text-wrapper-27'>
										Поможем вам найти новые книги, которые вы <br />
										захотите прочитать и обсудить с друзьями
									</p>

									<div className='frame-22'>
										<Link to={'/stub'}>
											<Frame17
												className='instance-node'
												text='ПРИСОЕДИНИТЬСЯ'
											/>
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>
				)}

				{screenWidth >= 1440 && (
					<>
						<Frame512945
							className='frame-512945-instance'
							frameWrapperText={
								<>
									Доступ к любительским <br />и экспертным обзорам на книги
								</>
							}
							property1='default'
						/>
						<div className='frame-23'>
							<div className='overlap-4'>
								<div className='rectangle-10' />

								<img
									className='element-2'
									alt='Element'
									src='img/2024-12-13-10-48-15-1.png'
								/>

								<p className='text-wrapper-28'>
									Предлагаем вам обратить внимание на наши фавориты новогодней
									подборки💔
									<br />
									Уверены, останетесь <br />в восторге! Приятного прочтения☺
								</p>

								<img
									className='vector-6'
									alt='Vector'
									src='img/vector-2-9.svg'
								/>
							</div>
						</div>

						<div className='frame-24'>
							<div className='overlap-4'>
								<div className='rectangle-10' />

								<p className='text-wrapper-28'>
									Нашумевшая книга… <br />
									за короткий срок собрало множество наград. Кажется, если
									встанет вопрос о том, что стоит экранизировать, уже есть
									ответ…🐉🖤
								</p>

								<img
									className='element-3'
									alt='Element'
									src='img/2024-12-13-13-12-50-1.png'
								/>

								<img
									className='vector-7'
									alt='Vector'
									src='img/vector-2-9.svg'
								/>
							</div>
						</div>
					</>
				)}

				{(screenWidth >= 1440 || screenWidth < 834) && (
					<div
						className='frame-25'
						style={{
							height:
								screenWidth >= 1440
									? '324px'
									: screenWidth < 834
									? '305px'
									: undefined,
							left:
								screenWidth >= 1440
									? '727px'
									: screenWidth < 834
									? '12px'
									: undefined,
							top:
								screenWidth >= 1440
									? '971px'
									: screenWidth < 834
									? '1427px'
									: undefined,
							width:
								screenWidth >= 1440
									? '712px'
									: screenWidth < 834
									? '651px'
									: undefined,
						}}
					>
						<div
							className='frame-26'
							style={{
								height:
									screenWidth >= 1440
										? '324px'
										: screenWidth < 834
										? '305px'
										: undefined,
								left:
									screenWidth >= 1440
										? '291px'
										: screenWidth < 834
										? '273px'
										: undefined,
								top:
									screenWidth >= 1440
										? '0'
										: screenWidth < 834
										? '1px'
										: undefined,
								width:
									screenWidth >= 1440
										? '276px'
										: screenWidth < 834
										? '260px'
										: undefined,
							}}
						>
							<img
								className='polygon'
								style={{
									height:
										screenWidth < 834
											? '223px'
											: screenWidth >= 1440
											? '209px'
											: undefined,
									left:
										screenWidth < 834
											? '48px'
											: screenWidth >= 1440
											? '77px'
											: undefined,
									top:
										screenWidth < 834
											? '119px'
											: screenWidth >= 1440
											? '149px'
											: undefined,
									width:
										screenWidth < 834
											? '212px'
											: screenWidth >= 1440
											? '199px'
											: undefined,
								}}
								alt='Polygon'
								src={
									screenWidth < 834
										? 'img/polygon-1-1.svg'
										: screenWidth >= 1440
										? 'img/polygon-1.svg'
										: undefined
								}
							/>

							{screenWidth >= 1440 && (
								<div className='frame-27'>
									<div className='text-wrapper-29'>ДЕТЕКТИВЫ</div>

									<p className='text-wrapper-30'>
										Разгадывайте тайны <br />и сложные загадки
									</p>
								</div>
							)}

							{screenWidth < 834 && (
								<>
									<div className='text-wrapper-31'>ДЕТЕКТИВЫ</div>

									<p className='text-wrapper-32'>
										Разгадывайте тайны <br />и сложные загадки
									</p>
								</>
							)}
						</div>

						<div
							className='frame-28'
							style={{
								backgroundImage:
									screenWidth >= 1440
										? 'url(img/mask-group.png)'
										: screenWidth < 834
										? 'url(img/mask-group-4.png)'
										: undefined,
								height:
									screenWidth >= 1440
										? '324px'
										: screenWidth < 834
										? '305px'
										: undefined,
								width:
									screenWidth >= 1440
										? '275px'
										: screenWidth < 834
										? '260px'
										: undefined,
							}}
						>
							{screenWidth >= 1440 && (
								<div className='frame-29'>
									<div className='text-wrapper-29'>УЖАСЫ</div>

									<div className='text-wrapper-33'>
										Проникнитесь
										<br />
										жуткой атмосферой
									</div>
								</div>
							)}

							{screenWidth < 834 && (
								<>
									<div className='text-wrapper-34'>УЖАСЫ</div>

									<div className='text-wrapper-35'>
										Проникнитесь
										<br />
										жуткой атмосферой
									</div>
								</>
							)}
						</div>

						<div
							className='frame-30'
							style={{
								backgroundColor:
									screenWidth < 834
										? 'var(--collection-1-color-main-3)'
										: undefined,
								borderRadius: screenWidth < 834 ? '20px' : undefined,
								height:
									screenWidth >= 1440
										? '324px'
										: screenWidth < 834
										? '305px'
										: undefined,
								left:
									screenWidth >= 1440
										? '583px'
										: screenWidth < 834
										? '544px'
										: undefined,
								width:
									screenWidth >= 1440
										? '133px'
										: screenWidth < 834
										? '260px'
										: undefined,
							}}
						>
							<div
								className='overlap-group-10'
								style={{
									backgroundColor:
										screenWidth >= 1440
											? 'var(--collection-1-color-main-3)'
											: undefined,
									backgroundImage:
										screenWidth >= 1440
											? 'url(img/mask-group-1.png)'
											: screenWidth < 834
											? 'url(img/mask-group-5.png)'
											: undefined,
									borderRadius: screenWidth >= 1440 ? '20px' : undefined,
									height:
										screenWidth >= 1440
											? '324px'
											: screenWidth < 834
											? '305px'
											: undefined,
									position: screenWidth < 834 ? 'relative' : undefined,
									width:
										screenWidth >= 1440
											? '275px'
											: screenWidth < 834
											? '261px'
											: undefined,
								}}
							>
								{screenWidth >= 1440 && (
									<div className='frame-31'>
										<div className='text-wrapper-29'>ФЭНТЕЗИ</div>

										<div className='text-wrapper-36'>
											Погрузитесь в мир приключений
										</div>
									</div>
								)}

								{screenWidth < 834 && (
									<>
										<div className='text-wrapper-31'>ФЭНТЕЗИ</div>

										<div className='text-wrapper-32'>
											Погрузитесь в мир <br />
											приключений
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				)}

				{screenWidth >= 1440 && (
					<>
						<div className='frame-32'>
							<div className='group-wrapper'>
								<img className='group-2' alt='Group' src='img/group.png' />
							</div>
						</div>

						<img className='frame-33' alt='Frame' src='img/frame-512961.png' />

						<Frame512901
							className='frame-512901-instance'
							id={'POSSIBILITIES'}
						/>
						<Frame512901
							className='frame-34'
							text={
								<>
									Благодаря тесту вы так же можете получить индивидуальную
									подборку, которая будет <br />
									обновляться с выходом новых книг и рецензий
								</>
							}
							text1='ТЕСТ'
						/>
						<Frame512967
							className='frame-512967-instance'
							property1='default'
						/>
						<Frame512946
							className='frame-512946-instance'
							frameWrapperText={
								<>
									Персонализированные подборки <br />и рекомендации книг
								</>
							}
							property1='default'
						/>
						<Frame512947
							className='frame-512947-instance'
							property1='default'
						/>
					</>
				)}

				{screenWidth < 834 && (
					<div className='overlap-5'>
						<div className='frame-35'>
							<div className='overlap-6'>
								<div className='rectangle-11' />

								<Frame className='frame-36' text='ПРИСОЕДИНИТЬСЯ' />
								<div className='text-wrapper-37'>
									НЕ ЗНАЕТЕ, <br />
									ЧТО ПРОЧИТАТЬ?
								</div>

								<p className='div-9'>
									<span className='span'>Поможем вам найти </span>

									<span className='text-wrapper-25'>новые книги</span>

									<span className='span'>
										, <br />
										которые вы захотите прочитать <br />и{' '}
									</span>

									<span className='text-wrapper-25'>обсудить</span>

									<span className='span'> с друзьями</span>
								</p>
							</div>
						</div>

						<div className='frame-35'>
							<div className='overlap-7'>
								<Link to={'/stub'}>
									<Frame className='frame-37' text='ПРИСОЕДИНИТЬСЯ' />
								</Link>
								<div className='overlap-group-11'>
									<div className='frame-38'>
										<div className='frame-39'>
											<p className='text-wrapper-38'>
												НЕ ЗНАЕТЕ, КАКУЮ <br />
												КНИГУ ВЫБРАТЬ?
											</p>
										</div>
									</div>

									<p className='div-10'>
										<span className='span'>Поможем вам найти </span>

										<span className='text-wrapper-25'>новые книги</span>

										<span className='span'>
											, <br />
											которые вы захотите прочитать <br />и{' '}
										</span>

										<span className='text-wrapper-25'>обсудить</span>

										<span className='span'> с друзьями</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{((screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834) && (
					<>
						<div
							className='frame-40'
							style={{
								backgroundColor:
									screenWidth >= 834 && screenWidth < 1440
										? '#000000'
										: screenWidth < 834
										? '#ffffff'
										: undefined,
								borderRadius:
									screenWidth >= 834 && screenWidth < 1440
										? '100px'
										: screenWidth < 834
										? '20px'
										: undefined,
								height:
									screenWidth >= 834 && screenWidth < 1440
										? '59px'
										: screenWidth < 834
										? '300px'
										: undefined,
								top:
									screenWidth >= 834 && screenWidth < 1440
										? '12px'
										: screenWidth < 834
										? '2023px'
										: undefined,
								width:
									screenWidth >= 834 && screenWidth < 1440
										? '810px'
										: screenWidth < 834
										? '369px'
										: undefined,
							}}
						>
							{screenWidth >= 834 && screenWidth < 1440 && (
								<Frame
									className='frame-42'
									divClassName='frame-41'
									text='ВСТУПИТЬ В КЛУБ'
								/>
							)}

							<img
								className='frame-43'
								style={{
									height:
										screenWidth >= 834 && screenWidth < 1440
											? '35px'
											: screenWidth < 834
											? '217px'
											: undefined,
									left:
										screenWidth >= 834 && screenWidth < 1440
											? '12px'
											: screenWidth < 834
											? '69px'
											: undefined,
									top:
										screenWidth >= 834 && screenWidth < 1440
											? '12px'
											: screenWidth < 834
											? '42px'
											: undefined,
									width:
										screenWidth >= 834 && screenWidth < 1440
											? '171px'
											: screenWidth < 834
											? '231px'
											: undefined,
								}}
								alt='Frame'
								src={
									screenWidth >= 834 && screenWidth < 1440
										? 'img/frame-512972.svg'
										: screenWidth < 834
										? 'img/group-1.png'
										: undefined
								}
							/>

							{screenWidth >= 834 && screenWidth < 1440 && (
								<div className='frame-44'>
									<a href='#POSSIBILITIES' className='text-wrapper-9'>
										ВОЗМОЖНОСТИ
									</a>

									<a href='#QUESTIONS' className='text-wrapper-9'>
										ВОПРОСЫ
									</a>

									<a href='#COMMUNITY' className='text-wrapper-9'>
										СООБЩЕСТВО
									</a>
								</div>
							)}
						</div>

						<div
							className={`frame-45 ${screenWidth < 834 && 'frame2321'}`}
							id={!(screenWidth <= 1440 && screenWidth > 834) && 'COMMUNITY'}
							style={{
								height:
									screenWidth < 834
										? '317px'
										: screenWidth >= 834 && screenWidth < 1440
										? '203px'
										: undefined,
								top:
									screenWidth < 834
										? '2596px'
										: screenWidth >= 834 && screenWidth < 1440
										? '395px'
										: undefined,
								width:
									screenWidth < 834
										? '368px'
										: screenWidth >= 834 && screenWidth < 1440
										? '262px'
										: undefined,
							}}
						>
							{screenWidth < 834 && (
								<>
									<p className='text-wrapper-10'>
										Книжный telegram канал с регулярными обновлениями новинок
										книг и рецензий. Подписывайтесь, чтобы быть в курсе всех
										книжных событий
									</p>

									<div className='text-wrapper-39'>НАШЕ СООБЩЕСТВО</div>

									<div className='frame-46'>
										<div className='text-wrapper-40'>СООБЩЕСТВО</div>
									</div>

									<Frame className='frame-47' text='@BTALK.COM' />
								</>
							)}

							{screenWidth >= 834 && screenWidth < 1440 && (
								<>
									<div className='text-wrapper-41'>50+</div>

									<div className='text-wrapper-42'>КЛУБОВ</div>

									<p className='text-wrapper-43'>
										Возможность создавать <br />и вступать в книжные клубы
									</p>
								</>
							)}
						</div>

						<div
							id={screenWidth >= 834 && screenWidth < 1440 && 'POSSIBILITIES'}
							className='frame-48'
							style={{
								height:
									screenWidth < 834
										? '321px'
										: screenWidth >= 834 && screenWidth < 1440
										? '224px'
										: undefined,
								top:
									screenWidth < 834
										? '3237px'
										: screenWidth >= 834 && screenWidth < 1440
										? '612px'
										: undefined,
								width:
									screenWidth < 834
										? '368px'
										: screenWidth >= 834 && screenWidth < 1440
										? '445px'
										: undefined,
							}}
						>
							{screenWidth >= 834 && screenWidth < 1440 && (
								<div className='text-wrapper-44'>ПОДБОРКИ</div>
							)}

							<div
								className='div-11'
								style={{
									top:
										screenWidth >= 834 && screenWidth < 1440
											? '146px'
											: screenWidth < 834
											? '170px'
											: undefined,
									width:
										screenWidth >= 834 && screenWidth < 1440
											? '396px'
											: screenWidth < 834
											? '319px'
											: undefined,
								}}
							>
								{screenWidth >= 834 && screenWidth < 1440 && (
									<p className='text-wrapper-64'>
										Наша платформа объединяет читателей разных возрастов и
										предпочтений, предлагая множество различных подборок по
										жанрам и настроению
									</p>
								)}

								{screenWidth < 834 && (
									<p className='text-wrapper-64'>
										Подпишитесь на рассылку и узнайте первыми о запуске
										платформы
									</p>
								)}
							</div>

							{screenWidth >= 834 && screenWidth < 1440 && (
								<div className='frame-6'>
									<div className='text-wrapper-12'>ВОЗМОЖНОСТИ</div>
								</div>
							)}

							{screenWidth < 834 && (
								<>
									<div className='text-wrapper-45'>СОВСЕМ СКОРО ЗАПУСК!</div>

									<div className='frame-49'>
										<div className='text-wrapper-46'>РАССЫЛКА</div>
									</div>

									<Frame className='frame-50' text='ПОДПИСАТЬСЯ' />
									<div className='frame-51 input'>
										<div
											className='text-wrapper-47'
											style={{
												transition: '0.2s ease',
											}}
										>
											Адрес Email
										</div>
									</div>
								</>
							)}
						</div>

						<div
							className='frame-52'
							style={{
								backgroundColor:
									screenWidth < 834
										? '#ffffff'
										: screenWidth >= 834 && screenWidth < 1440
										? 'var(--collection-1-color-main-3)'
										: undefined,
								height:
									screenWidth < 834
										? '300px'
										: screenWidth >= 834 && screenWidth < 1440
										? '224px'
										: undefined,
								left:
									screenWidth < 834
										? '12px'
										: screenWidth >= 834 && screenWidth < 1440
										? '377px'
										: undefined,
								top:
									screenWidth < 834
										? '2925px'
										: screenWidth >= 834 && screenWidth < 1440
										? '849px'
										: undefined,
								width:
									screenWidth < 834
										? '368px'
										: screenWidth >= 834 && screenWidth < 1440
										? '445px'
										: undefined,
							}}
						>
							{screenWidth < 834 && (
								<img className='layer' alt='Layer' src='img/layer-1-2x.png' />
							)}

							{screenWidth >= 834 && screenWidth < 1440 && (
								<>
									<div className='text-wrapper-44'>ТЕСТ</div>

									<p className='text-wrapper-48'>
										Благодаря тесту вы так же можете получить индивидуальную
										подборку, которая будет обновляться с выходом новых книг и
										рецензий
									</p>

									<div className='frame-6'>
										<div className='text-wrapper-12'>ВОЗМОЖНОСТИ</div>
									</div>
								</>
							)}
						</div>

						<div
							className={`frame-53 ${screenWidth >= 834 && 'frame1231'}`}
							style={{
								height:
									screenWidth < 834
										? '203px'
										: screenWidth >= 834 && screenWidth < 1440
										? '297px'
										: undefined,
								left:
									screenWidth < 834
										? '12px'
										: screenWidth >= 834 && screenWidth < 1440
										? '377px'
										: undefined,
								top:
									screenWidth < 834
										? '503px'
										: screenWidth >= 834 && screenWidth < 1440
										? '1634px'
										: undefined,
								width:
									screenWidth < 834
										? '369px'
										: screenWidth >= 834 && screenWidth < 1440
										? '445px'
										: undefined,
							}}
						>
							{screenWidth < 834 && <div className='text-wrapper-41'>50+</div>}

							<div
								className='div-12'
								style={{
									top:
										screenWidth < 834
											? '118px'
											: screenWidth >= 834 && screenWidth < 1440
											? '118px'
											: undefined,
								}}
							>
								{screenWidth < 834 && <>КЛУБОВ</>}

								{screenWidth >= 834 && screenWidth < 1440 && (
									<>СОВСЕМ СКОРО ЗАПУСК!</>
								)}
							</div>

							{screenWidth < 834 && (
								<p className='text-wrapper-49'>
									Возможность создавать <br />и вступать в книжные клубы
								</p>
							)}

							{screenWidth >= 834 && screenWidth < 1440 && (
								<>
									<p className='text-wrapper-48'>
										Подпишитесь на рассылку, и узнайте первыми <br />о запуске
										платформы
									</p>

									<div className='frame-49'>
										<div className='text-wrapper-46'>РАССЫЛКА</div>
									</div>

									<Frame className='frame-54' text='ПОДПИСАТЬСЯ' />
									<div className='frame-55 input'>
										<div
											className='text-wrapper-47'
											style={{
												transition: '0.2s ease',
											}}
										>
											Адрес Email
										</div>
									</div>
								</>
							)}
						</div>

						<div
							className='frame-56'
							style={{
								left:
									screenWidth >= 834 && screenWidth < 1440
										? '286px'
										: screenWidth < 834
										? '12px'
										: undefined,
								top:
									screenWidth >= 834 && screenWidth < 1440
										? '395px'
										: screenWidth < 834
										? '718px'
										: undefined,
								width:
									screenWidth >= 834 && screenWidth < 1440
										? '262px'
										: screenWidth < 834
										? '369px'
										: undefined,
							}}
						>
							<div
								className='text-wrapper-50'
								style={{
									width:
										screenWidth >= 834 && screenWidth < 1440
											? '66px'
											: screenWidth < 834
											? '68px'
											: undefined,
								}}
							>
								60+
							</div>

							<div className='text-wrapper-42'>ОБЗОРОВ</div>

							<div
								className='div-13'
								style={{
									width:
										screenWidth >= 834 && screenWidth < 1440
											? '191px'
											: undefined,
								}}
							>
								{screenWidth >= 834 && screenWidth < 1440 && (
									<p className='text-wrapper-64'>
										Доступ к любительским <br />и экспертным обзорам
									</p>
								)}

								{screenWidth < 834 && (
									<p className='text-wrapper-64'>
										Доступ к любительским <br />и экспертным обзорам на книги
									</p>
								)}
							</div>
						</div>

						<div
							className='frame-57'
							style={{
								backgroundColor:
									screenWidth < 834
										? '#ffffff'
										: screenWidth >= 834 && screenWidth < 1440
										? 'var(--collection-1-color-main-3)'
										: undefined,
								left:
									screenWidth < 834
										? '12px'
										: screenWidth >= 834 && screenWidth < 1440
										? '560px'
										: undefined,
								top:
									screenWidth < 834
										? '933px'
										: screenWidth >= 834 && screenWidth < 1440
										? '395px'
										: undefined,
								width:
									screenWidth < 834
										? '369px'
										: screenWidth >= 834 && screenWidth < 1440
										? '262px'
										: undefined,
							}}
						>
							<div className='text-wrapper-41'>15+</div>

							<div className='text-wrapper-42'>ПОДБОРОК</div>

							<div
								className='div-14'
								style={{
									fontFamily:
										screenWidth < 834
											? "'Raleway', Helvetica"
											: screenWidth >= 834 && screenWidth < 1440
											? 'var(--main-text-i-font-family)'
											: undefined,
									fontSize:
										screenWidth < 834
											? '16px'
											: screenWidth >= 834 && screenWidth < 1440
											? 'var(--main-text-i-font-size)'
											: undefined,
									fontStyle:
										screenWidth >= 834 && screenWidth < 1440
											? 'var(--main-text-i-font-style)'
											: undefined,
									fontWeight:
										screenWidth < 834
											? '500'
											: screenWidth >= 834 && screenWidth < 1440
											? 'var(--main-text-i-font-weight)'
											: undefined,
									letterSpacing:
										screenWidth < 834
											? '0'
											: screenWidth >= 834 && screenWidth < 1440
											? 'var(--main-text-i-letter-spacing)'
											: undefined,
									lineHeight:
										screenWidth < 834
											? '19.2px'
											: screenWidth >= 834 && screenWidth < 1440
											? 'var(--main-text-i-line-height)'
											: undefined,
								}}
							>
								{screenWidth < 834 && (
									<p className='text-wrapper-64'>
										Персонализированные подборки <br />и рекомендации книг
									</p>
								)}

								{screenWidth >= 834 && screenWidth < 1440 && (
									<>
										Персонализированные <br />
										подборки и рекомендации
									</>
								)}
							</div>
						</div>
					</>
				)}

				{screenWidth < 834 && (
					<img className='frame-58' alt='Frame' src='img/frame-512956-1.svg' />
				)}

				{screenWidth >= 834 && screenWidth < 1440 && (
					<div className='frame-59'>
						<div className='frame-60'>
							<div className='overlap-group-12'>
								<div className='text-wrapper-31'>ДЕТЕКТИВЫ</div>

								<p className='text-wrapper-32'>
									Разгадывайте тайны <br />и сложные загадки
								</p>

								<img
									className='mask-group-2'
									alt='Mask group'
									src='img/mask-group-8.png'
								/>
							</div>
						</div>

						<div className='frame-61'>
							<div className='text-wrapper-34'>УЖАСЫ</div>

							<div className='text-wrapper-35'>
								Проникнитесь
								<br />
								жуткой атмосферой
							</div>
						</div>

						<div className='frame-62'>
							<div className='text-wrapper-31'>ФЭНТЕЗИ</div>

							<div className='text-wrapper-32'>
								Погрузитесь в мир <br />
								приключений
							</div>
						</div>
					</div>
				)}

				{((screenWidth >= 834 && screenWidth < 1440) || screenWidth < 834) && (
					<div
						className='frame-63'
						style={{
							backgroundColor:
								screenWidth < 834
									? '#000000'
									: screenWidth >= 834 && screenWidth < 1440
									? '#ffffff'
									: undefined,
							borderRadius:
								screenWidth < 834
									? '200px'
									: screenWidth >= 834 && screenWidth < 1440
									? '20px'
									: undefined,
							height:
								screenWidth < 834
									? '34px'
									: screenWidth >= 834 && screenWidth < 1440
									? '224px'
									: undefined,
							top:
								screenWidth < 834
									? '3570px'
									: screenWidth >= 834 && screenWidth < 1440
									? '849px'
									: undefined,
							width:
								screenWidth < 834
									? '368px'
									: screenWidth >= 834 && screenWidth < 1440
									? '353px'
									: undefined,
						}}
					>
						{screenWidth < 834 && (
							<>
								<div className='text-wrapper-51'>
									Политика конфиденциальности
								</div>

								<div className='text-wrapper-52'>2024 г.</div>

								<div className='text-wrapper-53'>ООО «BOOKTALK NN»</div>
							</>
						)}

						{screenWidth >= 834 && screenWidth < 1440 && (
							<img className='group-3' alt='Group' src='img/group-2.png' />
						)}
					</div>
				)}

				{screenWidth >= 834 && screenWidth < 1440 && (
					<>
						<div className='overlap-8' id='QUESTIONS'>
							<div className='frame-64'>
								<div className='overlap-9'>
									<div
										className='rectangle-12'
										style={{
											transition: '0.1s ease',
											width: topQuestion[2],
										}}
									/>

									<img
										className='vector-8'
										alt='Vector'
										src='img/vector-2-20.svg'
									/>

									<p
										className='text-wrapper-54'
										style={{
											transition: '0.2s ease',
											opacity: topQuestion[1] === 0 ? 1 : 0,
										}}
									>
										{props[0][0]}
									</p>
									<p
										className='text-wrapper-54'
										style={{
											transition: '0.2s ease',
											opacity: topQuestion[1] === 1 ? 1 : 0,
										}}
									>
										{props[1][0]}
									</p>
									<p
										className='text-wrapper-54'
										style={{
											transition: '0.2s ease',
											opacity: topQuestion[1] === 2 ? 1 : 0,
										}}
									>
										{props[2][0]}
									</p>
									<p
										className='text-wrapper-54'
										style={{
											transition: '0.2s ease',
											opacity: topQuestion[1] === 3 ? 1 : 0,
										}}
									>
										{props[3][0]}
									</p>
								</div>
							</div>

							<div className='frame-65'>
								<div className='overlap-10'>
									<img
										className='vector-9'
										alt='Vector'
										src='img/vector-4.svg'
									/>

									<div className='rectangle-13' />

									<p
										className='text-wrapper-55'
										style={{
											transition: '0.2s ease',
											opacity: response[1] === 0 ? 1 : 0,
										}}
									>
										{responses[0][0]}
									</p>
									<p
										className='text-wrapper-55'
										style={{
											transition: '0.2s ease',
											opacity: response[1] === 1 ? 1 : 0,
										}}
									>
										{responses[1][0]}
									</p>
									<p
										className='text-wrapper-55'
										style={{
											transition: '0.2s ease',
											opacity: response[1] === 2 ? 1 : 0,
										}}
									>
										{responses[2][0]}
									</p>
									<p
										className='text-wrapper-55'
										style={{
											transition: '0.2s ease',
											opacity: response[1] === 3 ? 1 : 0,
										}}
									>
										{responses[3][0]}
									</p>
								</div>
							</div>
						</div>

						<div className='frame-66'>
							<div className='overlap-9'>
								<div
									className='rectangle-12'
									style={{
										transition: '0.1s ease',
										width: nextQuestion[2],
									}}
								/>

								<img
									className='vector-8'
									alt='Vector'
									src='img/vector-2-20.svg'
								/>

								<p
									className='text-wrapper-56'
									style={{
										transition: '0.2s ease',
										opacity: nextQuestion[1] === 0 ? 1 : 0,
									}}
								>
									{props[0][0]}
								</p>
								<p
									className='text-wrapper-56'
									style={{
										transition: '0.2s ease',
										opacity: nextQuestion[1] === 1 ? 1 : 0,
									}}
								>
									{props[1][0]}
								</p>
								<p
									className='text-wrapper-56'
									style={{
										transition: '0.2s ease',
										opacity: nextQuestion[1] === 2 ? 1 : 0,
									}}
								>
									{props[2][0]}
								</p>
								<p
									className='text-wrapper-56'
									style={{
										transition: '0.2s ease',
										opacity: nextQuestion[1] === 3 ? 1 : 0,
									}}
								>
									{props[3][0]}
								</p>
							</div>
						</div>

						<div className='frame-67' id='COMMUNITY'>
							<p className='telegram-2'>
								Книжный telegram канал с регулярными обновлениями новинок книг и
								рецензий. Подписывайтесь, чтобы быть в курсе <br />
								всех книжных событий
							</p>

							<div className='text-wrapper-57'>НАШЕ СООБЩЕСТВО</div>

							<div className='frame-46'>
								<div className='text-wrapper-40'>СООБЩЕСТВО</div>
							</div>

							<Frame className='frame-68' text='@BTALK.COM' />
						</div>

						<div className='frame-69'>
							<div className='overlap-11'>
								<div className='rectangle-14' />

								<img
									className='element-4'
									alt='Element'
									src='img/2024-12-13-10-48-15-1-1.png'
								/>

								<p className='text-wrapper-58'>
									Предлагаем вам обратить внимание на наши фавориты новогодней
									подборки💔 Уверены, останетесь <br />в восторге! Приятного
									прочтения☺
								</p>

								<img
									className='vector-10'
									alt='Vector'
									src='img/vector-2-29.svg'
								/>
							</div>
						</div>

						<div className='layer-wrapper'>
							<img className='layer-2' alt='Layer' src='img/layer-1-1.png' />
						</div>

						<div className='frame-70'>
							<div className='text-wrapper-59'>ООО «BOOKTALK NN»</div>

							<div className='frame-71'>
								<div className='text-wrapper-60'>
									Политика конфиденциальности
								</div>

								<div className='text-wrapper-61'>2024 г.</div>
							</div>
						</div>
					</>
				)}

				{screenWidth < 834 && (
					<>
						<PropertyDefaultWrapper
							id='QUESTIONS'
							className='frame-512993'
							property1='default'
						/>
						<Component className='component-1' property1='default questions' />
						<Frame512994
							className='frame-512994-instance'
							property1='default'
						/>
					</>
				)}
			</div>
		</div>
	)
}
