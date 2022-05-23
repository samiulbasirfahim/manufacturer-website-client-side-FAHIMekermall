import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import auth from "../../firebase.init"
import SocialLogin from "../../Shared/SocialLogin"

const Register = () => {
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = ({ email, name, password }) => {
		setIsLoading(true)
		createUserWithEmailAndPassword(auth, email, password)
			.then(() =>
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {
						toast.success("Register successfully!")
						setIsLoading(false)
						fetch("http://localhost:4000/user", {
							method: "PUT",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								email: email,
								name: name,
							}),
						})
							.then((res) => res.json())
							.then((data) => {
								if (data.token) {
									window.localStorage.setItem(
										"authorization_token",
										data.token
									)
								}
							})
					})
					.catch((err) => {
						toast.error("something went wrong on updating name")
						setIsLoading(false)
					})
			)
			.catch((err) => {
				setIsLoading(false)
				switch (err.code) {
					case "auth/email-already-in-use":
						toast.error("Email already in use")
						break
					case "auth/weak-password":
						toast.error("Weak password")
						break
					case "auth/invalid-email":
						toast.error("Invalid email")
						break
					default:
						toast.error("something went wrong")
						break
				}

				console.log(err.code)
			})
	}
	console.log(errors)
	return (
		<div className="min-h-screen flex justify-center items-center">
			{isLoading && <Spinner />}
			<div class="w-full max-w-sm p-6 m-auto  rounded-md bg-base-200/50">
				<h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">
					Brand
				</h1>

				<form class="mt-6" onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label
							htmlFor="username"
							class="block text-sm text-gray-800 dark:text-gray-200"
						>
							Name
						</label>
						<input
							type="text"
							name="name"
							{...register("name", {
								required: true,
								minLength: 3,
								maxLength: 30,
							})}
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
						{errors.name?.type === "required" && (
							<p className="text-red-600 text-xs">
								Name is required
							</p>
						)}
						{errors.name?.type === "minLength" && (
							<p className="text-red-600 text-xs">
								Name is too short
							</p>
						)}
						{errors.name?.type === "maxLength" && (
							<p className="text-red-600 text-xs">
								Name is too long
							</p>
						)}
					</div>
					<div class="mt-4">
						<label
							htmlFor="username"
							class="block text-sm text-gray-800 dark:text-gray-200"
						>
							Email
						</label>
						<input
							{...register("email", {
								required: true,
								pattern:
									/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							})}
							type="text"
							name="email"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
						{errors.email?.type === "required" && (
							<p className="text-red-600 text-xs">
								Email is required
							</p>
						)}
						{errors.email?.type === "pattern" && (
							<p className="text-red-600 text-xs">
								Invalid Email Address
							</p>
						)}
					</div>

					<div class="mt-4">
						<div class="flex items-center justify-between">
							<label
								htmlFor="password"
								class="block text-sm text-gray-800 dark:text-gray-200"
							>
								Password
							</label>
						</div>

						<input
							{...register("password", {
								required: true,
								minLength: 6,
							})}
							type="password"
							name="password"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
						{errors.password?.type === "required" && (
							<p className="text-red-600 text-xs">
								Password is required
							</p>
						)}
						{errors.password?.type === "minLength" && (
							<p className="text-red-600 text-xs">
								Password is too short
							</p>
						)}
					</div>

					<div class="mt-6">
						<button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
							Register
						</button>
					</div>
				</form>

				<SocialLogin />

				<p class="mt-8 text-xs font-light text-center text-gray-400">
					Already have an account?
					<Link
						to="/login"
						class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
					>
						Login
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Register
