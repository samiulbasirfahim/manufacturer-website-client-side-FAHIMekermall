import React, { useEffect, useState } from "react"

const Brands = () => {
	const [brands, setBrand] = useState([])
	useEffect(() => {
		fetch("Brand.json")
			.then((res) => res.json())
			.then((data) => setBrand(data))
	}, [])

	return (
		<div className="container mx-auto">
			<div>
				<h1 className="text-[#333333] text-[35px] font-mono font-bold text-center uppercase">
					All big companies collaborated with us
				</h1>
				<p className="text-[#E81938] font-extrabold text-center">
					WE MANUFACTURE ALL PARTS
				</p>
			</div>

			<div className=" mt-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-y-6">
				{brands.map((brand, index) => (
					<div key={index}>
						<div className=" mx-auto ">
							<img
								className="shadow-2xl rounded max-w-xs"
								src={brand.img}
								alt=""
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Brands
