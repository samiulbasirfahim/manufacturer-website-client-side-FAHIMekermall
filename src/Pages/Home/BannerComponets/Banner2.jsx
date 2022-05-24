import { motion } from "framer-motion"
import React from "react"

const Banner2 = () => {
	return (
		<div
			animate={{ x: [0, 100, 0] }}
			className="bg-[url('https://i.ibb.co/YkBgR8F/wayne-bishop-7-YUW7fv-IYo-Q-unsplash.jpg')] h-full bg-center bg-no-repeat bg-fixed bg-cover flex justify-between items-center"
		>
			<div className=" container mx-auto">
				<motion.div
					animate={{
						y: [
							0, 100, -100, 90, -90, 80, -80, 70, -70, 60, -60,
							50, -50, 40, -40, 30, -30, 20, -20, 10, -10, 5, -5,
							4, -4, 0,
						],
					}}
					transition={{ duration: 2, times: [0, 0.2, 1] }}
					className="bg-base-100/80 backdrop-blur-xl md:w-[60%] lg:w-[40%] rounded-xl"
				>
					<motion.p className="text-3xl py-6 lg:text-5xl text-center pt-12 font-extrabold text-secondary font-mono">
						World best Automotive parts here
					</motion.p>
					<motion.div
						animate={{
							x: [
								0, 100, -100, 70, -70, 60, -60, 50, -50, 40,
								-40, 10, -10, 5, -5, 4, -4, 0,
							],
						}}
						className="flex justify-center items-center h-full pb-8"
					>
						<button className="btn btn-secondary btn-lg mt-6">
							Explore more
						</button>
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}

export default Banner2
