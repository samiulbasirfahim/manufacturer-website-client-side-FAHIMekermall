
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import SideBar from "./Components/SideBar"
import Navbar from "./Shared/Navbar"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
const App = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(JSON.parse(localStorage.getItem('isDarkTheme')))
	const handleDarkTheme = () => {
		localStorage.setItem('isDarkTheme', !isDarkTheme)
		setIsDarkTheme(!isDarkTheme)
	}
	return (
		<div className={`${isDarkTheme && "dark"} min-h-screen`} data-theme={isDarkTheme ? 'dark' : 'light'}>
			<Navbar isDarkTheme={isDarkTheme} handleDarkTheme={handleDarkTheme} />
			<SideBar handleDarkTheme={handleDarkTheme} >
				<Routes>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
				</Routes>
			</SideBar>
		</div>
	)
}
export default App
