import React, { useEffect, useState } from "react"

const BusinessStats = () => {
	const [totalUsers, setTotalUsers] = useState(0)
	useEffect(() => {
		fetch("http://localhost:4000/user/count")
			.then((res) => res.json())
			.then((res) => setTotalUsers(res.count))
	}, [])
	const [totalParts, setTotalParts] = useState(0)
	useEffect(() => {
		fetch("http://localhost:4000/part/count")
			.then((res) => res.json())
			.then((res) => setTotalParts(res.count))
	}, [])
	return (
		<div name="about" className="w-full my-32">
			<div className="max-w-[1240px] mx-auto">
				<div className="text-center">
					<h2 className="text-5xl font-bold uppercase">
						Millions business trust us
					</h2>
					<p className="text-3xl py-6 text-gray-500">
						Try to understand user expectation
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-1 px-2 text-center">
					<div className="border py-8 rounded-xl shadow-xl">
						<p className="text-6xl font-bold text-indigo-600">
							{totalParts}
						</p>
						<p className="text-gray-400 mt-2">Products</p>
					</div>
					<div className="border py-8 rounded-xl shadow-xl">
						<p className="text-6xl font-bold text-indigo-600">
							432 +
						</p>
						<p className="text-gray-400 mt-2">Feedbacks +</p>
					</div>
					<div className="border py-8 rounded-xl shadow-xl">
						<p className="text-6xl font-bold text-indigo-600">
							{totalUsers}
						</p>
						<p className="text-gray-400 mt-2">Users</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BusinessStats
