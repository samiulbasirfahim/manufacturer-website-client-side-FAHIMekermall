import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useQuery } from "react-query"
import axiosAuth from "../../../../Axios/axiosAuth"
import Spinner from "../../../../Components/Spinner"
import auth from "../../../../firebase.init"

const AddReview = () => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)
	const [user] = useAuthState(auth)
	const { isLoading, data: { data: userData } = {} } = useQuery(
		"userData",
		() =>
			axiosAuth(
				"https://manufacturer-website-server.herokuapp.com/user/" +
					user.email
			)
	)

	if (isLoading) {
		return <Spinner />
	}

	const handleReview = (event) => {
		event.preventDefault()
		const review = {
			rating: rating,
			authorImageUrl: userData.imageUrl,
			review: event.target.review.value,
			author: userData.name,
			authorEmail: userData.email,
		}
		axiosAuth({
			method: "POST",
			url: "https://manufacturer-website-server.herokuapp.com/review",
			data: review,
		}).then(({ data }) => {
			if (data.part._id) {
				toast.success("Review successfully")
				event.target.reset()
			} else {
				toast.error("Something went wrong")
			}
		})
	}

	return (
		<div className="h-[80vh] w-full flex justify-center items-center">
			<form
				onSubmit={handleReview}
				className="lg:w-1/2 py-12 bg-base-200 grid grid-cols-1 justify-items-center rounded-md shadow-xl px-16 items-center"
			>
				<div className="flex justify-center items-center flex-col">
					<div>
						{[...Array(5)].map((star, index) => {
							index += 1
							return (
								<button
									type="button"
									key={index}
									className={
										index <= (hover || rating)
											? "text-primary bg-transparent border-0 outline-none cursor-pointer"
											: "text-base-content/40 bg-transparent border-0 outline-none cursor-pointer"
									}
									onClick={() => setRating(index)}
									onMouseEnter={() => setHover(index)}
									onMouseLeave={() => setHover(rating)}
								>
									<span className="star text-4xl">
										&#9733;
									</span>
								</button>
							)
						})}
					</div>
					<p className="text-xl font-bold font-mono">{rating}</p>
				</div>

				<div className="mt-4 w-full">
					<div className="flex items-center justify-between w-full">
						<label
							htmlFor="review"
							className="block text-sm text-gray-800 dark:text-gray-200"
						>
							Review
						</label>
					</div>

					<textarea
						type="text"
						required
						rows={5}
						name="review"
						className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-[#2a303c] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
					/>
				</div>
				<input
					disabled={rating === 0}
					type="submit"
					value="Submit"
					className="btn w-full mt-8"
				/>
			</form>
		</div>
	)
}

export default AddReview
