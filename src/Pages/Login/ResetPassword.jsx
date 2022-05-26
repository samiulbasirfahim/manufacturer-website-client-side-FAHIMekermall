import { sendPasswordResetEmail } from "firebase/auth"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Link, useLocation } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import auth from "../../firebase.init"

const ResetPassword = () => {
	const [isLoading, setIsLoading] = useState(false)
	const location = useLocation()
	const from = location?.state?.from || "/"
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const onSubmit = async ({ email }) => {
		setIsLoading(true)
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setIsLoading(false)
				toast.success("Email reset mail sent successfully")
			})
			.catch((error) => {
				setIsLoading(false)

				console.log(error)
			})
	}
	console.log(from)
	return (
		<div>
			<div className="min-h-screen flex justify-center items-center">
				{isLoading && <Spinner />}
				<div className="w-full max-w-sm p-6 m-auto bg-base-200/50">
					<h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
						Brand
					</h1>

					<form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
						<div className="mt-4">
							<label
								htmlFor="username"
								className="block text-sm   dark:text-gray-200"
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
								className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
						<div className="mt-6">
							<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
								Send reset password
							</button>
						</div>
					</form>
					<p className="mt-8 text-xs font-light text-center text-gray-400">
						Remember password?
						<Link
							to="/login"
							state={{ from }}
							replace
							className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
						>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	)
}

export default ResetPassword
