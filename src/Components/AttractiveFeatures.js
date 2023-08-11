import React from 'react'
import Images from "../Assets/Images"
import {AttractiveFeaturesData} from "../Data/AttractiveFeaturesData";
function AttractiveFeatures() {
  return (
   <section>
     <div className='py-24'>
       <div className='container mx-auto px-4'>
       <div className="flex flex-col items-center justify-center gap-y-2 relative">
            <div>
              <h3 className="text-white text-center font-rubik text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" data-aos="fade-up">
              Attractive Features
              </h3>
            </div>
            <div>
              <p className="text-white text-center font-rubik text-[16px] md:text-lg font-normal opacity-60" data-aos="fade-up">
              Windaful makes playing the UK's best raffles easy and fun.
              </p>
            </div>
            <div className="absolute top-[-110px] left-0 md:top-[-100px] md:left-5 lg:left-[80px] lg:top-[-150px]" data-aos="fade-left">
              <img
                src={Images.litecoin2}
                alt=""
                className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] lg:w-[113px] lg:h-[113px] xl:w-[150px] xl:h-[150px] animate-bounce"
              />
            </div>
            <div className='absolute bottom-[-30px] right-5 md:bottom-[0px] lg:right-[100px] xl:bottom-[-40px]' data-aos="fade-right">
                <img src={Images.Bitcoin1} alt="" className='w-[40px] h-[40px] md:w-[60px] md:h-[60px] xl:w-[95px] xl:h-[95px] animate-bounce' />
            </div>
          </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-y-16 md:gap-x-2 justify-center pt-20 lg:pt-32' data-aos="fade-up">
           {AttractiveFeaturesData.map((value)=>(
            <div className='flex flex-col items-start w-[255px] xl:w-[300px] p-2 gap-y-3 mx-auto hover:shadow-md hover:shadow-[#EF443B]'>
                <div className='flex items-start gap-x-2 xl:gap-x-5'>
                   <div className='w-[65px] h-[65px]'>
                      <img src={value.image} alt="" />
                   </div>
                    <div className='text-white font-rubik text-xl font-medium '>
                        <h4>{value.Name}</h4>
                    </div>
                </div>
                <div>
                    <p className='text-white font-rubik text-base font-normal opacity-60'>{value.description}</p>
                </div>
            </div>
           ))}
           
         </div>
       </div>
     </div>
   </section>
  )
}

export default AttractiveFeatures;
