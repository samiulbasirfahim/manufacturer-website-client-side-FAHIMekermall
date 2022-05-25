import React, { useEffect, useState } from "react"
import Spinner from "../../Components/Spinner"
import SinglePart from "../Home/PartsComponents/SinglePart"

const Parts = () => {
	const [sort, setSort] = useState(0)
	const [limit, setLimit] = useState(10)
	const [parts, setParts] = useState([])
	const [isLoading, setIsLoading] = useState()
	const [count, setCount] = useState(0)
	const [totalPage, setTotalPage] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)
	const [category, setCategory] = useState("all")
	useEffect(() => {
		fetch("http://localhost:4000/part/count")
			.then((response) => response.json())
			.then((data) => setCount(data.count))
	}, [])
	useEffect(() => {
		setIsLoading(true)
		fetch(
			`http://localhost:4000/part?sort=${sort}&limit=${limit}&skip=${
				currentPage * limit
			}&category=${category}`
		)
			.then((res) => res.json())
			.then((data) => {
				setIsLoading(false)
				setParts(data)
			})
	}, [sort, limit, currentPage, category])
	useEffect(() => {
		setTotalPage(Math.ceil(count / limit))
	}, [limit, count, sort])
	console.log(category, count)
	return (
		<div className="mt-20">
			{isLoading && <Spinner />}
			<div className="flex justify-end container mx-auto">
				<div>
					<label className="mx-2" htmlFor="sort">
						Category
					</label>
					<select
						name="sort"
						id="sort"
						className="text-primary bg-base-100"
						onChange={(e) => {
							setCategory(e.target.value)
						}}
					>
						<option selected value="all">
							All
						</option>
						<option value="cycle">Cycle</option>
						<option value="bike">Bike</option>
						<option value="car">Car</option>
					</select>
				</div>
				<div>
					<label className="mx-2" htmlFor="sort">
						Sort by
					</label>
					<select
						name="sort"
						id="sort"
						className="text-primary bg-base-100"
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
						Per page
					</label>
					<select
						name="limit"
						id="limit"
						className="text-primary bg-base-100"
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
			<div className="container mx-auto justify-between flex items-center pb-16">
				{currentPage !== 0 ? (
					<button
						onClick={() => setCurrentPage(currentPage - 1)}
						class="flex items-center h-8 btn btn-outline"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
								clip-rule="evenodd"
							/>
						</svg>
						<p>previous</p>
					</button>
				) : (
					<span></span>
				)}
				<div className="flex">
					{[...Array(totalPage).keys()].map((num) => (
						<button
							className={
								currentPage !== num
									? "mx-2 btn btn-sm btn-ghost"
									: "mx-2 btn btn-primary btn-sm"
							}
							onClick={() => setCurrentPage(num)}
						>
							{num + 1}
						</button>
					))}
				</div>

				{currentPage < totalPage - 1 ? (
					<button
						onClick={() => {
							setCurrentPage(currentPage + 1)
						}}
						class="flex items-center h-8 btn btn-outline"
					>
						<p>next</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				) : (
					<span></span>
				)}
			</div>
		</div>
	)
}

export default Parts
