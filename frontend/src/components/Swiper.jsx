import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import photo from "../assets/tshirt.jpg"

const SwiperComponent = () => {
  return (
    <div className=" pt-16 px-2 lg:px-6 w-full h-fit  flex justify-center items-center ">
      <div className="lg:flex w-full h-96 rounded-xl overflow-hidden hidden justify-center items-center mb-8">
        <Swiper
          spaceBetween={70}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              className="rounded-lg object-cover w-full h-full"
              src={photo}
              alt=""
            />
          </SwiperSlide> 
          <SwiperSlide>
            <img
              className="rounded-lg object-cover w-full h-full"
              src={photo}
              alt=""
            />
          </SwiperSlide> 
          <SwiperSlide>
            <img
              className="rounded-lg object-cover w-full h-full"
              src={photo}
              alt=""
            />
          </SwiperSlide> 
        </Swiper>
      </div>
      <div className="lg:hidden w-full h-fit rounded-xl overflow-hidden flex justify-center items-center">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default SwiperComponent;
