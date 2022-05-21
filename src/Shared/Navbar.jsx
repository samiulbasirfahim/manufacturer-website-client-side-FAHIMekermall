import { signOut } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../Assets/logo.png"
import auth from "../firebase.init"

const Navbar = ({ isDarkTheme, handleDarkTheme }) => {
	const [user] = useAuthState(auth)
	return (
		<section className="container mx-auto flex justify-between items-center h-16">
			<div>
				<Link to="/" className="flex">
					<div className="w-16 flex items-center h-16">
						<img src={logo} alt="" className="w-12" />
					</div>
					<p className="grid justify-items-start">
						<span className="mr-2 text-3xl font-bold text-[#ef3d55] font-mono">
							Brand
						</span>
						<span className="font-bold text-primary">
							Manufacturer
						</span>
					</p>
				</Link>
			</div>
			<div>
				<ul>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono text-xl bg-neutral/70 px-6 mx-2  py-3 rounded-xl text-white font-normal "
								: "font-bold font-mono text-xl hover:bg-neutral/30 text-primary px-6 mx-2  py-3 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/"
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono text-xl bg-neutral/70 px-6 mx-2  py-3 rounded-xl text-white font-normal "
								: "font-bold font-mono text-xl hover:bg-neutral/30 text-primary px-6 mx-2  py-3 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/products"
					>
						Products
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono text-xl bg-neutral/70 px-6 mx-2  py-3 rounded-xl text-white font-normal "
								: "font-bold font-mono text-xl hover:bg-neutral/30 text-primary px-6 mx-2  py-3 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/dashboards"
					>
						Dashboards
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono text-xl bg-neutral/70 px-6 mx-2  py-3 rounded-xl text-white font-normal "
								: "font-bold font-mono text-xl hover:bg-neutral/30 text-primary px-6 mx-2  py-3 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/users"
					>
						Products
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono text-xl bg-neutral/70 px-6 mx-2  py-3 rounded-xl text-white font-normal "
								: "font-bold font-mono text-xl hover:bg-neutral/30 text-primary px-6 mx-2  py-3 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/fff"
					>
						Products
					</NavLink>
					<NavLink
						className={({ isActive }) => {
							return isActive
								? "font-mono text-xl bg-neutral/70 px-6 mx-2  py-3 rounded-xl text-white font-normal "
								: "font-bold font-mono text-xl hover:bg-neutral/30 text-primary px-6 mx-2  py-3 rounded-xl hover:text-white hover:font-normal"
						}}
						to="/fdsf"
					>
						Products
					</NavLink>
				</ul>
			</div>
			<div>
				{user ? (
					<button
						onClick={() => signOut(auth)}
						className="font-bold text-xl font-mono bg-secondary/60 text-white px-6 mx-2 py-3 rounded-xl"
					>
						Log out
					</button>
				) : (
					<Link
						className="font-bold text-xl font-mono bg-secondary/60 text-white px-6 mx-2 py-3 rounded-xl"
						to="/login"
					>Login</Link>
				)}
			</div>
		</section>
	)
}

export default Navbar
