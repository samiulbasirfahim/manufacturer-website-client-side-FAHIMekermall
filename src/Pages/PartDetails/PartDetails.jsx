import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axiosAuth from "../../Axios/axiosAuth"
import Spinner from "../../Components/Spinner"
import RecommendedParts from "./PartDetailsComponents/RecommentedParts"
import { motion } from "framer-motion"

const PartDetails = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const handleBack = () => {
		navigate(-1)
	}

	const [data, setData] = useState({})
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		axiosAuth(
			"https://manufacturer-website-server.herokuapp.com/part/" + id
		).then(({ data }) => {
			setIsLoading(false)
			setData(data)
		})
	}, [id])
	if (isLoading) {
		return <Spinner />
	}
	return (
		<div>
			{isLoading && <Spinner />}
			<div className="fixed top-0 w-full bg-base-200 backdrop-blur-md">
				<div className="max-w-[1444px] w-full lg:px-4 px-2 mx-auto flex justify-between items-center z-50 h-16">
					<button
						onClick={handleBack}
						className="btn rounded-none btn-xl btn-outline px-6 py-2"
					>
						Back
					</button>
					<p className="font-bold text-2xl text-secondary">
						{data?.title}
					</p>
				</div>
			</div>
			<div className="container mx-auto">
				<div>
					<motion.div
						animate={{ y: [-100, 0] }}
						id="top"
						className="flex items-center justify-center h-[60vh]"
					>
						<img
							className="lg:max-w-lg md:max-w-sm max-w-xs"
							src={data?.imageUrl}
							alt=""
						/>
					</motion.div>
					<div className="flex flex-col items-center">
						<p className="text-center text-md font-semibold text-secondary">
							$ {data?.price}
						</p>
						<p className="text-center text-4xl font-bold text-primary font-mono">
							{data?.title}
						</p>
						<p className="text-center text-md font-semibold text-secondary">
							<span className="text-yellow-700">
								min {data?.minOrderQuantity}
							</span>{" "}
							<span className="text-purple-700">
								available {data?.availableQuantity}
							</span>
						</p>
						<div>
							<motion.button
								animate={{ y: [-1000, 0] }}
								className="btn btn-primary sm:w-96 rounded-none hover:bg-secondary "
								onClick={() =>
									navigate("/purchase/" + data?._id)
								}
							>
								Purchase now
							</motion.button>
						</div>
						<p className="container mx-auto text-justify text-base-content p-6">
							{data?.description}
						</p>
					</div>
				</div>
			</div>

			<RecommendedParts />
		</div>
	)
}

export default PartDetails
