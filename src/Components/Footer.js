import React from "react";
import Images from "../Assets/Images";
function Footer() {
  return (
    <section>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-12 xl:gap-x-20 items-start gap-y-12 border-b border-[#ffffff60] pb-20">
            <div className="flex flex-col items-start gap-y-9" data-aos="fade-up">
              <div>
                <h3 className="text-[#EF443B] text-center font-rubik text-base font-bold" >
                  Krypto
                </h3>
              </div>
              <div className="w-[255px]">
                <p className="text-white font-rubik text-base font-normal" >
                  Massa blandit semper varius faucibus. Suspendisse viverra
                  venenatis placerat nam ut. Pellentesque sit id tempor turpis.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-8" data-aos="fade-up">
              <div>
                <h3 className="text-[#EF443B] text-center font-rubik text-base font-bold">
                  Links
                </h3>
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    How it works
                  </h5>
                </div>
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    Cryptos
                  </h5>
                </div>
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    Features
                  </h5>
                </div>
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    Testimonial
                  </h5>
                </div>
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    Blogs
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-8" data-aos="fade-up">
              <div>
                <h3 className="text-[#EF443B] text-center font-rubik text-base font-bold">
                  Legal
                </h3>
              </div>
              <div className="flex flex-col items-start gap-y-2">
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    Terms of use
                  </h5>
                </div>
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    Terms of conditions
                  </h5>
                </div>
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    Privecy policy
                  </h5>
                </div>
                <div>
                  <h5 className="text-white font-rubik text-base font-normal">
                    Cookie policy
                  </h5>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-3" data-aos="fade-up">
              <div>
                <h3 className="text-[#EF443B] text-start font-rubik text-base font-bold">
                  Newsletter
                </h3>
              </div>
              <div>
                <p className="text-white font-rubik text-base font-normal opacity-60">
                  Over 25000 people have subscribed
                </p>
              </div>
              <div>
                <div className="flex items-center rounded-full border border-white bg-white pl-2 py-1 pr-1">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="font-hind-siliguri text-base font-normal rounded-full pl-2"
                    />
                  </div>
                  <div className="rounded-full bg-[#EF443B] p-3">
                    <h3 className="text-white font-rubik text-xs font-medium uppercase">
                      Subscribe
                    </h3>
                  </div>
                </div>
                <div className="pl-2 pt-1">
                  <p className="text-white font-rubik text-base font-normal opacity-60">
                    We don’t sell your email and spam
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:justify-around pt-8 gap-y-5">
            <div className="flex items-center gap-x-3">
              <h3 className="text-white font-rubik text-xs font-normal" data-aos="fade-up">
                Privacy & Terms
              </h3>
              <h3 className="text-white font-rubik text-xs font-normal"data-aos="fade-up">
                Contact Us
              </h3>
            </div>
            <div>
              <h3 className="text-white font-rubik text-xs font-normal" data-aos="fade-up">
                Copyright @ 2022 xpence
              </h3>
            </div>
            <div className="flex items-center gap-x-3" data-aos="fade-up">
              <div>
                <img src={Images.youtube} alt="" width={18} height={18} />
              </div>
              <div>
                <img src={Images.linkedin} alt="" width={18} height={18} />
              </div>
              <div>
                <img src={Images.facebook} alt="" width={18} height={18} />
              </div>
              <div>
                <img src={Images.bitcoin} alt="" width={18} height={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
