import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import RecommendedPart from "./RecommentedPart"
import Spinner from "../../../Components/Spinner"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
const RecommendedParts = () => {
	const navigate = useNavigate()
	const {
		isLoading,
		error,
		data: parts,
	} = useQuery("repoData", () =>
		fetch("https://manufacturer-website-server.herokuapp.com/part?limit=8&sort=2").then((res) =>
			res.json()
		)
	)
	if (isLoading) {
		return <Spinner />
	}

	let slideItems
	if (parts?.length > 0) {
		slideItems = parts.map((part) => (
			<SwiperSlide>
				<RecommendedPart part={part} />
			</SwiperSlide>
		))
	}

	return (
		<div className="pb-20 container mx-auto">
			<p className="text-center my-12 text-4xl font-bold font-mono">
				You may like
			</p>
			<div className="flex">
				<Swiper
					navigation={true}
					modules={[Navigation]}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						944: {
							slidesPerView: 2,
							spaceBetween: 40,
						},
						1444: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
					}}
				>
					{slideItems}
					<SwiperSlide>
						<div className="flex items-center h-full">
							<div className="flex flex-col max-w-md lg:px-12 px-6 shadow-md py-8 relative bg-base-200  mx-6">
								<button
									className="btn btn-primary"
									onClick={() => navigate("/parts")}
								>
									Explore more
								</button>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}

export default RecommendedParts
