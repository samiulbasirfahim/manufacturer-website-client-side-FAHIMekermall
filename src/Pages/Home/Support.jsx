import React from "react"

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline"
import { ChipIcon, SupportIcon } from "@heroicons/react/solid"
import { useNavigate } from "react-router-dom"

const Support = () => {
	const navigate = useNavigate()
	return (
		<div name="support" className="w-full mt-24">
			<div className="max-w-[1240px] mx-auto relative">
				<div className="px-4 py-12">
					<h2 className="text-3xl pt-6 font-bold uppercase text-center text-secondary">
						Support
					</h2>
					<h3 className="text-5xl font-bold py-6 text-center">
						Finding the right team
					</h3>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 ">
					<div className="bg-base-300 rounded-xl shadow-2xl">
						<div className="p-8">
							<PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
							<h3 className="font-bold text-2xl my-6 ">Sales</h3>
							<p className=" text-xl">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Excepturi provident iure
								placeat blanditiis ea sint earum hic iste
								quibusdam exercitationem.
							</p>
						</div>
						<div
							className="bg-primary pl-8 py-4 cursor-pointer"
							onClick={() => navigate("/contact-us")}
						>
							<p className="flex items-center text-base-100">
								Contact Us{" "}
								<ArrowSmRightIcon className="w-5 ml-2" />
							</p>
						</div>
					</div>
					<div className="bg-base-300  rounded-xl shadow-2xl">
						<div className="p-8">
							<SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
							<h3 className="font-bold text-2xl my-6">
								Technical Support
							</h3>
							<p className=" text-xl">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Excepturi provident iure
								placeat blanditiis ea sint earum hic iste
								quibusdam exercitationem.
							</p>
						</div>
						<div
							className="bg-primary pl-8 py-4 cursor-pointer"
							onClick={() => navigate("/contact-us")}
						>
							<p className="flex items-center text-base-100">
								Contact Us{" "}
								<ArrowSmRightIcon className="w-5 ml-2" />
							</p>
						</div>
					</div>
					<div className="bg-base-300  rounded-xl shadow-2xl">
						<div className="p-8">
							<ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
							<h3 className="font-bold text-2xl my-6">
								Media Inquiries
							</h3>
							<p className="text-xl">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Excepturi provident iure
								placeat blanditiis ea sint earum hic iste
								quibusdam exercitationem.
							</p>
						</div>
						<div
							className="bg-primary pl-8 py-4 cursor-pointer"
							onClick={() => navigate("/contact-us")}
						>
							<p className="flex items-center text-base-100">
								Contact Us
								<ArrowSmRightIcon className="w-5 ml-2" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Support
