import { async } from "@firebase/util"
import { signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import auth from "../../firebase.init"
import SocialLogin from "../../Shared/SocialLogin"
import generateToken from "../../Utils/generateToken"

const Login = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [user, loading] = useAuthState(auth)
	const location = useLocation()
	const navigate = useNavigate()
	const from = location?.state?.from || "/"

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = ({ email, password }) => {
		setIsLoading(true)
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				setIsLoading(false)
			})
			.catch((err) => {
				setIsLoading(false)
				switch (err.code) {
					case "auth/network-request-failed":
						toast.error("Try again later")
						break
					case "auth/wrong-password":
						toast.error("Wrong password")
						break
					case "auth/user-not-found":
						toast.error("User not found")
						break
					default:
						toast.error("Something went wrong")
				}
			})
	}
	if (user) {
		generateToken(user.email, user.displayName)
		navigate(from)
	}
	return (
		<div className="min-h-screen flex justify-center items-center">
			{loading && <Spinner />}
			{isLoading && <Spinner />}
			<div class="w-full max-w-sm p-6 m-auto bg-base-200/50">
				<h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">
					Brand
				</h1>

				<form class="mt-6" onSubmit={handleSubmit(onSubmit)}>
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
							<Link
								to="/resetPassword"
								class="text-xs text-gray-600 dark:text-gray-400 hover:underline"
							>
								Forget Password?
							</Link>
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
							Login
						</button>
					</div>
				</form>

				<SocialLogin />
				<p class="mt-8 text-xs font-light text-center text-gray-400">
					{" "}
					Don't have an account?{" "}
					<Link
						to="/register"
						class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
					>
						Create One
					</Link>
				</p>
			</div>
		</div>
	)
}

export default Login
