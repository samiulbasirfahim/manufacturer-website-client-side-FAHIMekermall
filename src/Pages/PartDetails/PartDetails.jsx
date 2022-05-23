import React from "react"
import { useParams } from "react-router-dom"

const PartDetails = () => {
	const { id } = useParams()
	return (
		<div>
			<div className="flex items-center justify-center h-[60vh]">
				<img
					className="lg:max-w-lg max-w-md"
					src="https://ld-magento-72.template-help.com/magento_63513/pub/media/catalog/product/cache/c165a6606d6711d020e13d566b15eae7/f/y/fyxation-_eastside_negra_bicicleta_urbana_1.jpg"
					alt=""
				/>
			</div>
			<div className="flex flex-col items-center">
				<p className="text-center text-md font-semibold text-secondary">
					In stock
				</p>
				<p className="text-center text-3xl font-bold text-primary">
					Phoenix kubo
				</p>
			</div>
		</div>
	)
}

export default PartDetails
