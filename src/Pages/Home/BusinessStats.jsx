import React, { useEffect, useState } from "react"

const BusinessStats = () => {
	const [totalUsers, setTotalUsers] = useState(0)
	useEffect(() => {
		fetch("http://localhost:4000/user/count")
			.then((res) => res.json())
			.then((res) => setTotalUsers(res.count))
	}, [])
	const [totalParts, setTotalParts] = useState(0)
	useEffect(() => {
		fetch("http://localhost:4000/part/count")
			.then((res) => res.json())
			.then((res) => setTotalParts(res.count))
	}, [])
	return (
		<div name="about" className="w-full my-32">
			<h1 class="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 dark:text-white sm:mb-0 mb-12">
				More Than 5 Years We Provide Service
				<br class="md:block hidden" />
				in manufacturer Industry
			</h1>
			<div class="md:mt-14 mt-4 relative sm:flex items-center justify-center">
				<img
					src="https://i.ibb.co/KjrPCyW/map.png"
					alt="world map image"
					class="w-full xl:h-full h-96 object-cover object-fill sm:block hidden"
				/>
				<img
					src="https://i.ibb.co/SXKj9Mf/map-bg.png"
					alt="mobile-image"
					class="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0"
				/>

				<div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white dark:bg-gray-800 sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
					<p class="text-3xl font-semibold text-gray-800 dark:text-white">
						{totalParts}
					</p>
					<p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600 dark:text-gray-200">
						Recently manufacturer parts
					</p>
				</div>
				<div class="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white dark:bg-gray-800 sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
					<p class="text-3xl font-semibold text-gray-800 dark:text-white">
						{totalUsers}
					</p>
					<p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600 dark:text-gray-200">
						Active User
					</p>
				</div>
				<div class="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white dark:bg-gray-800 dark:bg-gray-800 sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
					<p class="text-3xl font-semibold text-gray-800 dark:text-white">
						15K+
					</p>
					<p class="text-base leading-4 xl:mt-4 mt-2 text-gray-600 dark:text-gray-200">
						Feedbacks +
					</p>
				</div>
			</div>
		</div>
	)
}

export default BusinessStats
