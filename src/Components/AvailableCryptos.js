import React from "react";
import Images from "../Assets/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { AvailableCryptosData } from "../Data/AvailableCryptosData";
function AvailableCryptos() {
  return (
    <section>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-y-2 relative">
            <div>
              <h3 className="text-white text-center font-rubik text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"data-aos="fade-up">
                Available Creyptos
              </h3>
            </div>
            <div>
              <p className="text-white text-center font-rubik text-[16px] md:text-lg font-normal opacity-60" data-aos="fade-up">
                Tincidunt id nibh orci nibh just nulla elementum, sed vel.
              </p>
            </div>
            <div className="absolute top-[-40px] left-0" data-aos="fade-left">
              <img
                src={Images.Monero}
                alt=""
                className="w-[35px] h-[35px] md:w-[55px] md:h-[55px] lg:w-[63px] lg:h-[63px] animate-bounce"
              />
            </div>
          </div>
          <div
            className="py-24"
            data-aos="fade-up"
      
          >
            <style>
              {`
              .swiper-pagination {
               position: static;
               display: flex;
               justify-content: center;
               padding-top: 50px;
               padding-right: ${window.innerWidth > 1000 ? "40px" : "0px"}; 
                 }
             `}
            </style>
            <style>
              {`
        .swiper-pagination-bullet {
          background-color: #EF443B;
        }
      `}
            </style>
            <Swiper
              slidesPerView={
                window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 2 : 3
              }
              spaceBetween={10}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              className="w-[100%] lg:w-[85%] xl:w-[100%]  "
            >
              {AvailableCryptosData.map((value) => (
                <SwiperSlide>
                  <div className="flex flex-col rounded-lg  w-[240px]  md:w-[350px]  flex-shrink-0 mx-auto">
                    <div
                      className="bg-center bg-cover h-[350px] rounded-t-lg "
                      style={{
                        backgroundImage: `url(${value.Image1})`,
                      }}
                    ></div>
                    <div className=" flex flex-col gap-y-4 rounded-b-[12px]  bg-white px-2 py-3">
                      <div className="flex flex-col w-[200px] gap-y-1">
                        <div>
                          <h5 className="font-rubik text-lg font-medium text-[#160E33]">
                            {value.Name}
                          </h5>
                        </div>
                        <div>
                          <p className="font-rubik text-base font-normal leading-relaxed text-[#160E33]">
                            {value.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-[#EF443B] font-rubik text-2xl md:text-3xl font-bold tracking-wider uppercase">
                            {value.price}
                          </h4>
                        </div>
                        <div className="rounded-full bg-[#EF443B] p-2">
                          <h4 className="text-white font-rubik text-sm md:text-base font-bold tracking-wider uppercase">
                            {value.buttontext}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AvailableCryptos;
