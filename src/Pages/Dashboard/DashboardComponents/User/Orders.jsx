import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import Spinner from "../../../../Components/Spinner"
import auth from "../../../../firebase.init"
import Swal from "sweetalert2"
import Table from "../../../../Components/Table"

const Orders = () => {
	const [user] = useAuthState(auth)
	const [sort, setSort] = useState(0)
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [orders, setOrders] = useState([])
	useEffect(() => {
		setIsLoading(true)
		fetch(
			`https://manufacturer-website-server.herokuapp.com/booking/${user.email}?sort=${sort}`
		)
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(false)
				setOrders(data)
			})
	}, [sort])

	// if (isLoading) {
	// 	return <Spinner />
	// }

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
				fetch(
					"https://manufacturer-website-server.herokuapp.com/booking/" +
						id,
					{
						method: "DELETE",
					}
				)
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
			{isLoading && <Spinner />}
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg  bg-base-300 lg:mx-10 mx-2">
				<div>
					<label className="mx-2" htmlFor="sort">
						Sort by
					</label>
					<select
						name="sort"
						id="sort"
						className="text-primary bg-base-100"
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
				<Table
					orders={orders}
					handleDiscard={handleDiscard}
					pay={true}
					
				/>
				{orders && orders.length === 0 && (
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
