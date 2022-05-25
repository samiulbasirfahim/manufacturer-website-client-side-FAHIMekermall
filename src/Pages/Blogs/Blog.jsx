import React from "react"

const Blog = ({ title, description }) => {
	return (
		<div className="mt-12 px-2 container mx-auto bg-base-200 py-2 rounded">
			<p className="font-bold font-2xl">{title}</p>
			<p>{description}</p>
		</div>
	)
}

export default Blog
