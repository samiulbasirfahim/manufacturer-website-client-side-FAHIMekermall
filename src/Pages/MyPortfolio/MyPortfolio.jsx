import React from "react"

const MyPortfolio = () => {
	return (
		<section className="container mx-auto min-h-screen">
			<div className="grid justify-items-center">
				<div className="grid justify-items-start">
					<p className="bg-base-300 px-8 py-3 rounded-lg text-xs md:text-md lg:text-base">
						Hello, I'm a mern stack web application developer
					</p>
					<div className="mt-6">
						<p className="text-3xl lg:text-7xl font-extrabold font-cursive-custom">
							Samiul Basir Fahim
						</p>
						<p className="font-mono text-sm">
							(Developer,Student,Freelancer)
						</p>
						<a
							class="btn btn-link lowercase px-0 text-base text-green-600"
							href="mailto:samiulbasirfahim360@hotmail.com?body=Hello fahim"
						>
							samiulbasirfahim360@hotmail.com
						</a>
					</div>
					<div class="mt-6">
						<p class="border-b-2 border-b-red-600 w-full font-bold text-3xl font-cursive-custom">
							Education:{" "}
						</p>
						<p className="font-mono">
							PEC: 2016(gpa-5, with scholarship)
						</p>
						<p className="font-mono">JSC: 2019(gpa-4.23)</p>
					</div>
					<div class="mt-6">
						<p class="border-b-2 border-b-red-600 w-full font-bold text-3xl font-cursive-custom">
							Technologies:{" "}
						</p>
						<p className="font-mono">React Js</p>
						<p className="font-mono">Node js</p>
						<p className="font-mono">Mongoose</p>
						<p className="font-mono">Javascript</p>
						<p className="font-mono">Bootstrap</p>
						<p className="font-mono">Tailwind Css</p>
						<p className="font-mono">Html, Css</p>
					</div>
					<div class="mt-6">
						<p class="border-b-2 border-b-red-600 w-full font-bold text-3xl font-cursive-custom">
							Best of projects:{" "}
						</p>
						<a href="https://rapid-post.web.app/" target="_blank">
							Rapid post (Assignment 11)
						</a>
						<a
							href="https://blog-post-media.web.app/"
							target="_blank"
						>
							Blog posts
						</a>
						<a href="https://fahim-mondol.cf/" target="_blank">
							My portfolio
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MyPortfolio
