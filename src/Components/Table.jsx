import React from "react"
import { useNavigate } from "react-router-dom"

const Table = ({ orders, handleDiscard, pay, showUser }) => {
	const navigate = useNavigate()
	return (
		<div>
			<table className="w-full text-sm text-left">
				<thead className="text-xs text-gray-700 uppercase bg-primary dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Part Name
						</th>
						{showUser && (
							<th scope="col" className="px-6 py-3">
								Added by
							</th>
						)}
						<th scope="col" className="px-6 py-3">
							Quantity
						</th>
						<th scope="col" className="px-6 py-3">
							Category
						</th>
						<th scope="col" className="px-6 py-3">
							Total Price
						</th>
						<th scope="col" className="px-6 py-3">
							Transaction Id
						</th>
						<th scope="col" className="flex justify-end px-6 py-3">
							<span className="text-right">Status</span>
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
							userEmail,
							category,
						}) => {
							return (
								<tr key={_id} className="border-b bg-base-300">
									<td className="px-6 py-4 font-mono font-bold">
										{partTitle}
									</td>
									{showUser && (
										<td className="px-6 py-4 font-mono font-bold">
											{userEmail}
										</td>
									)}
									<td className="px-6 py-4 font-mono font-bold">
										{quantity}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										{category}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										${totalPrice}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										{transactionId}
									</td>
									<td className="px-6 py-4 text-right font-mono font-bold">
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
														className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
													>
														Pay
													</button>
												)}
												<button
													onClick={async () => {
														await handleDiscard(_id)
													}}
													className="ml-6 cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"
												>
													Discard
												</button>
											</>
										) : (
											<button
												disabled
												className="cursor-not-allowed font-medium text-green-600 dark:text-green-500 hover:underline"
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
