import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../Assets/logo.png"
import auth from "../firebase.init"

const Navbar = ({ isDarkTheme, handleDarkTheme }) => {
	const [user] = useAuthState(auth)
	return (
		<section className="max-w-[1444px] px-4 mx-auto flex justify-between items-center h-16` ">
			<div>
				<Link to="/" className="flex h-16 items-center">
					<div className="lg:w-16 w-8 flex items-center lg:h-16 h-8 mr-2 ">
						<img src={logo} alt="" className="w-12" />
					</div>
					<p className="grid justify-items-start">
						<span className="mr-2 lg:text-3xl text-xl font-bold text-[#ef3d55] font-mono">
							Brand
						</span>
						<span className="font-bold text-primary">
							Manufacturer
						</span>
					</p>
				</Link>
			</div>
			<div>
				<ul className="hidden md:block">
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono lg:text-xl  text-sm bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
								: "font-bold font-mono lg:text-xl  text-sm hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono lg:text-xl  text-sm bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
								: "font-bold font-mono lg:text-xl  text-sm hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/products"
					>
						Products
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono lg:text-xl  text-sm bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
								: "font-bold font-mono lg:text-xl  text-sm hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/dashboards"
					>
						Dashboards
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono lg:text-xl  text-sm bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
								: "font-bold font-mono lg:text-xl  text-sm hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/users"
					>
						Products
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono lg:text-xl  text-sm bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
								: "font-bold font-mono lg:text-xl  text-sm hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/fff"
					>
						Products
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono lg:text-xl  text-sm bg-neutral/70 px-4 mx-1  py-2 rounded-xl text-white font-normal "
								: "font-bold font-mono lg:text-xl  text-sm hover:bg-neutral/30 text-primary px-4 mx-1  py-2 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/fdsf"
					>
						Products
					</NavLink>
				</ul>
			</div>
			<div className="flex items-center">
				<div className="hidden md:block">
					<label class="swap swap-rotate mr-6">
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
					{user ? (
						<button
							onClick={() => signOut(auth)}
							className="font-bold lg:text-xl  text-sm font-mono bg-secondary text-white px-4 mx-1 py-2 rounded-xl"
						>
							Log out
						</button>
					) : (
						<Link
							className="font-bold lg:text-xl  text-sm font-mono bg-secondary text-white px-4 mx-1 py-2 rounded-xl"
							to="/login"
						>
							Login
						</Link>
					)}
				</div>
				<label
					for="my-drawer-4"
					class="drawer-button btn-circle swap swap-rotate md:hidden"
				>
					<input type="checkbox" />

					<svg
						class="swap-off fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
					</svg>

					<svg
						class="swap-on fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
					</svg>
				</label>
			</div>
		</section>
	)
}

export default Navbar
