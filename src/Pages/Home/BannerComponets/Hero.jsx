import React from "react"
import Typed from "react-typed"

const Hero = () => {
	return (
		<div className="bg-[url('https://i.ibb.co/t4RGQYP/andrew-seaman-ZKB9-Bo4z-Cq-Q-unsplash.jpg')] mt-16  bg-center bg-no-repeat bg-fixed bg-cover ">
			<div className="w-full mt-[-96px]  h-screen mx-auto text-center flex flex-col justify-center bg-base-200/50 backdrop-blur-sm">
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
					GROW YOUR BUSINESS WITH US
				</h1>
				<div className="flex justify-center items-center">
					<p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
						Best in bangladesh for manufacture parts of
					</p>
					<Typed
						className="md:text-5xl sm:text-4xl text-xl font-bold md:px-4 px-2 "
						strings={["Car", "Bike", "Cycle"]}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<p className="md:text-2xl text-xl font-bold text-gray-500">
					We are confident that we can manufacture the best parts for
					vehicle in world
				</p>
				<a
					href="#items"
					className=" w-[200px] btn btn-primary mt-8 mx-auto py-3 text-black"
				>
					Explore items
				</a>
			</div>
		</div>
	)
}

export default Hero
