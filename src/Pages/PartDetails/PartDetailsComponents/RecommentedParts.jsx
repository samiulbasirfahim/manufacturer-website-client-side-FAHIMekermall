import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import RecommendedPart from "./RecommentedPart"
const RecommendedParts = () => {
	const slideItems = (
		<>
			<SwiperSlide>
				<RecommendedPart />
			</SwiperSlide>
			<SwiperSlide>
				<RecommendedPart />
			</SwiperSlide>
			<SwiperSlide>
				<RecommendedPart />
			</SwiperSlide>
			<SwiperSlide>
				<RecommendedPart />
			</SwiperSlide>
			<SwiperSlide>
				<RecommendedPart />
			</SwiperSlide>
			<SwiperSlide>
				<RecommendedPart />
			</SwiperSlide>
			<SwiperSlide>
				<RecommendedPart />
			</SwiperSlide>
		</>
	)

	return (
		<div className="md:flex w-full justify-between pb-20">
			<div className="w-full flex items-center">
				<p className="flex-1 w-full text-center my-12 text-4xl font-bold font-mono">
					You may like
				</p>
			</div>
			<div className="flex-1">
				<div className="hidden w-[70vw]  md:block">
					<Swiper
						navigation={true}
						modules={[Navigation]}
						slidesPerView={3}
						spaceBetween={10}
					>
						{slideItems}
					</Swiper>
				</div>
				<div className="md:hidden">
					<Swiper
						navigation={true}
						modules={[Navigation]}
						slidesPerView={1}
					>
						{slideItems}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default RecommendedParts
