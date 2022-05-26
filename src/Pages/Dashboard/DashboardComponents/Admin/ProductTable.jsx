import React from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import axiosAuth from "../../../../Axios/axiosAuth"

const ProductTable = ({ parts, refetch }) => {
	const navigate = useNavigate()
	const handleDelete = (id) => {
		Swal.fire({
			title: "Are you sure?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosAuth({
					method: "DELETE",
					url:
						"https://manufacturer-website-server.herokuapp.com/part/" +
						id,
				}).then(({ data }) => {
					console.log(data)
					if (data.success) {
						toast.success("Delete successfully")
						refetch()
					}
				})
			}
		})
	}
	return (
		<div>
			<table className="w-full text-sm text-left">
				<thead className="text-xs text-gray-700 uppercase bg-primary dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Image
						</th>
						<th scope="col" className="px-6 py-3">
							Title
						</th>

						<th scope="col" className="px-6 py-3">
							Category
						</th>
						<th scope="col" className="px-6 py-3">
							Quantity
						</th>
						<th scope="col" className="px-6 py-3">
							Min Quantity
						</th>
						<th scope="col" className="px-6 py-3">
							Price
						</th>
						<th scope="col" className="px-6 py-3">
							Added By
						</th>
						<th scope="col" className="flex justify-end px-6 py-3">
							<span className="text-right"></span>
						</th>
					</tr>
				</thead>

				<tbody>
					{parts.map(
						({
							_id,
							imageUrl,
							title,
							availableQuantity,
							minOrderQuantity,
							price,
							addedBy,
							category,
						}) => {
							return (
								<tr key={_id} className="border-b bg-base-300">
									<td className="px-6 py-4 font-mono font-bold">
										<img
											className="max-w-[60px]"
											src={imageUrl}
											alt=""
										/>
									</td>

									<td className="px-6 py-4 font-mono font-bold">
										{title}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										{category}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										{availableQuantity}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										{minOrderQuantity}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										{price}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										{addedBy}
									</td>
									<td className="px-6 py-4 font-mono font-bold">
										<button
											className="btn btn-link btn-xs text-red-600"
											onClick={() => handleDelete(_id)}
										>
											Delete
										</button>
										<button
											className="btn btn-link btn-xs text-blue-600"
											onClick={() =>
												navigate("/part/" + _id)
											}
										>
											View
										</button>
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

export default ProductTable
