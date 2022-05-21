import React from "react"
import { Link } from "react-router-dom"
import SocialLogin from "../../Shared/SocialLogin"

const Register = () => {
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div class="w-full max-w-sm p-6 m-auto bg-white rounded-md dark:bg-[#2a303c]">
				<h1 class="text-3xl font-semibold text-center text-gray-700 dark:text-white">
					Brand
				</h1>

				<form class="mt-6">
					<div>
						<label
							for="username"
							class="block text-sm text-gray-800 dark:text-gray-200"
						>
							Name
						</label>
						<input
							type="text"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>
					<div class="mt-4">
						<label
							for="username"
							class="block text-sm text-gray-800 dark:text-gray-200"
						>
							Email
						</label>
						<input
							type="email"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
					</div>

					<div class="mt-4">
						<div class="flex items-center justify-between">
							<label
								for="password"
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
							type="password"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						/>
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
