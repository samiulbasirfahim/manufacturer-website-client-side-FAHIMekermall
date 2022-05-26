import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import Swal from "sweetalert2"
import axiosAuth from "../../../../Axios/axiosAuth"
import Spinner from "../../../../Components/Spinner"
import auth from "../../../../firebase.init"

const ManageAdmin = () => {
	const [user] = useAuthState(auth)
	const {
		isLoading,
		refetch,
		data: { data: users } = {},
	} = useQuery(["allUsers"], () =>
		axiosAuth(
			"https://manufacturer-website-server.herokuapp.com/user/admin"
		)
	)
	if (isLoading) {
		return <Spinner />
	}

	const removeAdmin = (email) => {
		if (user.email === email) {
			return toast.error("You cant remove you from admin panel")
		}
		Swal.fire({
			title: "Are you sure?",
			text: `Remove ${email}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Remove",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosAuth({
					method: "PUT",
					url:
						"https://manufacturer-website-server.herokuapp.com/user/roles/" +
						email,
					data: {
						roles: "user",
					},
				}).then(({ data }) => {
					if (data._id) {
						refetch()
						toast.success(`${data.email} removed from admin`)
					}
				})
			}
		})
	}
	const addAdmin = (event) => {
		event.preventDefault()
		const email2 = event.target.email.value
		axiosAuth({
			method: "PUT",
			url:
				"https://manufacturer-website-server.herokuapp.com/user/roles/" +
				email2,
			data: {
				roles: "admin",
			},
		}).then(({ data }) => {
			console.log(data)
			if (data?.errMessage) {
				toast.error(data.errMessage)
			} else if (data._id) {
				refetch()
				toast.success(`Email: ${data.email} added to admin`)
			}
			event.target.reset()
		})
	}

	return (
		<div>
			<div>
				<div className="">
					<form
						onSubmit={addAdmin}
						className="w-full lg:w-1/2 mx-auto grid bg-base-100 p-4 mb-8 shadow-md rounded-sm"
					>
						<label
							for="input-group-1"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Your Email
						</label>
						<div className="relative mb-2">
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<svg
									className="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
							</div>
							<input
								type="email"
								name="email"
								id="input-group-1"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@email.com"
							/>
						</div>
						<input
							type="submit"
							value="Add admin"
							className="btn btn-link text-green-600"
						/>
					</form>
					{isLoading && <Spinner />}
					<div className="relative overflow-x-auto shadow-md sm:rounded-lg  bg-base-300 lg:mx-10 mx-2">
						{users.length > 0 && (
							<>
								<p className="w-full text-center bg-base-200 font-bold py-2 text-purple-600 font-mono text-2xl">
									Admin list
								</p>
								<table className="w-full text-sm text-left">
									<thead className="text-xs text-gray-700 uppercase bg-primary dark:text-gray-400">
										<tr>
											<th
												scope="col"
												className="px-6 py-3"
											>
												Image
											</th>
											<th
												scope="col"
												className="px-6 py-3"
											>
												Name
											</th>

											<th
												scope="col"
												className="px-6 py-3"
											>
												Email
											</th>
											<th
												scope="col"
												className="flex justify-end px-6 py-3"
											>
												<span className="text-right"></span>
											</th>
										</tr>
									</thead>

									<tbody>
										{users.map(
											({
												_id,
												imageUrl,
												name,
												email,
											}) => {
												return (
													<tr
														key={_id}
														className="border-b bg-base-300"
													>
														<td className="px-6 py-4 font-mono font-bold">
															<img
																className="max-w-[60px]"
																src={imageUrl}
																alt=""
															/>
														</td>

														<td className="px-6 py-4 font-mono font-bold">
															{name}
														</td>
														<td className="px-6 py-4 font-mono font-bold">
															{email}
														</td>

														<td className="px-6 py-4 font-mono font-bold">
															<button
																onClick={() =>
																	removeAdmin(
																		email
																	)
																}
																className="btn btn-link text-red-600 btn-sm"
															>
																Remove Admin
															</button>
														</td>
													</tr>
												)
											}
										)}
									</tbody>
								</table>
							</>
						)}
						{users?.length === 0 && (
							<div>
								<p className="text-center text-3xl font-bold py-28">
									No Users available
								</p>
							</div>
						)}
					</div>
				</div>
			</div>{" "}
		</div>
	)
}

export default ManageAdmin
