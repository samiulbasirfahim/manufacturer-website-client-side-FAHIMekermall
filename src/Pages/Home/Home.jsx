import React from "react"
import Banner from "./Banner"
import Brands from "./Brands"
import Parts from "./Parts"

const Home = () => {
	return (
		<div className="pb-32">
			<Banner />
			<p className=" w-full text-center my-12 text-4xl font-bold font-mono">
				Latest items
			</p>
			<Parts />
			<Brands />
		</div>
	)
}

export default Home
