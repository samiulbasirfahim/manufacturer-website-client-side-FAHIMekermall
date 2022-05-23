
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import SideBar from "./Components/SideBar"
import Navbar from "./Shared/Navbar"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import { useScrollTracker } from "react-scroll-tracker"
import Home from "./Pages/Home/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Orders from "./Pages/Dashboard/DashboardComponents/Orders"
import PartDetails from "./Pages/PartDetails/PartDetails"
import { Toaster } from "react-hot-toast"
const App = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(JSON.parse(localStorage.getItem('isDarkTheme')))
	const handleDarkTheme = () => {
		localStorage.setItem('isDarkTheme', !isDarkTheme)
		setIsDarkTheme(!isDarkTheme)
	}
	return (
		<div className={`${isDarkTheme && "dark"} min-h-screen`} data-theme={isDarkTheme ? 'business' : 'winter'}>
			<div>

				<div className="fixed top-0 z-50 w-full bg-base-100 ">
					<Navbar isDarkTheme={isDarkTheme} handleDarkTheme={handleDarkTheme} />
				</div>
				<div className="mt-16">
					<SideBar handleDarkTheme={handleDarkTheme} >
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/dashboard" element={<Dashboard />}>
								<Route index ></Route>
								<Route path="profile" ></Route>
								<Route path="orders" element={<Orders />} ></Route>
								<Route path="add-review" ></Route>
								<Route path="all-orders" ></Route>
								<Route path="add-products" ></Route>
								<Route path="manage-products" ></Route>
								<Route path="manage-admin" ></Route>
							</Route>
							<Route path="/part/:id" element={<PartDetails />}></Route>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/register" element={<Register />}></Route>
						</Routes>
					</SideBar>
				</div>

			</div>
			<Toaster position="top-right"
				reverseOrder={false} />
		</div>
	)
}
export default App
