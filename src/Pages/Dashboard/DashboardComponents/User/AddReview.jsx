import React, { useState } from "react"
import "./Style.css"

const AddReview = () => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)
	return (
		<div className="h-[80vh] w-full flex justify-center items-center">
			<div className="lg:w-1/2 h-2/4 bg-base-200 flex justify-center">
				{[...Array(5)].map((star, index) => {
					index += 1
					return (
						<button
							type="button"
							key={index}
							className={
								index <= (hover || rating)
									? "text-primary"
									: "text-base-100"
							}
							onClick={() => setRating(index)}
							onMouseEnter={() => setHover(index)}
							onMouseLeave={() => setHover(rating)}
						>
							<span className="star text-4xl">&#9733;</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default AddReview
