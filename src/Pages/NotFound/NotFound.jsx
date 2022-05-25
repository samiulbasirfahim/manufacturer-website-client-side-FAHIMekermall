import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./styles.scss"

const NotFound = () => {
	const navigate = useNavigate()
	return (
		<div className="bg-[url('https://i.ibb.co/t4RGQYP/andrew-seaman-ZKB9-Bo4z-Cq-Q-unsplash.jpg')] bg-center bg-no-repeat bg-fixed bg-cover h-screen absolute w-screen top-0 left-0 z-50">
			<div className="text-wrapper bg-base-200/70 backdrop-blur-md">
				<div className="title" data-content="404">
					404
				</div>

				<div
					className="subtitle"
					data-content="Oops, the page you're looking for doesn't exist"
				>
					Oops, the page you're looking for doesn't exist.
				</div>

				<div className="buttons">
					<Link className="btn btn-outline rounded-xl text-secondary" to="/">
						Go to homepage
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NotFound
