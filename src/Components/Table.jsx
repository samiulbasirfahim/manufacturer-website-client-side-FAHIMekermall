import React from "react"
import { useNavigate } from "react-router-dom"

const Table = ({ orders, handleDiscard, pay }) => {
	const navigate = useNavigate()
	return (
		<div>
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
						<th scope="col" class="px-6 py-3">
							Transaction Id
						</th>
						<th scope="col" class="flex justify-end px-6 py-3">
							<span class="text-right">Status</span>
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
							transactionId,
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
									<td class="px-6 py-4 font-mono font-bold">
										{transactionId}
									</td>
									<td class="px-6 py-4 text-right font-mono font-bold">
										{!paid ? (
											<>
												{pay && (
													<button
														onClick={() =>
															navigate(
																"/payment/" +
																	_id
															)
														}
														class="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
													>
														Pay
													</button>
												)}
												<button
													onClick={async () => {
														await handleDiscard(_id)
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
		</div>
	)
}

export default Table
