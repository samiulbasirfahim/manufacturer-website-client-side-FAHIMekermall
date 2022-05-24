import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../../../../Components/Spinner"

const AllOrders = () => {
	const [sort, setSort] = useState(0)
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [orders, setOrders] = useState([])
	useEffect(() => {
		setIsLoading(true)
		fetch(`http://localhost:4000/booking?sort=${sort}`)
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(false)
				setOrders(data)
			})
	}, [sort])

	if (isLoading) {
		return <Spinner />
	}

	const handleDiscard = (id) => {
		fetch("http://localhost:4000/booking/" + id, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					const remaining = orders.filter((order) => order._id !== id)
					setOrders(remaining)
				}
			})
	}

	return (
		<div className="">
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg  bg-base-300 lg:mx-10 mx-2">
				<div>
					<label className="mx-2" htmlFor="sort">
						Sort by
					</label>
					<select
						name="sort"
						id="sort"
						onChange={(e) => {
							setSort(e.target.value)
						}}
					>
						<option selected value="0">
							None
						</option>
						<option value="1">Date</option>
						<option value="2">Price</option>
						<option value="3">Quantity</option>
					</select>
				</div>
				<table class="w-full text-sm text-left">
					<thead class="text-xs text-gray-700 uppercase bg-primary dark:text-gray-400">
						<tr>
							<th scope="col" class="px-6 py-3">
								Order by
							</th>
							<th scope="col" class="px-6 py-3">
								Part Name
							</th>
							<th scope="col" class="px-6 py-3">
								Quantity
							</th>
							<th scope="col" class="px-6 py-3">
								Total Price
							</th>
							<th scope="col" class="flex justify-end px-6 py-3">
								<span class="text-right"></span>
							</th>
						</tr>
					</thead>

					<tbody>
						{orders.map(
							({
								_id,
								partId,
								partTitle,
								quantity,
								totalPrice,
								paid,
								userEmail,
							}) => {
								return (
									<tr class="border-b bg-base-300">
										<td class="px-6 py-4 font-mono font-bold">
											{userEmail}
										</td>
										<td class="px-6 py-4 font-mono font-bold">
											{partTitle}
										</td>
										<td class="px-6 py-4 font-mono font-bold">
											{quantity}
										</td>
										<td class="px-6 py-4 font-mono font-bold">
											${totalPrice}
										</td>
										<td class="px-6 py-4 text-right font-mono font-bold">
											{!paid ? (
												<>
													<button
														onClick={() =>
															navigate(
																"/pay/" + partId
															)
														}
														class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
													>
														Pay
													</button>
													<button
														onClick={async () => {
															await handleDiscard(
																_id
															)
														}}
														class="ml-6 cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"
													>
														Discard
													</button>
												</>
											) : (
												<button
													disabled
													class="cursor-not-allowed font-medium text-green-600 dark:text-green-500 hover:underline"
												>
													Paid
												</button>
											)}
										</td>
									</tr>
								)
							}
						)}
					</tbody>
				</table>
				{orders.length === 0 && (
					<div>
						<p className="text-center text-3xl font-bold py-28">
							No orders available
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default AllOrders
