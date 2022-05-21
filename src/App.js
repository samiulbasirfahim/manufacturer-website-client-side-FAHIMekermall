import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import Navbar from "./Shared/Navbar"

const App = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(JSON.parse(localStorage.getItem('isDarkTheme')))
	const handleDarkTheme = () => {
		localStorage.setItem('isDarkTheme', !isDarkTheme)
		setIsDarkTheme(!isDarkTheme)
	}
	return (
		<div className={`${isDarkTheme && "dark"} min-h-screen`} data-theme={isDarkTheme ? 'dark' : 'light'}>
			<Navbar isDarkTheme={isDarkTheme} handleDarkTheme={handleDarkTheme} />
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
			</Routes>
		</div>
	)
}
export default App
