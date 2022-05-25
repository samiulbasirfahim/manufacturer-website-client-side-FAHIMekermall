import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import { Scrollbar } from "swiper"
import Testimonial from "./Testimonial"
import { useQuery } from "react-query"
import Spinner from "../../../Components/Spinner"
import axiosAuth from "../../../Axios/axiosAuth"
const Testimonials = () => {
	const {
		isLoading,
		data: { data } = {},
	} = useQuery("reviewData", () =>
		axiosAuth("https://manufacturer-website-server.herokuapp.com/review/")
	)
	if (isLoading) {
		return <Spinner />
	}

	return (
		<div class="lg:px-20 md:px-6 px-4 pt-12 container mx-auto">
			<div class="flex flex-col items-center justify-center">
				<h1 class="lg:text-4xl text-3xl font-bold text-center text-gray-800 dark:text-white ">
					Hear from our clients
				</h1>
				<p class="text-base leading-6 mt-4 text-center text-gray-600 dark:text-white  2xl:w-2/5 ">
					Here is why you should trust us with your work achievements
				</p>
			</div>
			<Swiper
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					944: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
				}}
				scrollbar={{
					hide: true,
				}}
				modules={[Scrollbar]}
				className="block"
			>
				{data.map((d, index) => {
					return (
						<SwiperSlide key={index}>
							<Testimonial data={d} />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Testimonials
