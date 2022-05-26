import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const SinglePart = ({
	part: {
		_id,
		title,
		imageUrl,
		description,
		minOrderQuantity,
		availableQuantity,
		price,
	},
	isNew,
}) => {
	const navigate = useNavigate()
	return (
		<motion.div
			animate={{ x: [-1000, 0] }}
			className="flex flex-col max-w-md lg:px-12 px-6 shadow-md py-8 relative bg-base-200"
		>
			{isNew && (
				<p className="bg-accent-content absolute top-[-15px] left-[-15px] font-bold lowercase px-2 py-1 rounded-2xl">
					New
				</p>
			)}
			<div
				id="product-image"
				className="relative flex justify-center items-center"
			>
				<img src={imageUrl} alt="" />
				<div className="absolute md:flex flex-col md:flex-row justify-evenly items-center hidden">
					<button
						className="btn btn-primary rounded-none hidden m-4 purchase-btn"
						onClick={() => navigate("/purchase/" + _id)}
					>
						Purchase Now
					</button>
					<a
						href="#top"
						onClick={() => navigate(`/part/${_id}#top`)}
						className="btn btn-primary rounded-none hidden purchase-btn h-12 items-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className="">
				<div className="flex justify-between items-center md:hidden">
					<button
						className="btn btn-primary rounded-none  m-4 purchase-btn"
						onClick={() => navigate("/purchase/" + _id)}
					>
						Purchase Now
					</button>
					<a
						href="#top"
						onClick={() => navigate(`/part/${_id}#top`)}
						className="btn btn-primary rounded-none purchase-btn h-12 items-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</a>
				</div>
				<p className="font-semibold py-6 text-4xl font-mono text-primary text-center">
					{title}
				</p>
				<div className="flex justify-between items-center">
					<p className="font-mono text-3xl text-gray-7001">
						${price}
					</p>
				</div>
				<p>
					{description.length > 50
						? description.slice(0, 50) + "..."
						: description}
				</p>
				<span className="flex flex-col md:flex-row justify-between w-full text-primary font-semibold font-mono py-4">
					<p>Min Orders: {minOrderQuantity}</p>{" "}
					<p className="">Available: {availableQuantity}</p>
				</span>
			</div>
		</motion.div>
	)
}

export default SinglePart
