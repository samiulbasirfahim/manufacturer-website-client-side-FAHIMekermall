import React from "react"
import { useQuery } from "react-query"
import Spinner from "../../Components/Spinner"
import SinglePart from "./PartsComponents/SinglePart"

const Parts = () => {
	const {
		isLoading,
		error,
		data: parts,
	} = useQuery("repoData", () =>
		fetch("http://localhost:4000/part?limit=3").then((res) => res.json())
	)
	if (isLoading) {
		return <Spinner />
	}
	return (
		<div id="items">
			<div className="container mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 pb-24 px-6">
				{parts.map((part) => (
					<SinglePart part={part} />
				))}
			</div>
		</div>
	)
}

export default Parts
