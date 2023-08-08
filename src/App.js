import React from "react";
import background from "./Assets/Images/Background.png";
import Navbar from "./Components/Navbar";
import Countdown from "react-countdown";
import Images from "./Assets/Images";
function App() {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      return (
        <div className="flex items-center justify-center gap-x-2">
          <div className="flex flex-col items-center justify-center ">
            <div className="text-[#EF443B] text-center font-rubik text-3xl font-medium leading-normal">
              {days}
              <p className="text-center font-rubik text-[9px] font-normal leading-normal uppercase text-white">
                Days
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-center font-rubik text-sm font-normal leading-normal uppercase text-white">
              :
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#EF443B] text-center font-rubik text-3xl font-medium leading-normal">
              {hours}
              <p className="text-center font-rubik text-[9px] font-normal leading-normal uppercase text-white">
                Hours
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-center font-rubik text-sm font-normal leading-normal uppercase text-white">
              :
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#EF443B] text-center font-rubik text-3xl font-medium leading-normal">
              {minutes}
              <p className="text-center font-rubik text-[9px] font-normal leading-normal uppercase text-white">
                Minutes
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-center font-rubik text-sm font-normal leading-normal uppercase text-white">
              :
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#EF443B] text-center font-rubik text-3xl font-medium leading-normal">
              {seconds}
              <p className="text-center font-rubik text-[9px] font-normal leading-normal uppercase text-white">
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
    <section
      className="bg-cover bg-center min-h-screen md:min-h-[50vh] lg:min-h-screen "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-y-5">
            <div>
              <div>
                <h3 className="text-white text-center font-rubik text-4xl font-bold">
                  Next Generation Crypto Trading
                </h3>
              </div>
              <div className="pt-4">
                <h6 className="text-white text-center font-rubik text-sm font-normal leading-normal">
                  Crypto Market Starts in
                </h6>
              </div>
            </div>
            <Countdown date={targetTime} renderer={renderer} />
            <div className="flex items-center justify-center gap-x-8 pt-6">
              <div className="rounded-[40px] bg-red-500 py-3 px-4">
                <h5 className="font-rubik text-[10px] font-semibold leading-normal uppercase text-white">
                  Download app
                </h5>
              </div>
              <div className="rounded-[40px] border border-red-500 py-3 px-4">
                <h5 className="font-rubik text-[10px] font-semibold leading-normal uppercase text-white">
                  Trade crypto
                </h5>
              </div>
            </div>
            <div>
              <h4 className="text-white text-center font-rubik text-lg font-medium uppercase">
                We accept
              </h4>
            </div>
            <div className="flex items-center justify-center gap-x-3">
              <div className="flex items-center justify-center gap-x-1">
                <img
                  src={Images.bitcoin001}
                  alt=""
                  className="w-[18px] h-[18px]"
                />
                <h6 className="text-white font-rubik text-sm font-normal">
                  Bitcoin
                </h6>
              </div>
              <div className="flex items-center justify-center gap-x-1">
                <img
                  src={Images.litecoin004}
                  alt=""
                  className="w-[18px] h-[18px]"
                />
                <h6 className="text-white font-rubik text-sm font-normal">
                  Litecoin
                </h6>
              </div>
              <div className="flex items-center justify-center gap-x-1">
                <img
                  src={Images.chainlink006}
                  alt=""
                  className="w-[18px] h-[18px]"
                />
                <h6 className="text-white font-rubik text-sm font-normal">
                  Chainlink
                </h6>
              </div>
              <div className="flex items-center justify-center gap-x-1">
                <img
                  src={Images.siacoins011}
                  alt=""
                  className="w-[18px] h-[18px]"
                />
                <h6 className="text-white font-rubik text-sm font-normal">
                  Siacoin
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
