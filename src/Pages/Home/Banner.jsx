import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import Banner1 from "./BannerComponets/Banner1"
import Banner2 from "./BannerComponets/Banner2"
const Banner = () => {
	return (
		<div className="h-screen">
			<Swiper
				navigation={true}
				modules={[Navigation]}
			spaceBetween={20}
				className="h-full"
			>
				<SwiperSlide>
					<Banner1 />
				</SwiperSlide>
				<SwiperSlide>
					<Banner2 />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Banner
