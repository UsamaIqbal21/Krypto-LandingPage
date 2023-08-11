import React from "react";
import Images from "../Assets/Images";
function CryptoMarketAnalysis() {
  return (
    <section>
      <div className="py-20 lg:py-36">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-y-2 relative">
            <div>
              <h3 className="text-white text-center font-rubik text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" data-aos="fade-up">
                Crypto Market Analysis
              </h3>
            </div>
            <div>
              <p className="text-white text-center font-rubik text-[16px] md:text-lg font-normal opacity-60"data-aos="fade-up">
                Tincidunt id nibh orci nibh justo. Purus et turpis nulla
                elementum, sed vel.
              </p>
            </div>
            <div className="absolute top-[-80px] left-0 lg:left-[60px] xl:left-[50px]" data-aos="fade-left">
              <img
                src={Images.Bitcoin1}
                alt=""
                className="w-[60px] md:w-[90px] lg:w-[95px] animate-bounce"
              />
            </div>
            <div className="absolute bottom-[-70px] md:top-0 md:right-[-10px] right-0 lg:right-[60px] xl:right-[50px]"data-aos="fade-right">
              <img
                src={Images.etherium}
                alt=""
                className="w-[60px] md:w-[90px] lg:w-[95px] animate-bounce"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center pt-32 gap-y-8 md:pl-5 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-40">
            <div className="flex  gap-x-4 " data-aos="fade-up">
              <div>
                <img
                  src={Images.analysis1}
                  alt=""
                  className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px]"
                />
              </div>
              <div className="flex flex-col w-[250px] gap-y-1 xl:pt-2 xl:gap-y-3">
                <div>
                  <h3 className="text-white font-rubik text-base font-medium">
                    How to trade Bitcoin
                  </h3>
                </div>
                <div>
                  <p className="text-white font-rubik text-sm font-normal leading-relaxed opacity-60">
                    Eu tellus quam id sed ultrices. Integer nunc lectus nisi,
                    erat et ornare risus.
                  </p>
                </div>
                <div>
                  <h6 className="text-[#EF443B] font-rubik text-base font-normal leading-relaxed">
                    Learn more
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex  gap-x-4" data-aos="fade-up">
              <div>
                <img
                  src={Images.analysis2}
                  alt=""
                  className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px]"
                />
              </div>
              <div className="flex flex-col w-[250px] gap-y-1 xl:pt-2 xl:gap-y-3">
                <div>
                  <h3 className="text-white font-rubik text-base font-medium">
                    Gain the best exchange
                  </h3>
                </div>
                <div>
                  <p className="text-white font-rubik text-sm font-normal leading-relaxed opacity-60">
                    Eu tellus quam id sed ultrices. Integer nunc lectus nisi,
                    erat et ornare risus.
                  </p>
                </div>
                <div>
                  <h6 className="text-[#EF443B] font-rubik text-base font-normal leading-relaxed">
                    Learn more
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  items-center justify-center pt-8 xl:pt-24 gap-y-8 md:pl-5 lg:gap-x-5 xl:gap-x-20 2xl:gap-x-40">
            <div className="flex  gap-x-4" data-aos="fade-up">
              <div>
                <img
                  src={Images.analysis3}
                  alt=""
                  className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px]"
                />
              </div>
              <div className="flex flex-col w-[250px] gap-y-1 xl:pt-2 xl:gap-y-3">
                <div>
                  <h3 className="text-white font-rubik text-base font-medium">
                    Reduce your loosing
                  </h3>
                </div>
                <div>
                  <p className="text-white font-rubik text-sm font-normal leading-relaxed opacity-60">
                    Eu tellus quam id sed ultrices. Integer nunc lectus nisi,
                    erat et ornare risus.
                  </p>
                </div>
                <div>
                  <h6 className="text-[#EF443B] font-rubik text-base font-normal leading-relaxed">
                    Learn more
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex  gap-x-4" data-aos="fade-up">
              <div>
                <img
                  src={Images.analysis4}
                  alt=""
                  className="w-[140px] h-[140px] xl:w-[160px] xl:h-[160px]"
                />
              </div>
              <div className="flex flex-col w-[250px] gap-y-1 xl:pt-2 xl:gap-y-3">
                <div>
                  <h3 className="text-white font-rubik text-base font-medium">
                    Win 50-50 trading strategy
                  </h3>
                </div>
                <div>
                  <p className="text-white font-rubik text-sm font-normal leading-relaxed opacity-60">
                    Eu tellus quam id sed ultrices. Integer nunc lectus nisi,
                    erat et ornare risus.
                  </p>
                </div>
                <div>
                  <h6 className="text-[#EF443B] font-rubik text-base font-normal leading-relaxed">
                    Learn more
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-full border-[2px] border-[#EF443B] w-[280px] mx-auto mt-24" data-aos="fade-up">
              <h3 className="text-white font-rubik text-sm font-bold tracking-wider uppercase text-center py-4">
                Enroll crypto University
              </h3>
            </div>
            <div className="absolute bottom-[-80px] lg:bottom-[-50px] right-0 lg:right-[60px] xl:right-[50px]" data-aos="fade-right">
              <img
                src={Images.Monero}
                alt=""
                className="w-[60px] md:w-[90px] lg:w-[95px] animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CryptoMarketAnalysis;
