
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import SideBar from "./Components/SideBar"
import Navbar from "./Shared/Navbar"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import { useScrollTracker } from "react-scroll-tracker"
import Home from "./Pages/Home/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
import PartDetails from "./Pages/PartDetails/PartDetails"
import { Toaster } from "react-hot-toast"
import Footer from "./Shared/Footer/Footer"
import Purchase from "./Pages/Purchase/Purchase"
import Parts from "./Pages/Parts/Parts"
import RequireAuth from "./Authantication/RequireAuth"
import MyProfile from "./Pages/Dashboard/DashboardComponents/MyProfile"
import Orders from "./Pages/Dashboard/DashboardComponents/User/Orders"
import AllOrders from "./Pages/Dashboard/DashboardComponents/Admin/AllOrders"
import Contact from "./Pages/Contact-us/Contact"
import AddReview from "./Pages/Dashboard/DashboardComponents/User/AddReview"
import RequireAdmin from "./Authantication/RequireAdmin"
import OnlyUser from "./Authantication/OnlyUser"
import AddProduct from "./Pages/Dashboard/DashboardComponents/Admin/AddProduct"
import Payment from "./Pages/Payment/Payment"
import NotFound from "./Pages/NotFound/NotFound"
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio"
import Blogs from "./Pages/Blogs/Blogs"
import ManageProduct from "./Pages/Dashboard/DashboardComponents/Admin/ManageProduct"
import ManageAdmin from "./Pages/Dashboard/DashboardComponents/Admin/ManageAdmin"
import ResetPassword from "./Pages/Login/ResetPassword"
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
							<Route element={<RequireAuth />}>
								<Route path="/payment/:id" element={
									<OnlyUser>
										<Payment />
									</OnlyUser>
								} ></Route>
								<Route path="/purchase/:id" element={
									<OnlyUser>
										<Purchase />
									</OnlyUser>
								}></Route>
								<Route path="/dashboard" element={<Dashboard />}>
									<Route index element={<MyProfile />}></Route>
									<Route path="orders" element={
										<OnlyUser>\
											<Orders />
										</OnlyUser>
									} ></Route>
									<Route path="add-review" element={
										<OnlyUser>
											<AddReview />
										</OnlyUser>
									} ></Route>

									<Route path="all-orders" element={
										<RequireAdmin >
											<AllOrders />
										</RequireAdmin>
									}></Route>
									<Route path="add-products" element={
										<RequireAdmin >
											<AddProduct />
										</RequireAdmin>
									}></Route>
									<Route ></Route>
									<Route path="manage-products" element={
										<RequireAdmin>
											<ManageProduct />
										</RequireAdmin>
									}></Route>
									<Route path="manage-admin" element={
										<RequireAdmin >
											<ManageAdmin />
										</RequireAdmin>
									} ></Route>
								</Route>
							</Route>
							<Route path="/parts" element={<Parts />}></Route>
							<Route path="/contact-us" element={<Contact />}></Route>
							<Route path="/part/:id" element={<PartDetails />}></Route>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/register" element={<Register />}></Route>
							<Route path="/resetPassword" element={<ResetPassword />}></Route>
							<Route path="/my-portfolio" element={<MyPortfolio />}></Route>
							<Route path="/blogs" element={<Blogs />}></Route>
							<Route path="*" element={<NotFound />}></Route>
						</Routes>
						<Footer />
					</SideBar>
				</div>

			</div>
			<Toaster position="top-right"
				reverseOrder={false} />

		</div>
	)
}
export default App
