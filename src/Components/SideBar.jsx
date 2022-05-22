import React from "react"
import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, NavLink } from "react-router-dom"
import auth from "../firebase.init"

const SideBar = ({ children, handleDarkTheme }) => {
	const [user] = useAuthState(auth)

	return (
		<div>
			<div class="drawer drawer-end fixed right-0">
				<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
				<div class="drawer-content">
					{/* <!-- Page content here --> */}
					{children}
				</div>
				<div class="drawer-side">
					<label for="my-drawer-4" class="drawer-overlay"></label>
					<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
						{/* <!-- Sidebar content here --> */}
						<label class="swap swap-rotate my-6 ">
							{/* <!-- this hidden checkbox controls the state --> */}
							<input type="checkbox" onClick={handleDarkTheme} />

							{/* <!-- sun icon --> */}
							<svg
								class="swap-on fill-current w-10 h-10"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
							</svg>

							{/* <!-- moon icon --> */}
							<svg
								class="swap-off fill-current w-10 h-10"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
							</svg>
						</label>
						<NavLink
							className={({ isActive }) => {
								return isActive
									? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
									: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
							}}
							to="/"
						>
							Home
						</NavLink>
						<NavLink
							className={({ isActive }) => {
								return isActive
									? "font-mono   text-md    bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
									: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
							}}
							to="/products"
						>
							Products
						</NavLink>
						<NavLink
							className={({ isActive }) => {
								return isActive
									? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
									: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
							}}
							to="/dashboards"
						>
							Dashboards
						</NavLink>
						<NavLink
							className={({ isActive }) => {
								return isActive
									? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
									: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
							}}
							to="/users"
						>
							Products
						</NavLink>
						<NavLink
							className={({ isActive }) => {
								return isActive
									? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
									: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
							}}
							to="/fff"
						>
							Products
						</NavLink>
						<NavLink
							className={({ isActive }) => {
								return isActive
									? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
									: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
							}}
							to="/fdsf"
						>
							Products
						</NavLink>

						{user ? (
							<button
								onClick={() => signOut(auth)}
								className="font-bold   text-md      font-mono bg-secondary text-white px-4 mx-1 py-2 rounded-xl"
							>
								Log out
							</button>
						) : (
							<NavLink
								className={({ isActive }) => {
									return isActive
										? "font-mono   text-md      bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
										: "font-bold font-mono   text-md      hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
								}}
								to="/login"
							>
								Login
							</NavLink>
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SideBar
