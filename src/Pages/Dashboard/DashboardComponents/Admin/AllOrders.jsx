import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Spinner from "../../../../Components/Spinner"
import Swal from "sweetalert2"
import Table from "../../../../Components/Table"

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
	const handleDiscard = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch("http://localhost:4000/booking/" + id, {
					method: "DELETE",
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.success) {
							const remaining = orders.filter(
								(order) => order._id !== id
							)
							setOrders(remaining)
						}
					})
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
				{orders && (
					<Table
						orders={orders}
						handleDiscard={handleDiscard}
						pay={false}
					/>
				)}
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
