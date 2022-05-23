import React from "react"
import { useParams } from "react-router-dom"
import RecommendedParts from "./PartDetailsComponents/RecommentedParts"

const PartDetails = () => {
	const { id } = useParams()
	return (
		<div>
			<div id="top" className="flex items-center justify-center h-[60vh]">
				<img
					className="lg:max-w-lg md:max-w-sm max-w-xs"
					src="https://ld-magento-72.template-help.com/magento_63513/pub/media/catalog/product/cache/c165a6606d6711d020e13d566b15eae7/f/y/fyxation-_eastside_negra_bicicleta_urbana_1.jpg"
					alt=""
				/>
			</div>
			<div className="flex flex-col items-center">
				<p className="text-center text-md font-semibold text-secondary">
					In stock
				</p>
				<p className="text-center text-4xl font-bold text-primary font-mono">
					Phoenix kubo
				</p>
				<div>
					<button className="btn btn-primary sm:w-96 rounded-none hover:bg-secondary ">
						Purchase now
					</button>
				</div>
				<p className="container mx-auto text-justify text-base-content p-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					quia quasi provident? Quis doloribus dignissimos numquam ad,
					voluptatibus, quod velit blanditiis libero ipsum architecto
					consectetur a ipsam? Ducimus, vero explicabo. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Molestiae
					doloribus illo dolor, aliquid ullam repellat! Doloremque
					ratione error consequatur corporis veritatis, quas
					accusantium repudiandae vero suscipit sunt fuga excepturi
					minus? Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Quam dicta nostrum eveniet quibusdam labore, commodi
					ullam perspiciatis sapiente optio alias fugiat? Doloribus ab
					ad provident, nihil pariatur saepe hic voluptas.lorem Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Ratione
					rem sed praesentium, delectus totam corrupti corporis quae!
					Dolore vel enim, doloribus labore ratione tenetur distinctio
					veniam, tempora, sint eius praesentium.
				</p>
			</div>

			<RecommendedParts />
		</div>
	)
}

export default PartDetails
