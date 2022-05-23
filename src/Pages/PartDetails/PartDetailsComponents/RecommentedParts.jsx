import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import RecommendedPart from "./RecommentedPart"
import Spinner from "../../../Components/Spinner"
import { useQuery } from "react-query"
const RecommendedParts = () => {
	const {
		isLoading,
		error,
		data: parts,
	} = useQuery("repoData", () =>
		fetch("http://localhost:4000/part?limit=10").then((res) => res.json())
	)
	if (isLoading) {
		return <Spinner />
	}

	const slideItems = parts.map((part) => (
		<SwiperSlide>
			<RecommendedPart />
		</SwiperSlide>
	))

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
				</Swiper>
			</div>
		</div>
	)
}

export default RecommendedParts
