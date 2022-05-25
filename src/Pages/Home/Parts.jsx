import React from "react"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import SinglePart from "./PartsComponents/SinglePart"

const Parts = () => {
	const { isLoading, data: parts } = useQuery("repoData", () =>
		fetch(
			"https://manufacturer-website-server.herokuapp.com/part?limit=3&sort=1"
		).then((res) => res.json())
	)
	if (isLoading) {
		return <Spinner />
	}
	return (
		<div id="items" className="flex flex-col justify-center">
			<div className="container mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 pb-24 px-6">
				{parts.length > 0 &&
					parts.map((part) => (
						<SinglePart key={part._id} part={part} isNew={true} />
					))}
			</div>
			<Link
				to="/parts"
				className="btn rounded-none btn-lg btn-primary mx-auto"
			>
				Explore more
			</Link>
		</div>
	)
}

export default Parts
