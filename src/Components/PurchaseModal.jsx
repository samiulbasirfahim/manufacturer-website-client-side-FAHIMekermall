import React from "react"
import { useNavigate } from "react-router-dom"

const Modal = () => {
	const navigate = useNavigate()
	return (
		<div>
			{/* <!-- Put this part before </body> tag --> */}
			<input type="checkbox" id="my-modal-6" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<label
						for="my-modal-6"
						class="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<div class="py-12 mx-4">
						<div class="max-w-md mx-auto bg-base-200/50 shadow-lg rounded-lg md:max-w-xl">
							<form class="">
								<div class="w-full p-4 px-5 py-5">
									<div class="flex flex-row mb-8">
										<h2 class="text-3xl font-semibold">
											Spark
										</h2>
										<h2 class="text-3xl text-green-400 font-semibold ml-4">
											Manufacturer
										</h2>
									</div>
									<span>Customer Information</span>

									<div class="mt-4">
										<div class="flex items-center justify-between">
											<label
												htmlFor="password"
												class="block text-sm text-gray-800 dark:text-gray-200"
											>
												Email
											</label>
										</div>

										<input
											type="text"
											name="email"
											defaultValue={
												"samiulbasirfahim360@gmail.com"
											}
											disabled
											class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</div>
									<div class="mt-4">
										<div class="flex items-center justify-between">
											<label
												htmlFor="password"
												class="block text-sm text-gray-800 dark:text-gray-200"
											>
												Full name
											</label>
										</div>

										<input
											type="text"
											name="name"
											defaultValue="Samiul Basir Fahim"
											disabled
											class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</div>
									<span class="pt-6 pb-2 block">
										Shipping Address
									</span>
									<div class="grid md:grid-cols-2 md:gap-2"></div>
									<div class="mt-4">
										<div class="flex items-center justify-between">
											<label
												htmlFor="part_name"
												class="block text-sm text-gray-800 dark:text-gray-200"
											>
												Parts name
											</label>
										</div>

										<input
											type="text"
											name="part_name"
											defaultValue="Phoenix kubo"
											disabled
											class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</div>
									<div class="mt-4">
										<div class="flex items-center justify-between">
											<label
												htmlFor="phone"
												class="block text-sm text-gray-800 dark:text-gray-200"
											>
												Quantity
											</label>
										</div>

										<input
											type="number"
											name="phone"
											defaultValue={50}
											min={50}
											class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</div>
									<div class="mt-4">
										<div class="flex items-center justify-between">
											<label
												htmlFor="password"
												class="block text-sm text-gray-800 dark:text-gray-200"
											>
												Address
											</label>
										</div>

										<input
											type="text"
											name="address"
											class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</div>
									<div class="mt-4">
										<div class="flex items-center justify-between">
											<label
												htmlFor="password"
												class="block text-sm text-gray-800 dark:text-gray-200"
											>
												Phone
											</label>
										</div>

										<input
											type="number"
											name="phone"
											class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</div>

									<div class="flex justify-between items-center pt-2">
										<button
											type="button"
											onClick={() => navigate(-1)}
											class="h-12 w-24 text-blue-500 text-xs font-medium"
										>
											Back
										</button>
										<input
											type="submit"
											class="h-12 w-48 rounded btn btn-primary"
											value={"Confirm purchase"}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
