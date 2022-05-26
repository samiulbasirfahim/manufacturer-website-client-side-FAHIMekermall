import { motion } from "framer-motion"
import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import axiosAuth from "../../../Axios/axiosAuth"
import Spinner from "../../../Components/Spinner"
import auth from "../../../firebase.init"

const MyProfile = () => {
	const [user] = useAuthState(auth)
	const [isEdit, setIsEdit] = useState(false)
	const {
		isLoading,
		refetch,
		data: { data: userData } = {},
	} = useQuery(["userData", user], () =>
		axiosAuth(
			"https://manufacturer-website-server.herokuapp.com/user/" +
				user.email
		)
	)

	const [loading, setLoading] = useState(false)
	if (isLoading) {
		return <Spinner />
	}
	const handleEdit = async (e) => {
		e.preventDefault()
		setLoading(true)
		const image = e.target.image.files[0]
		const formData = new FormData()
		formData.append("image", image)
		let imageUrl
		if (image) {
			await fetch(
				"https://api.imgbb.com/1/upload?key=" +
					process.env.REACT_APP_imagebb_key,
				{
					method: "POST",

					body: formData,
				}
			)
				.then((response) => response.json())
				.then((data) => {
					if (data.data.url) {
						imageUrl = data.data.url
					}
				})
		}

		const updatedUserInfo = {
			name: e.target.name.value,
			bio: e.target.bio.value,
			education: e.target.education.value,
			location: e.target.location.value,
			facebook: e.target.facebook.value,
			linkedin: e.target.linkedin.value,
			phone: e.target.phone.value,
		}

		if (imageUrl) {
			updatedUserInfo.imageUrl = imageUrl
		}
		axiosAuth({
			method: "PUT",
			url:
				"https://manufacturer-website-server.herokuapp.com/user/" +
				user.email,
			data: updatedUserInfo,
		}).then(({ data }) => {
			if (data.modifiedCount > 0) {
				toast.success("user updated successfully")
				setIsEdit(null)
				refetch()
				setLoading(false)
			}
		})
	}

	return (
		<div className="h-[80vh] w-full flex justify-center items-center">
			<motion.div animate={{ scale: [0.1, 1] }}>
				{loading && <Spinner />}
				<div className="min-h-[80vh] bg-base-300  flex flex-wrap items-center  justify-center  ">
					<div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-base-300  shadow-lg    transform   duration-200 easy-in-out">
						<div className=" h-32 overflow-hidden">
							<img
								className="w-full"
								src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
								alt=""
							/>
						</div>
						<div className="flex justify-center px-5  -mt-12">
							<img
								className="h-32 w-32 bg-primary p-1 rounded-full   "
								src={userData?.imageUrl}
								alt=""
							/>
						</div>
						<div className=" ">
							<div className="text-center px-14">
								<h2 className="  text-3xl font-bold">
									{userData?.name}
								</h2>
								<p className="text-gray-400 mt-2">
									{userData?.email}
								</p>
								<p className="mt-2 text-gray-600">
									{userData?.education}
								</p>
								<p className="mt-2 text-gray-600">
									{userData?.location}
								</p>
								<p className="mt-2 text-gray-600">
									{userData?.phone}
								</p>
								<div className="flex justify-between">
									{userData?.linkedin && (
										<a
											href={userData.linkedin}
											target="_blank"
											className="btn btn-link text-green-700"
										>
											LinkedIn
										</a>
									)}
									{userData?.facebook && (
										<a
											href={userData.facebook}
											target="_blank"
											className="btn btn-link text-blue-700"
										>
											Facebook
										</a>
									)}
								</div>
							</div>
							<hr className="mt-6" />
							<form className="px-8" onSubmit={handleEdit}>
								{isEdit && (
									<>
										<div className="mt-4">
											<div className="flex items-center justify-between">
												<label
													htmlFor="name"
													className="block text-sm   dark:text-gray-200"
												>
													Full name
												</label>
											</div>

											<input
												type="text"
												name="name"
												required
												defaultValue={userData?.name}
												className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 rounded-md  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>
										<div className="mt-4">
											<div className="flex items-center justify-between">
												<label
													htmlFor="bio"
													className="block text-sm   dark:text-gray-200"
												>
													Bio
												</label>
											</div>

											<input
												type="text"
												name="bio"
												defaultValue={userData?.bio}
												className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 rounded-md  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>
										<div className="mt-4">
											<div className="flex items-center justify-between">
												<label
													htmlFor="education"
													className="block text-sm   dark:text-gray-200"
												>
													Education
												</label>
											</div>

											<input
												type="text"
												name="education"
												defaultValue={
													userData?.education
												}
												className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 rounded-md  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>
										<div className="mt-4">
											<div className="flex items-center justify-between">
												<label
													htmlFor="location"
													className="block text-sm   dark:text-gray-200"
												>
													Location
												</label>
											</div>

											<input
												type="text"
												name="location"
												defaultValue={
													userData?.location
												}
												className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 rounded-md  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>
										<div className="mt-4">
											<div className="flex items-center justify-between">
												<label
													htmlFor="facebook"
													className="block text-sm   dark:text-gray-200"
												>
													Facebook Link
												</label>
											</div>

											<input
												type="text"
												name="facebook"
												defaultValue={
													userData?.facebook
												}
												className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 rounded-md  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>
										<div className="mt-4">
											<div className="flex items-center justify-between">
												<label
													htmlFor="linkedin"
													className="block text-sm   dark:text-gray-200"
												>
													LinkedIn Link
												</label>
											</div>

											<input
												type="text"
												name="linkedin"
												defaultValue={
													userData?.linkedin
												}
												className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 rounded-md  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>
										<div className="mt-4">
											<div className="flex items-center justify-between">
												<label
													htmlFor="phone"
													className="block text-sm   dark:text-gray-200"
												>
													Phone
												</label>
											</div>

											<input
												type="number"
												name="phone"
												minLength={8}
												defaultValue={userData?.phone}
												className="block w-full px-4 py-2 mt-2 text-gray-700 bg-base-100 rounded-md  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
											/>
										</div>

										<div className="mt-4">
											<input type="file" name="image" />
										</div>
									</>
								)}
								<div>
									{!isEdit ? (
										<div className="flex justify-center w-full">
											<button
												onClick={() => setIsEdit(true)}
												className="text-center btn btn-link text-red-600 cursor-pointer "
											>
												<p>Edit</p>
											</button>
										</div>
									) : (
										<div className="grid grid-cols-2">
											<input
												type="submit"
												value="Save"
												className="text-center cursor-pointer btn btn-link text-green-600"
											/>
											<button
												className="text-centercursor-pointer btn btn-link btn-secondary text-yellow-600"
												onClick={() => setIsEdit(false)}
											>
												Hide
											</button>
										</div>
									)}
								</div>
							</form>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default MyProfile
