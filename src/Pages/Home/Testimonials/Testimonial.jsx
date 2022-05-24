import React from "react"

const Testimonial = ({ data }) => {
	return (
		<div class="py-8">
			<div class="bg-white dark:bg-gray-800  border rounded-md border-gray-200 dark:border-gray-700  relative sm:p-10 p-6">
				<div>
					<img
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
						alt="commas"
					/>
				</div>

				<p class="text-base leading-6 text-gray-600 dark:text-white  mt-4">
					{data.review}
				</p>
				<div class="absolute bottom-0 -mb-4 ml-10">
					<img
						class="dark:hidden"
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
						alt="sharp"
					/>
				</div>
			</div>
			<div class="flex items-center mt-7">
				<div class="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
					<img
						src={data.authorImageUrl}
						class="w-10 h-10 rounded-full"
						alt="profile"
					/>
				</div>
				<div class="flex flex-col items-start ml-4">
					<p class="text-base font-semibold leading-4 text-gray-800 dark:text-white ">
						{data.author}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
