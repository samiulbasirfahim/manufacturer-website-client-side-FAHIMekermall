import React from "react"
import SinglePart from "./PartsComponents/SinglePart"

const Parts = () => {
	return (
		<div id="items">
			<div className="container mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 pb-24 px-6">
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
