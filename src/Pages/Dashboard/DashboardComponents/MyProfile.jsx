import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import Spinner from "../../../Components/Spinner"
import auth from "../../../firebase.init"

const MyProfile = () => {
	const [user] = useAuthState(auth)
	console.log(user, "user")
	const [isEdit, setIsEdit] = useState(false)
	const {
		isLoading,
		error,
		data: userData,
	} = useQuery("repoData", () =>
		fetch("http://localhost:4000/user/" + user.email, {
			headers: {
				authorization_email: user.email,
				authorization_token: `Bearer ${localStorage.getItem(
					"authorization_token"
				)}`,
			},
		}).then((res) => res.json())
	)

	if (isLoading) {
		return <Spinner />
	}
	const handleEdit = (e) => {
		e.preventDefault()
		const imagebbapi = process.env.REACT_APP_imagebb_key
		console.log(e.target)
	}

	return (
		<div className="h-[80vh] w-full flex justify-center items-center">
			<div>
				<div class="h-screen bg-base-300   flex flex-wrap items-center  justify-center  ">
					<div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-base-300  shadow-lg    transform   duration-200 easy-in-out">
						<div class=" h-32 overflow-hidden">
							<img
								class="w-full"
								src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
								alt=""
							/>
						</div>
						<div class="flex justify-center px-5  -mt-12">
							<img
								class="h-32 w-32 bg-primary p-1 rounded-full   "
								src={userData.imageUrl}
								alt=""
							/>
						</div>
						<div class=" ">
							<div class="text-center px-14">
								<h2 class="text-gray-800 text-3xl font-bold">
									{userData.name}
								</h2>
								<p class="text-gray-400 mt-2">
									{userData.email}
								</p>
								<p class="mt-2 text-gray-600">{userData.bio}</p>
							</div>
							<hr class="mt-6" />
							<form class="px-8" onSubmit={handleEdit}>
								{isEdit && (
									<>
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
												class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>
										<div class="mt-4">
											<div class="flex items-center justify-between">
												<label
													htmlFor="password"
													class="block text-sm text-gray-800 dark:text-gray-200"
												>
													Bio
												</label>
											</div>

											<input
												type="text"
												name="name"
												class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>
										<div class="w-full p-3">
											<div class="relative border-dotted h-48 rounded-lg  border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
												<div class="absolute">
													<div class="flex flex-col items-center">
														<i class="fa fa-folder-open fa-4x text-blue-700"></i>
														<span class="block text-gray-400 font-normal">
															Attach you Image
															here
														</span>
													</div>
												</div>

												<input
													type="file"
													class="h-full w-full opacity-0"
													name=""
												/>
											</div>
										</div>
									</>
								)}
								<div>
									{!isEdit ? (
										<div
											onClick={() => setIsEdit(true)}
											class="text-center w-full p-4 hover:bg-gray-100 cursor-pointer"
										>
											<p>Edit</p>
										</div>
									) : (
										<div class="text-center w-full p-4 hover:bg-gray-100 cursor-pointer">
											<p>Save</p>
										</div>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyProfile
