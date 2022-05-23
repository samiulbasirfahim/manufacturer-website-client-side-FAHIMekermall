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
		<div>
			{parts.map((part) => (
				<SinglePart part={part} />
			))}
		</div>
	)
}

export default Parts
