import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import axiosAuth from "../../Axios/axiosAuth"
import Spinner from "../../Components/Spinner"
const CheckoutForm = ({ bookingData: { totalPrice }, bookingData }) => {
	const navigate = useNavigate()
	const [clientSecret, setClientSecret] = useState()
	useEffect(() => {
		axiosAuth({
			method: "POST",
			url: "https://manufacturer-website-server.herokuapp.com/payment/intent",
			data: {
				price: totalPrice,
			},
		}).then(({ data }) => {
			if (data.clientSecret) {
				setClientSecret(data.clientSecret)
			} else if (data.message === "Your price is too high") {
				toast.error(
					"Your price is too high, You should contact with us "
				)
			}
		})
	}, [totalPrice])
	const [isLoading, setIsLoading] = useState(false)
	const stripe = useStripe()
	const elements = useElements()
	const [error, setError] = useState("")
	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!stripe || !elements) {
			return
		}
		const card = elements.getElement(CardElement)

		if (card == null) {
			return
		}

		// Use your card Element with other Stripe.js APIs
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card,
		})

		if (error) {
			setError(error.message)
		} else {
			setError("")
		}
		setIsLoading(true)
		stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: card,
					billing_details: {
						name: "Jenny Rosen",
					},
				},
			})
			.then((result) => {
				if (result.error) {
					setError(result.error.message)
				} else if (result.paymentIntent.id) {
					toast.success("Payment successful")
					const transactionId = result.paymentIntent.id
					axiosAuth({
						method: "PUT",
						url:
							"https://manufacturer-website-server.herokuapp.com/booking/pay/" +
							bookingData._id,
						data: {
							transactionId: transactionId,
						},
					}).then(({ data }) => {
						if (data.success) {
							navigate(-1)
							setIsLoading(false)
						}
					})
				}
			})
	}

	return (
		<form onSubmit={handleSubmit}>
			{isLoading && <Spinner />}
			<CardElement
				options={{
					style: {
						base: {
							fontSize: "16px",
							color: "#424770",
							"::placeholder": {
								color: "#aab7c4",
							},
						},
						invalid: {
							color: "#9e2146",
						},
					},
				}}
			/>
			<p className="text-red-600 text-sm">{error}</p>
			<div className="flex justify-center">
				{clientSecret ? (
					<button
						type="submit"
						className="btn mt-12 mx-auto block  btn-outline px-20"
						disabled={!stripe}
					>
						Pay
					</button>
				) : (
					<button className=" loading btn mt-12 mx-auto  btn-outline px-20"></button>
				)}
			</div>
		</form>
	)
}

export default CheckoutForm
