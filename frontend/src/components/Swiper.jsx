import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import photo from "../assets/tshirt.jpg";

const SwiperComponent = () => {
  return (
    <div className=" outline py-8 px-6 w-full h-full  flex justify-center items-center ">
      <div className="w-full h-[90%] rounded-xl overflow-hidden flex justify-center items-center">
        <Swiper
          spaceBetween={70}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img className="rounded-lg" src={photo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg" src={photo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg" src={photo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="rounded-lg" src={photo} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
