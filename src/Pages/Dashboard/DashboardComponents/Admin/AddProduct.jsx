import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import auth from "../../../../firebase.init"

const AddProduct = () => {
	const [user] = useAuthState(auth)
	const handleAddProduct = (event) => {
		event.preventDefault()
		const productInfo = {
			title: event.target.title.value,
			category: event.target.category.value,
			description: event.target.description.value,
			minOrderQuantity: event.target.minOrderQuantity.value,
			availableQuantity: event.target.availableQuantity.value,
			price: event.target.price.value,
			addedBy: user.email,
		}
		const image = event.target.image.files[0]
		const formData = new FormData()
		formData.append("image", image)
		fetch(
			"https://api.imgbb.com/1/upload?key=" +
				process.env.REACT_APP_imagebb_key,
			{
				method: "POST",

				body: formData,
			}
		)
			.then((response) => response.json())
			.then((data) => {
				if (data.data.url) {
					productInfo.imageUrl = data?.data?.url
					fetch("http://localhost:4000/part", {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(productInfo),
					})
						.then((response) => response.json())
						.then((data) => {
							if (data.part._id) {
								event.target.reset()
								toast.success("Product added successfully")
							}
						})
				}
			})
	}

	return (
		<div className="flex flex-no-wrap Item-start">
			<form className="w-full" onSubmit={handleAddProduct}>
				<div className="mt-4 px-2 lg:px-7">
					<p className="text-xl font-semibold leading-tight text-gray-800">
						Add Item
					</p>
					<div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
						<div>
							<p className="text-base font-medium leading-none text-gray-800">
								Title
							</p>
							<input
								className="w-full p-3 mt-4 border rounded outline-none bg-base-100"
								type={"text"}
								name="title"
								required
								placeholder="Items Title"
							/>
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
								required
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
								required
								placeholder="Price"
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
								name="image"
								required
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
								name="availableQuantity"
								defaultValue={50}
								min={50}
								required
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
								name="minOrderQuantity"
								min={50}
								required
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
							required
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
