import axios from "axios"
import React from "react"
import toast from "react-hot-toast"

const handleSendEmail = (event) => {
	event.preventDefault()
	const data = {
		name: event.target.name.value,
		subject: event.target.subject.value,
		text: event.target.text.value,
	}
	axios({
		method: "POST",
		url: "https://manufacturer-website-server.herokuapp.com/email",
		data: {
			...data,
		},
	}).then(({ data }) => {
		if (data.messageId) {
			event.target.reset()
			toast.success(data.message)
		}
	})
}

const Contact = () => {
	return (
		<div>
			<div className="w-full flex items-center justify-center my-12">
				<form
					onSubmit={handleSendEmail}
					className=" dark:bg-gray-800 shadow rounded py-12 lg:px-28 px-8 w-full md:w-1/2"
				>
					<p className="md:text-3xl text-xl font-bold leading-7 text-center   dark:text-white">
						Let’s chat
					</p>
					<div className="md:flex items-center mt-12">
						<div className="w-full flex flex-col md:mt-0 mt-4">
							<label className="text-base font-semibold leading-none    dark:text-white">
								Your name
							</label>
							<input
								required
								type="text"
								name="name"
								className="text-base leading-none    p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-base-100 border rounded border-gray-200   "
								placeholder="Please input your name"
							/>
						</div>
					</div>
					<div className="md:flex items-center mt-8">
						<div className="w-full flex flex-col">
							<label className="text-base font-semibold leading-none    dark:text-white">
								Subject
							</label>
							<input
								type="text"
								name="subject"
								className="text-base leading-none    p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-base-100 border rounded border-gray-200   "
								placeholder="Please input company name"
							/>
						</div>
					</div>
					<div>
						<div className="w-full flex flex-col mt-8">
							<label className="text-base font-semibold leading-none    dark:text-white">
								Message
							</label>
							<textarea
								name="text"
								className="h-36 text-base leading-none    p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-base-100 border rounded border-gray-200    resize-none"
							></textarea>
						</div>
					</div>

					<div className="flex items-center justify-center w-full">
						<input
							type="submit"
							value="Send"
							className="btn px-6 mt-5"
						/>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact
