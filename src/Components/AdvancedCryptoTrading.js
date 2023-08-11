import React from 'react'
import platformBg from "../Assets/Images/platformBg.png"
import Images from "../Assets/Images"
function AdvancedCryptoTrading() {
  return (
    <section className="bg-center bg-cover "
    style={{
      backgroundImage: `url(${platformBg})`,
    }}>
      <div className='py-20 lg:py-36 xl:py-40 2xl:py-44'>
         <div className='container mx-auto px-4'>
            <div className='flex flex-col items-center justify-center gap-y-8 xl:gap-y-12'>
               <div className='md:px-24 lg:px-44 2xl:px-60'>
                 <h3 className='text-white text-center font-rubik text-2xl md:text-4xl lg:text-5xl xl:text-6xl not-italic font-bold' data-aos="fade-up">Most advanced crypto trading platfrom ever!</h3>
               </div>
               <div className='flex items-center justify-center gap-x-8'>
                <div data-aos="fade-up">
                  <img src={Images.google} alt="" className='w-[100px] h-[30px] md:w-[130px] md:h-[40px] lg:w-[150px] lg:h-[50px] xl:w-[186px] xl:h-[61px]' />
                </div>
                <div data-aos="fade-up">
                    <img src={Images.playstore} alt="" className='w-[100px] h-[30px] md:w-[130px] md:h-[40px] lg:w-[150px] lg:h-[50px] xl:w-[186px] xl:h-[61px]' />
                </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default AdvancedCryptoTrading;
