import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import Spinner from "../../../../Components/Spinner"
import auth from "../../../../firebase.init"

const Orders = () => {
	const [user] = useAuthState(auth)
	const navigate = useNavigate()
	const { isLoading, data } = useQuery("my_orders", () =>
		fetch("http://localhost:4000/booking/" + user.email).then((res) =>
			res.json()
		)
	)
	if (isLoading) {
		return <Spinner />
	}
	return (
		<div className="">
			<div class="relative overflow-x-auto shadow-md sm:rounded-lg  bg-base-300 lg:mx-10 mx-2">
				<table class="w-full text-sm text-left">
					<thead class="text-xs text-gray-700 uppercase bg-primary dark:text-gray-400">
						<tr>
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
						{data.map(
							({
								partId,
								partTitle,
								quantity,
								totalPrice,
								paid,
							}) => {
								return (
									<tr class="border-b bg-base-300">
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
													<button class="ml-6 cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">
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
				{data.length === 0 && (
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

export default Orders
