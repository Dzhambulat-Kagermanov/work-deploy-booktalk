import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Screen } from './screens/Screen'
import { ScreenScreen } from './screens/ScreenScreen'

const router = createBrowserRouter([
	{
		path: '/*',
		element: <Screen />,
	},
	{
		path: '/stub',
		element: <ScreenScreen />,
	},
])

export const App = () => {
	return <RouterProvider router={router} />
}
