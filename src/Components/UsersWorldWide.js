import React from "react";
import Images from "../Assets/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { UsersWorldWideData } from "../Data/UsersWorldWideData";
function UsersWorldWide() {
  return (
    <section>
      <div className="pt-36 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-y-2 relative">
            <div>
              <h3 className="text-white text-center font-rubik text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" data-aos="fade-up">
                30 Million Users Worldwide
              </h3>
            </div>
            <div>
              <p className="text-white text-center font-rubik text-[16px] md:text-lg font-normal opacity-60" data-aos="fade-up">
                Tincidunt id nibh orci nibh just nulla elementum, sed vel.
              </p>
            </div>
            <div className="absolute top-[-90px] left-0 lg:left-[50px] xl:left-[80px] 2xl:left-[100px]" data-aos="fade-left">
              <img
                src={Images.Monero}
                alt=""
                className="w-[63px] animate-bounce"
              />
            </div>
          </div>
          <div className="pt-24" data-aos="fade-up">
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
              {UsersWorldWideData.map((value) => (
                <SwiperSlide>
                  <div className="bg-[#160E33] border border-[#EF443B] rounded-2xl w-[300px] xl:w-[350px] p-2 gap-y-3 mx-auto shadow-3 ">
                    <div className="flex flex-col items-center justify-center py-16 px-8 gap-y-6 ">
                      <div>
                        <img
                          src={value.icon}
                          alt=""
                          className="w-[50px] h-[50px]"
                        />
                      </div>
                      <div>
                        <p className="text-white text-center font-rubik text-base font-normal leading-relaxed opacity-60">
                          {value.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div>
                          <img
                            src={value.image}
                            alt=""
                            className="w-[48px] h-[48px]"
                          />
                        </div>
                        <div>
                          <h3 className="text-white text-center font-rubik text-base font-medium">
                            {value.Name}
                          </h3>
                        </div>
                        <div>
                          <h5 className="text-center font-rubik text-base font-normal text-[#EF443B]">
                            {value.title}
                          </h5>
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

export default UsersWorldWide;
