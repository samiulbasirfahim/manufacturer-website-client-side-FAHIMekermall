import React from "react"
import { useQuery } from "react-query"
import axiosAuth from "../../../../Axios/axiosAuth"
import Spinner from "../../../../Components/Spinner"
import ProductTable from "./ProductTable"

const ManageProduct = () => {
	const {
		isLoading,
		refetch,
		data: { data: parts } = {},
	} = useQuery(["allParts"], () =>
		axiosAuth("https://manufacturer-website-server.herokuapp.com/part/")
	)
	return (
		<div>
			<div className="">
				{isLoading && <Spinner />}
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg  bg-base-300 lg:mx-10 mx-2">
					{parts && <ProductTable parts={parts} refetch={refetch} />}
					{parts?.length === 0 && (
						<div>
							<p className="text-center text-3xl font-bold py-28">
								No Items available
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ManageProduct
