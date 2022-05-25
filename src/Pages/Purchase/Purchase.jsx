import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import axiosAuth from "../../Axios/axiosAuth"
import Spinner from "../../Components/Spinner"
import auth from "../../firebase.init"

const Purchase = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [user] = useAuthState(auth)
	const {
		isLoading,
		error,
		data: {
			data: {
				_id: partId,
				title,
				imageUrl,
				description,
				price,
				minOrderQuantity,
				availableQuantity,
				category,
			} = {},
		} = {},
	} = useQuery(["partDetails", id], () =>
		axiosAuth(
			"https://manufacturer-website-server.herokuapp.com/part/" + id
		)
	)

	const [quantity, setQuantity] = useState(0)
	useEffect(() => setQuantity(minOrderQuantity), [minOrderQuantity])
	const [err, setErr] = useState("This product is available soon")
	useEffect(() => {
		if (quantity < minOrderQuantity) {
			setErr(`You have to make at least ${minOrderQuantity} bookings`)
		} else if (quantity > availableQuantity) {
			setErr(`You can't order more than ${availableQuantity}`)
		} else if (availableQuantity < minOrderQuantity) {
			setErr("This product is available soon")
		} else {
			setErr("")
		}
	}, [quantity])
	if (isLoading) {
		return <Spinner />
	}
	const handlePurchase = (event) => {
		event.preventDefault()
		const bookingInfo = {
			title: `${title} booked for ${user.displayName}`,
			partTitle: title,
			partId: partId,
			quantity: event.target.quantity.value,
			totalPrice: +price * +quantity,
			userEmail: user.email,
			address: event.target.address.value,
			phone: event.target.phone.value,
			paid: false,
			imageUrl,
			category,
		}
		axiosAuth({
			method: "POST",
			url: "https://manufacturer-website-server.herokuapp.com/booking",
			data: bookingInfo,
		}).then(({ data }) => {
			if (data?.data?._id) {
				navigate(-1)
				toast.success("Booking successful ")
			}
		})
	}

	return (
		<div>
			<div className="py-12 mx-4">
				<div className="max-w-md mx-auto bg-base-200/50 shadow-lg rounded-lg md:max-w-xl">
					<form onSubmit={handlePurchase} className="">
						<div className="w-full p-4 px-5 py-5">
							<div className="flex flex-row mb-8">
								<h2 className="text-3xl font-semibold">
									Spark
								</h2>
								<h2 className="text-3xl text-green-400 font-semibold ml-4">
									Manufacturer
								</h2>
							</div>
							<span>Customer Information</span>

							<div className="mt-4">
								<div className="flex items-center justify-between">
									<label
										htmlFor="email"
										className="block text-sm text-gray-800 dark:text-gray-200"
									>
										Email
									</label>
								</div>

								<input
									type="text"
									name="email"
									defaultValue={user?.email}
									disabled
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm text-gray-800 dark:text-gray-200"
									>
										Full name
									</label>
								</div>

								<input
									type="text"
									name="name"
									defaultValue={user?.displayName}
									disabled
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<span className="pt-6 pb-2 block">
								Shipping Address
							</span>
							<div className="grid md:grid-cols-2 md:gap-2"></div>
							<div title={description} className="mt-4">
								<div className="flex items-center justify-between">
									<label
										htmlFor="part_name"
										className="block text-sm text-gray-800 dark:text-gray-200"
									>
										Parts name
									</label>
								</div>

								<input
									type="text"
									name="part_name"
									defaultValue={title}
									disabled
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between">
									<label
										htmlFor="part_name"
										className="block text-sm text-gray-800 dark:text-gray-200"
									>
										Category
									</label>
								</div>

								<input
									type="text"
									name="part_name"
									defaultValue={category}
									disabled
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between">
									<label
										htmlFor="quantity"
										className="block text-sm text-gray-800 dark:text-gray-200"
									>
										Quantity
									</label>
									<p className="block text-md font-bold text-gray-800 dark:text-gray-200">
										Available : {availableQuantity}
									</p>
								</div>

								<input
									type="number"
									name="quantity"
									onChange={(e) =>
										setQuantity(e.target.value)
									}
									defaultValue={minOrderQuantity}
									min={minOrderQuantity}
									max={availableQuantity}
									required
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
								<p className="block text-md font-bold text-gray-800 dark:text-gray-200">
									Price : {price}
								</p>
								<p className="text-red-600 text-sm ">{err}</p>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm text-gray-800 dark:text-gray-200"
									>
										Address
									</label>
								</div>

								<input
									type="text"
									required
									name="address"
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<div className="mt-4">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm text-gray-800 dark:text-gray-200"
									>
										Phone
									</label>
								</div>

								<input
									required
									type="number"
									name="phone"
									className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<p className="text-bold text-3xl text-center py-4 ">
								Total = ${+price * +quantity}
							</p>
							<div className="flex justify-between items-center pt-2">
								<button
									type="button"
									onClick={() => navigate(-1)}
									className="h-12 w-24 text-blue-500 text-xs font-medium"
								>
									Back
								</button>
								<input
									disabled={err !== ""}
									type="submit"
									className="h-12 w-48 rounded btn btn-primary"
									value={"Confirm purchase"}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Purchase
