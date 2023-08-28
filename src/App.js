import React, { useState, useEffect } from "react";
import background from "./Assets/Images/Background.png";
import Navbar from "./Components/Navbar";
import Countdown from "react-countdown";
import Images from "./Assets/Images";
import HowToTradeWithKrypto from "./Components/HowToTradeWithKrypto";
import AvailableCryptos from "./Components/AvailableCryptos";
import AttractiveFeatures from "./Components/AttractiveFeatures";
import AdvancedCryptoTrading from "./Components/AdvancedCryptoTrading";
import UsersWorldWide from "./Components/UsersWorldWide";
import CryptoMarketAnalysis from "./Components/CryptoMarketAnalysis";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      return (
        <div className="flex items-center justify-center gap-x-2  relative " data-aos="fade-up">
          <div className="flex flex-col items-center justify-center ">
            <div className="text-[#EF443B] text-center font-rubik text-3xl md:text-4xl  font-medium leading-normal ">
              {days}
              <p className="text-center font-rubik text-[9px] md:text-sm font-normal leading-normal uppercase text-white">
                Days
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-center font-rubik text-sm md:text-base font-normal leading-normal uppercase text-white">
              :
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#EF443B] text-center font-rubik text-3xl md:text-4xl font-medium leading-normal">
              {hours}
              <p className="text-center font-rubik text-[9px] md:text-sm font-normal leading-normal uppercase text-white">
                Hours
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-center font-rubik text-sm md:text-base font-normal leading-normal uppercase text-white">
              :
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#EF443B] text-center font-rubik text-3xl md:text-4xl font-medium leading-normal">
              {minutes}
              <p className="text-center font-rubik text-[9px] md:text-sm font-normal leading-normal uppercase text-white">
                Minutes
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-center font-rubik text-sm md:text-base font-normal leading-normal uppercase text-white">
              :
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#EF443B] text-center font-rubik text-3xl md:text-4xl font-medium leading-normal">
              {seconds}
              <p className="text-center font-rubik text-[9px] md:text-sm font-normal leading-normal uppercase text-white">
                Seconds
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  const targetTime =
    Date.now() +
    2 * 24 * 60 * 60 * 1000 +
    12 * 60 * 60 * 1000 +
    23 * 60 * 1000 +
    40 * 1000;
  return (
    <>
      <section id="home" className=" bg-[#160E33] ">
        <Navbar />
        <div
          className="bg-center bg-cover mt-10 relative"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(153deg, #160E33 21.51%, rgba(22, 14, 51, 0.30) 100%)",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(0deg, #160E33 0%, rgba(22, 14, 51, 0.00) 100%)",
            }}
          ></div>
          <div className="py-20 lg:pt-24 xl:pt-28 2xl:pt-40 ">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center justify-center gap-y-5">
                <div>
                  <div className="md:w-[730px] relative">
                    <h3 className="text-white text-center font-rubik text-4xl md:text-7xl xl:text-[80px]  font-bold" data-aos="fade-up">
                      Next Generation Crypto Trading
                    </h3>
                    <div className="absolute top-[0px] left-[-5px] md:left-[15px] lg:left-[-20px] xl:left-[-100px] 2xl:top-[-30px] 2xl:left-[-300px]" data-aos="fade-left">
                      <img
                        src={Images.Bitcoin1}
                        alt=""
                        className="w-[35px] h-[35px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px] xl:w-[95px] xl:h-[95px] animate-bounce"
                      />
                    </div>
                    <div className="absolute top-[90px] right-[7px] md:top-[130px] lg:right-[-30px] xl:right-[-100px] xl:top-[160px] 2xl:right-[-300px] 2xl:top-[100px]" data-aos="fade-right">
                      <img
                        src={Images.litecoin2}
                        alt=""
                        className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[95px] lg:h-[95px] xl:w-[140px] xl:h-[140px] animate-bounce"
                      />
                    </div>
                  </div>

                  <div className="pt-4 relative">
                    <h6 className="text-white text-center font-rubik text-sm md:text-lg font-normal leading-normal" data-aos="fade-up">
                      Crypto Market Starts in
                    </h6>
                  </div>
                </div>

                <Countdown date={targetTime} renderer={renderer} />

                <div className="flex items-center justify-center gap-x-8 pt-6 relative">
                  <div className="rounded-[40px] bg-red-500 py-3 px-4 md:w-[176px] md:h-[55px] md:py-4 md:pl-7 md:px-0" data-aos="fade-up">
                    <h5 className="font-rubik text-[10px] md:text-[16px] font-semibold leading-normal uppercase text-white">
                      Download app
                    </h5>
                  </div>
                  <div className="rounded-[40px] border border-red-500 py-3 px-4 md:w-[171px] md:h-[55px] md:py-4 md:pl-7 md:px-0" data-aos="fade-up">
                    <h5 className="font-rubik text-[10px] md:text-[16px] font-semibold leading-normal uppercase text-white">
                      Trade crypto
                    </h5>
                  </div>
                </div>
                <div className="relative" data-aos="fade-up">
                  <h4 className="text-white text-center font-rubik text-lg md:text-xl font-medium uppercase">
                    We accept
                  </h4>
                </div>
                <div className="flex items-center justify-center gap-x-3 md:pt-4 md:gap-x-4 lg:gap-x-5 xl:gap-x-[30px] relative">
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up">
                    <img
                      src={Images.bitcoin001}
                      alt=""
                      className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                    />
                    <h6 className="text-white font-rubik text-sm md:text-xl font-normal">
                      Bitcoin
                    </h6>
                  </div>
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up">
                    <img
                      src={Images.litecoin004}
                      alt=""
                      className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                    />
                    <h6 className="text-white font-rubik text-sm md:text-xl font-normal">
                      Litecoin
                    </h6>
                  </div>
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up">
                    <img
                      src={Images.chainlink006}
                      alt=""
                      className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                    />
                    <h6 className="text-white font-rubik text-sm md:text-xl font-normal">
                      Chainlink
                    </h6>
                  </div>
                  <div className="flex items-center justify-center gap-x-1" data-aos="fade-up">
                    <img
                      src={Images.siacoins011}
                      alt=""
                      className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
                    />
                    <h6 className="text-white font-rubik text-sm md:text-xl font-normal">
                      Siacoin
                    </h6>
                  </div>
                  <div className="absolute top-[35px] right-[0px] md:right-[-90px] md:top-[0px] lg:right-[-130px] 2xl:right-[-170px]" data-aos="fade-right">
                    <img
                      src={Images.Monero}
                      alt=""
                      className="w-[35px] h-[35px] md:w-[55px] md:h-[55px] lg:w-[63px] lg:h-[63px] animate-bounce"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HowToTradeWithKrypto />
        <AvailableCryptos />
        <AttractiveFeatures />
        <AdvancedCryptoTrading />
        <UsersWorldWide />
        <CryptoMarketAnalysis />
        <Footer/>
      </section>
    </>
  );
}

export default App;
