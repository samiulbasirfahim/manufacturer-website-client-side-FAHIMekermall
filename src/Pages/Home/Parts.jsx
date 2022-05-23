import React from "react"
import SinglePart from "./PartsComponents/SinglePart"

const Parts = () => {
	return (
		<div id="items">
			<p className='w-full text-center my-12 text-4xl font-bold font-mono'>Latest items</p>
			<div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12">
				<SinglePart />
				<SinglePart />
				<SinglePart />
				<SinglePart />
				<SinglePart />
				<SinglePart />
			</div>
		</div>
	)
}

export default Parts
