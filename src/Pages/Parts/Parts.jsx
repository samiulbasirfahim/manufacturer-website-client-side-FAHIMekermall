import React from "react"
import { useQuery } from "react-query"
import Spinner from "../../Components/Spinner"
import SinglePart from "../Home/PartsComponents/SinglePart"

const Parts = () => {
	const {
		isLoading,
		error,
		data: parts,
	} = useQuery("repoData", () =>
		fetch("http://localhost:4000/part").then((res) => res.json())
	)
	if (isLoading) {
		return <Spinner />
	}
	return (
		<div className="container mt-20 mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 pb-24 px-6">
			{parts.map((part) => (
				<SinglePart part={part} />
			))}
		</div>
	)
}

export default Parts
