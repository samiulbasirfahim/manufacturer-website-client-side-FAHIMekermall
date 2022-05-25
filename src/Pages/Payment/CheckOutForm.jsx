import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
const CheckoutForm = ({ bookingData: { totalPrice }, bookingData }) => {
	const navigate = useNavigate()
	const [clientSecret, setClientSecret] = useState()
	useEffect(() => {
		fetch("http://localhost:4000/payment/intent", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ price: totalPrice }),
		})
			.then((response) => response.json())
			.then((data) => setClientSecret(data.clientSecret))
	}, [totalPrice])

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
					fetch(
						"http://localhost:4000/booking/pay/" + bookingData._id,
						{
							method: "PUT",
							headers: {
								"content-type": "application/json",
							},
							body: JSON.stringify({
								transactionId: transactionId,
							}),
						}
					).then(response => response.json()).then(data => {
						if (data.success) {
							navigate(-1)
						}
					})
				}
			})
	}

	return (
		<form onSubmit={handleSubmit}>
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
			<p class="text-red-600 text-sm">{error}</p>
			<div class="flex justify-center">
				{clientSecret ? (
					<button
						type="submit"
						className="btn mt-12 mx-auto block  btn-outline px-20"
						disabled={!stripe}
					>
						Pay
					</button>
				) : (
					<button class=" loading btn mt-12 mx-auto  btn-outline px-20"></button>
				)}
			</div>
		</form>
	)
}

export default CheckoutForm
