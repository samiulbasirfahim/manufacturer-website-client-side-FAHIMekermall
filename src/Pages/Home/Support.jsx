import React from "react"

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline"
import { ChipIcon, SupportIcon } from "@heroicons/react/solid"
import { useNavigate } from "react-router-dom"

const Support = () => {
	const navigate = useNavigate()
	return (
		<div name="support " className="w-full mt-4">
			<div className="max-w-[1240px] mx-auto relative">
				<div className="px-4 py-12">
					<h2 className="text-3xl pt-6 font-bold uppercase text-center text-secondary">
						Support
					</h2>
				</div>

				<div className="2xl:container 2xl:mx-auto">
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-10 gap-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
						<div className="flex space-x-4">
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg1.svg"
								alt="Free Shipping"
							/>
							<img
								className="hidden dark:block"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg1dark.svg"
								alt="Free Shipping"
							/>
							<div>
								<p className="text-xl dark:text-white leading-5 font-semibold  ">
									Free Shipping
								</p>
								<p className="text-base leading-6 dark:text-gray-400 font-normal text-gray-600 mt-3">
									Free shipping on orders above $100
								</p>
							</div>
						</div>

						<div className="flex space-x-4">
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg2.svg"
								alt="Support 24/7"
							/>
							<img
								className="hidden dark:block"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg2dark.svg"
								alt="Support 24/7"
							/>
							<div>
								<p className="text-xl dark:text-white leading-5 font-semibold  ">
									Support 24/7
								</p>
								<p className="text-base leading-6 dark:text-gray-400 font-normal text-gray-600 mt-3">
									Contact us 24 hours a day at care@spark.com
								</p>
							</div>
						</div>

						<div className="flex space-x-4">
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3.svg"
								alt="Money Back Guarantee"
							/>
							<img
								className="hidden dark:block"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3dark.svg"
								alt="Money Back Guarantee"
							/>
							<div>
								<p className="text-xl dark:text-white leading-5 font-semibold  ">
									Money Back Guarantee
								</p>
								<p className="text-base leading-6 dark:text-gray-400 font-normal text-gray-600 mt-3">
									If you face eny problem with our parts, you
									can return it
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Support
