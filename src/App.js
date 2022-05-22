
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import SideBar from "./Components/SideBar"
import Navbar from "./Shared/Navbar"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import { useScrollTracker } from "react-scroll-tracker"
const App = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(JSON.parse(localStorage.getItem('isDarkTheme')))
	const handleDarkTheme = () => {
		localStorage.setItem('isDarkTheme', !isDarkTheme)
		setIsDarkTheme(!isDarkTheme)
	}
	const { scrollY } = useScrollTracker();
	return (
		<div className={`${isDarkTheme && "dark"} min-h-screen`} data-theme={isDarkTheme ? 'dark' : 'light'}>
			<div className="fixed top-0 z-50 w-full bg-base-100 h-20 ">
				<progress class="progress" value={scrollY} max="100"></progress>
				<Navbar isDarkTheme={isDarkTheme} handleDarkTheme={handleDarkTheme} />
			</div>
			<div className="mt-20">

				<SideBar handleDarkTheme={handleDarkTheme} >
					<Routes>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/register" element={<Register />}></Route>
					</Routes>
				</SideBar>
			</div>
		</div>
	)
}
export default App
