import React from "react"

const Testimonial = ({ data }) => {
	return (
		<div className="py-8">
			<div className="bg-white dark:bg-gray-800  border rounded-md border-gray-200 dark:border-gray-700  relative sm:p-10 p-6">
				<div className="flex justify-between">
					<img
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
						alt="commas"
					/>
					<div className="">
						{data.rating &&
							[...Array(5)].map((d, index) => (
								<span
									className={
										index < data.rating
											? "text-2xl text-primary"
											: "text-2xl text-base-200"
									}
								>
									&#9733;
								</span>
							))}
					</div>
				</div>

				<p className="text-base leading-6 text-gray-600 dark:text-white  mt-4">
					{data.review}
				</p>
				<div className="absolute bottom-0 -mb-4 ml-10">
					<img
						className="dark:hidden"
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
						alt="sharp"
					/>
				</div>
			</div>
			<div className="flex items-center mt-7">
				<div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
					<img
						src={data.authorImageUrl}
						className="w-10 h-10 rounded-full"
						alt="profile"
					/>
				</div>
				<div className="flex flex-col items-start ml-4">
					<p className="text-base font-semibold leading-4   dark:text-white ">
						{data.author}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
