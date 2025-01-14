import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "../../assets/Images/image1.jpg";
import slide2 from "../../assets/Images/image2.jpg";
import slide3 from "../../assets/Images/image3.jpg";
import slide4 from "../../assets/Images/image4.jpg";
import slide5 from "../../assets/Images/image5.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div className="mt-32">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-lg"
        >
          <SwiperSlide>
            <Slide image={slide1} text="Discover a lifestyle that merges luxury, comfort, and innovation seamlessly" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={slide2} text="A sanctuary of peace with stunning views and exquisite design" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={slide3} text="Step into a space that elevates simplicity to an art form" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={slide4} text="Redefining living with bespoke interiors and timeless sophistication"/>
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={slide5} text="Effortlessly blending style, comfort, and functionality in one perfect space"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
