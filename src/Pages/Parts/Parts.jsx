import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Spinner from "../../Components/Spinner"
import SinglePart from "../Home/PartsComponents/SinglePart"

const Parts = () => {
	const [sort, setSort] = useState(0)
	const [limit, setLimit] = useState(10)
	const [parts, setParts] = useState([])
	const [isLoading, setIsLoading] = useState()
	useEffect(() => {
		setIsLoading(true)
		fetch(`http://localhost:4000/part?sort=${sort}&limit=${limit}`)
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(false)
				setParts(data)
			})
	}, [sort, limit])
	return (
		<div className="mt-20">
			{isLoading && <Spinner />}
			<div className="flex justify-end container mx-auto">
				<div>
					<label className="mx-2" htmlFor="sort">
						Sort by
					</label>
					<select
						name="sort"
						id="sort"
						onChange={(e) => {
							setSort(e.target.value)
						}}
					>
						<option selected value="0">
							None
						</option>
						<option value="1">Date</option>
						<option value="2">Price</option>
					</select>
				</div>
				<div>
					<label className="mx-2" htmlFor="limit">
						Per page content
					</label>
					<select
						name="limit"
						id="limit"
						onChange={(e) => {
							setLimit(e.target.value)
						}}
					>
						<option value="5">5</option>
						<option selected value="10">
							10
						</option>
						<option value="15">15</option>
						<option value="20">20</option>
					</select>
				</div>
			</div>
			<div className="container mx-auto grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 pb-24 px-6">
				{parts.map((part) => (
					<SinglePart part={part} />
				))}
			</div>
		</div>
	)
}

export default Parts