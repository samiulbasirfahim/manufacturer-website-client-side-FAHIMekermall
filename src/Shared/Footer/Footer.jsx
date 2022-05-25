/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa"

const Footer = () => {
	return (
		<div className="bg-base-300">
			<div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 ">
				<div>
					<h1 className="w-full text-3xl font-bold text-primary">
						SPARK
					</h1>
					<p className="py-4">
						We are confident that we can manufacture the best parts
						for vehicle in world.
					</p>
					<div className="flex justify-between md:w-[75%] my-6">
						<a
							target="_blank"
							href="https://facebook.com/samiulbasirfahim1"
						>
							<FaFacebookSquare size={30} />
						</a>
						<a
							target="_blank"
							href="https://facebook.com/samiulbasirfahim1"
						>
							<FaInstagram size={30} />
						</a>
						<a
							target="_blank"
							href="https://facebook.com/samiulbasirfahim1"
						>
							<FaTwitterSquare size={30} />
						</a>
						<a
							target="_blank"
							href="https://github.com/FAHIMekermall"
						>
							<FaGithubSquare size={30} />
						</a>
					</div>
				</div>
				<div className="lg:col-span-2 flex justify-between mt-6">
					<div>
						<h6 className="font-medium text-gray-400">Solutions</h6>
						<ul>
							<li className="py-2 text-sm cursor-pointer">
								Analytics
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Marketing
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Commerce
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Insights
							</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-gray-400">Support</h6>
						<ul>
							<li className="py-2 text-sm cursor-pointer">
								Pricing
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Documentation
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Guides
							</li>
							<li className="py-2 text-sm cursor-pointer">
								API Status
							</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-gray-400">Company</h6>
						<ul>
							<li className="py-2 text-sm cursor-pointer">
								About
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Blog
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Jobs
							</li>

							<li className="py-2 text-sm cursor-pointer">
								Careers
							</li>
						</ul>
					</div>
					<div>
						<h6 className="font-medium text-gray-400">Legal</h6>
						<ul>
							<li className="py-2 text-sm cursor-pointer">
								Claim
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Press
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Policy
							</li>
							<li className="py-2 text-sm cursor-pointer">
								Terms
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
