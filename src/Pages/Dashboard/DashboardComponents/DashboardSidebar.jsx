import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import { NavLink, Outlet } from "react-router-dom"
import Spinner from "../../../Components/Spinner"
import auth from "../../../firebase.init"

const DashboardSidebar = () => {
	const [user] = useAuthState(auth)
	// const [userData, setUserData] = useState({})

	const {
		isLoading,
		error,
		data: userData,
	} = useQuery("repoData", () =>
		fetch("https://manufacturer-website-server.herokuapp.com/user/" + user.email, {
			headers: {
				authorization_email: user.email,
				authorization_token: `Bearer ${localStorage.getItem(
					"authorization_token"
				)}`,
			},
		}).then((res) => res.json())
	)

	if (isLoading) {
		return <Spinner />
	}

	return (
		<div className="drawer drawer-mobile">
			<input
				id="my-drawer-2"
				type="checkbox"
				className="drawer-toggle bg-base-200 w-full"
			/>
			<div className="drawer-content mt-5 bg-base-300 lg:rounded-tl-3xl lg:ml-80 pt-16">
				<label
					htmlFor="my-drawer-2"
					className="btn btn-circle swap swap-rotate fixed left-0 z-50"
				>
					<input type="checkbox" />

					<svg
						className="swap-off fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
					</svg>

					<svg
						className="swap-on fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
					</svg>
				</label>
				<Outlet />
			</div>
			<div className="drawer-side bg-base-300">
				<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
				<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content fixed left-0 h-screen">
					{/* <!-- Sidebar content here --> */}
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
								: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/dashboard/"
					>
						My profile
					</NavLink>
					{userData.roles === "user" && (
						<>
							<NavLink
								className={({ isActive }) => {
									return isActive
										? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
										: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
								}}
								to="/dashboard/orders"
							>
								My orders
							</NavLink>
							<NavLink
								className={({ isActive }) => {
									return isActive
										? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
										: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
								}}
								to="/dashboard/add-review"
							>
								Add A Review
							</NavLink>
						</>
					)}
					{userData.roles === "admin" && (
						<>
							<NavLink
								className={({ isActive }) => {
									return isActive
										? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
										: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
								}}
								to="/dashboard/all-orders"
							>
								Manage All Orders
							</NavLink>
							<NavLink
								className={({ isActive }) => {
									return isActive
										? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
										: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
								}}
								to="/dashboard/add-products"
							>
								Add A Product
							</NavLink>
							<NavLink
								className={({ isActive }) => {
									return isActive
										? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
										: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
								}}
								to="/dashboard/manage-products"
							>
								Manage Products
							</NavLink>
							<NavLink
								className={({ isActive }) => {
									return isActive
										? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
										: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
								}}
								to="/dashboard/manage-admin"
							>
								Manage Admin
							</NavLink>
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default DashboardSidebar
