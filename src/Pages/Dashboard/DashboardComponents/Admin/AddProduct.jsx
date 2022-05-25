import React from "react"

const AddProduct = () => {
	return (
		<div className="flex flex-no-wrap Item-start">
			<form className="w-full ">
				<div className="mt-4 px-2 lg:px-7">
					<p className="text-xl font-semibold leading-tight text-gray-800">
						Add Item
					</p>
					<div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
						<div>
							<p className="text-base font-medium leading-none text-gray-800">
								Title
							</p>
							<input className="w-full p-3 mt-4 border rounded outline-none bg-base-100" />
							<p className="mt-3 text-xs leading-3 text-gray-600">
								Set Item title
							</p>
						</div>
						<div>
							<p className="text-base font-medium leading-none text-gray-800">
								Category
							</p>

							<select
								className="w-full p-3 mt-4 border border-gray-300 rounded outline-none bg-base-100 "
								name="category"
								id="category"
							>
								<option value="car">Car</option>
								<option value="cycle">Cycle</option>
								<option value="bike">Bike</option>
							</select>
							<p className="mt-3 text-xs leading-3 text-gray-600">
								Set product category
							</p>
						</div>
						<div>
							<p className="text-base font-medium leading-none text-gray-800 ">
								Item price
							</p>
							<input
								name="price"
								type="number"
								className="w-full p-3 mt-4 border border-gray-300 rounded outline-none bg-base-100  "
							/>
							<p className="mt-3 text-xs leading-3 text-gray-600">
								Set a simple and precise meta title
							</p>
						</div>
						<div>
							<p className="text-base font-medium leading-none text-gray-800">
								Item image
							</p>
							<input
								type="file"
								className="w-full p-3 mt-4 border border-gray-300 rounded outline-none bg-base-100  "
							/>
							<p className="mt-3 text-xs leading-[15px] text-gray-600">
								Set item related image
							</p>
						</div>
						<div>
							<p className="text-base font-medium leading-none text-gray-800">
								Item quantity
							</p>
							<input
								type="number"
								defaultValue={50}
								min={50}
								className="w-full p-3 mt-4 border border-gray-300 rounded outline-none bg-base-100  "
							/>
							<p className="mt-3 text-xs leading-3 text-gray-600">
								Set Item quantity (min: 50)
							</p>
						</div>
						<div>
							<p className="text-base font-medium leading-none text-gray-800">
								Minimum order quantity
							</p>
							<input
								type="number"
								min={50}
								defaultValue={50}
								className="w-full p-3 mt-4 border border-gray-300 rounded outline-none bg-base-100  "
							/>
							<p className="mt-3 text-xs leading-[15px] text-gray-600">
								Set minimum order quantity(min: 50)
							</p>
						</div>
					</div>
				</div>
				<div className="pt-6 border-gray-300 mt-2 px-7">
					<p className="text-base font-semibold leading-4 text-gray-800">
						Item description
					</p>
					<div className="mt-2 border border-gray-300 rounded">
						<textarea
							name="description"
							className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600 bg-base-100"
							placeholder="Start typing here ..."
						/>
					</div>
				</div>
				<p className="mt-3 text-xs leading-[15px] text-gray-600 px-7">
					Enter product meta description for better understanding
				</p>
				<hr className="h-[1px] bg-base-100 my-14" />
				<div className="flex flex-col flex-wrap Item-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
					<input
						type="reset"
						className="btn  text-sm font-medium px-6 py-4 border lg:max-w-[95px] w-full"
						value={"Reset"}
					/>
					<input
						type="submit"
						className="btn btn-primary cursor-pointer text-sm font-medium px-6 py-4 lg:max-w-[144px] w-full"
						value="Add product"
					/>
				</div>
			</form>
		</div>
	)
}

export default AddProduct
