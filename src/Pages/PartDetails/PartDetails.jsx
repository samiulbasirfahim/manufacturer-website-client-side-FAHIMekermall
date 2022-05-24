import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import RecommendedParts from "./PartDetailsComponents/RecommentedParts"

const PartDetails = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const handleBack = () => {
		navigate(-1)
	}

	const [data, setData] = useState({})

	useEffect(() => {
		fetch("http://localhost:4000/part/" + id)
			.then((res) => res.json())
			.then((data) => setData(data))
	}, [id])

	return (
		<div>
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
					<div
						id="top"
						className="flex items-center justify-center h-[60vh]"
					>
						<img
							className="lg:max-w-lg md:max-w-sm max-w-xs"
							src={data?.imageUrl}
							alt=""
						/>
					</div>
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
							<button
								className="btn btn-primary sm:w-96 rounded-none hover:bg-secondary "
								onClick={() =>
									navigate("/purchase/" + data?._id)
								}
							>
								Purchase now
							</button>
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
