import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import Spinner from "../../Components/Spinner"
import auth from "../../firebase.init"
import CheckoutForm from "./CheckOutForm"

const Payment = () => {
	const stripePromise = loadStripe(
		"pk_test_51L1XT2EHW7WyLfRPwcI1T68uk3yL24CHu00OshCSQRkYpsW9kfkSkmaXAY6Px7Rv8CyFw9Qu31NLF9oKf1YfBfKw00F40k4EaY"
	)
	const [user] = useAuthState(auth)
	const { id } = useParams()
	const { isLoading, data: bookingData } = useQuery(["bookingData", id], () =>
		fetch("http://localhost:4000/booking/getOne/" + id, {
			headers: {
				authorization_email: user.email,
				authorization_token: `Bearer ${localStorage.getItem(
					"authorization_token"
				)}`,
			},
		}).then((res) => res.json())
	)

	if (isLoading) {
		return <Spinner />
	}
	console.log(bookingData)
	return (
		<div className="2xl:container 2xl:mx-auto py-14 px-4 md:px-6 xl:px-20">
			<div className="flex flex-col xl:flex-row justify-center items-center space-y-10 xl:space-y-0 xl:space-x-8">
				<div className="w-full lg:w-9/12 xl:w-full">
					<img
						className="w-full hidden xl:block"
						src={bookingData.imageUrl}
						alt="wardrobe "
					/>
					<img
						className="w-full hidden md:block xl:hidden"
						src={bookingData.imageUrl}
						alt="wardrobe "
					/>
					<img
						className="w-full md:hidden"
						src={bookingData.imageUrl}
						alt="wardrobe "
					/>
				</div>
				<div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
					<h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left">
						{bookingData.title}
					</h3>

					<div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
						<div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
							<div className="w-40 md:w-32">
								<img
									className="hidden md:block"
									src={bookingData.imageUrl}
									alt="girl-in-red-dress"
								/>
								<img
									className="md:hidden "
									src={bookingData.imageUrl}
									alt="girl-in-red-dress"
								/>
							</div>
							<div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
								<div className="flex flex-col md:flex-shrink-0  justify-start items-start">
									<h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  ">
										{bookingData.partTitle}
									</h3>
									<div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
										<p className="text-sm leading-none ">
											Category:
											<span className="">
												{bookingData.category}
											</span>
										</p>
										<p className="text-sm leading-none ">
											Quantity:
											<span className="">
												{bookingData.quantity}
											</span>
										</p>
									</div>
								</div>
								<div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
									<p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6">
										$ {bookingData.totalPrice}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
						<div className="flex justify-between items-start flex-col md:flex-row  w-full md:w-auto space-y-8 md:space-y-0 md:space-x-14 xl:space-x-8  lg:w-full">
							<div className="flex jusitfy-start items-start flex-col space-y-2">
								<p className="text-base font-semibold leading-4 ">
									Billing Address
								</p>
								<p className="text-sm leading-5 ">
									{bookingData.address}
								</p>
							</div>
							<div className="flex jusitfy-start items-start flex-col space-y-2">
								<p className="text-base font-semibold leading-4  ">
									Phone Number
								</p>
								<p className="text-sm leading-5 ">
									{bookingData.phone}
								</p>
							</div>
						</div>
						<div className="flex flex-col space-y-4 w-full">
							<Elements stripe={stripePromise}>
								<CheckoutForm bookingData={bookingData} />
							</Elements>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Payment
