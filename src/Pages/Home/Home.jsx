import React from "react"
import BusinessStats from "./BusinessStats"
import Banner from "./Banner"
import Brands from "./Brands"
import Parts from "./Parts"
import Support from "./Support"

const Home = () => {
	return (
		<div className="pb-32">
			<Banner />
			<p className=" w-full text-center my-12 text-4xl font-bold font-mono">
				Latest items
			</p>
			<Parts />
			<BusinessStats />
			<Brands />
			<Support />
		</div>
	)
}

export default Home
