import React from "react";
import Images from "../Assets/Images";
function HowToTradeWithKrypto() {
  return (
    <>
      <section>
        <div className="py-20 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-y-2 relative">
              <div>
                <h3 className="text-white text-center font-rubik text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" data-aos="fade-up">
                  How to Trade With Krypto
                </h3>
              </div>
              <div>
                <p className="text-white text-center font-rubik text-[16px] md:text-lg font-normal opacity-60" data-aos="fade-up">
                  Tincidunt id nibh orci nibh just nulla elementum, sed vel.
                </p>
              </div>
              <div className="absolute top-[-80px] left-0 xl:left-[50px]"data-aos="fade-left">
                <img
                  src={Images.etherium}
                  alt=""
                  className="w-[60px] md:w-[90px] xl:w-[140px] animate-bounce"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center pt-12 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 gap-y-12 md:gap-y-0 md:gap-x-12 lg:gap-x-20 xl:gap-x-28 2xl:gap-x-72 px-4">
              <div className="md:w-[340px] lg:w-[380px] xl:w-[440px] 2xl:w-[540px]" data-aos="fade-up">
                <img src={Images.trade} alt="" />
              </div>
              <div className="flex flex-col self-start gap-y-10 md:w-[349px] lg:w-[389px] xl:w-[409px] 2xl:w-[449px] md:pt-6 lg:pt-14 xl:pt-20 2xl:pt-36 relative">
                <div>
                  <h3 className="text-[#EF443B] font-rubik text-3xl xl:text-4xl 2xl:text-5xl font-bold" data-aos="fade-up">
                    Steps to trade
                  </h3>
                </div>
                <div className="flex flex-col gap-y-6 2xl:gap-y-8 md:w-[254px] xl:w-[264px] ">
                  <div className="flex items-center   gap-x-4 bg-[#160E33] p-3 rounded-full shadow-1 hover:shadow-2" data-aos="fade-up">
                    <div className="w-[24px] h-[24px] bg-[#EF443B] rounded-full">
                      <h6 className="text-[#160E33] font-rubik text-base font-medium uppercase text-center">
                        01
                      </h6>
                    </div>
                    <div>
                      <h5 className="text-[#EF443B] font-rubik text-base font-medium">
                        Create an account
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-center  gap-x-4 bg-[#160E33] p-3 rounded-full shadow-1 hover:shadow-2" data-aos="fade-up">
                    <div className="w-[24px] h-[24px] bg-[#EF443B] rounded-full">
                      <h6 className="text-[#160E33] font-rubik text-base font-medium uppercase text-center">
                        02
                      </h6>
                    </div>
                    <div>
                      <h5 className="text-[#EF443B] font-rubik text-base font-medium">
                        Download platfrom
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-center  gap-x-4 bg-[#160E33] p-3 rounded-full shadow-1 hover:shadow-2" data-aos="fade-up">
                    <div className="w-[24px] h-[24px] bg-[#EF443B] rounded-full">
                      <h6 className="text-[#160E33] font-rubik text-base font-medium uppercase text-center">
                        03
                      </h6>
                    </div>
                    <div>
                      <h5 className="text-[#EF443B] font-rubik text-base font-medium">
                        Select crypto
                      </h5>
                    </div>
                  </div>
                  <div className="flex items-center  gap-x-4 bg-[#160E33] p-3 rounded-full shadow-1 hover:shadow-2" data-aos="fade-up">
                    <div className="w-[24px] h-[24px] bg-[#EF443B] rounded-full">
                      <h6 className="text-[#160E33] font-rubik text-base font-medium uppercase text-center">
                        04
                      </h6>
                    </div>
                    <div>
                      <h5 className="text-[#EF443B] font-rubik text-base font-medium">
                        Start trading
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-50px] right-[-90px] md:right-[0px] md:bottom-[-70px] xl:right-[-70px] xl:bottom-[-160px]" data-aos="fade-right">
                  <img
                    src={Images.etherium}
                    alt=""
                    className="w-[60px] md:w-[90px] xl:w-[140px] animate-bounce"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowToTradeWithKrypto;
