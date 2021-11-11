import ReactFullpage from '@fullpage/react-fullpage';
import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade } from "swiper";

import CNavBar from "../../components/CNavBar"
import CStarrySky from '../../components/CStarrySky';

import styles from "./styles.module.css"

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade]);

const field_imgs = [
    require("./field/1.jpg"),
    require("./field/2.jpg"),
    require("./field/3.jpg"),
    require("./field/4.jpg"),
    require("./field/5.jpg"),
    require("./field/6.jpg"),
    require("./field/7.jpg"),
]

const food_imgs = [
    require("./food/1.jpg"),
    require("./food/2.jpg"),
    require("./food/3.jpg"),
    require("./food/4.jpg"),
    require("./food/5.jpg"),
    require("./food/6.jpg"),
    require("./food/7.jpg"),
    require("./food/8.jpg"),
]

function PHome(){

    const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });

    return (
        <div className='flex flex-col'>
            <CNavBar />
            <div className='absolute w-full h-full object-cover z-0'>
                <CStarrySky />
            </div>
            <div className='h-auto absolute'>
                <ReactFullpage
                    scrollingSpeed = {1000}

                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <div className=" flex justify-center items-center">
                                        
                                        <div className="z-10">
                                            <p className="amatic text-8xl text-white">J'AIMAIS <span className='text-purple-light'>B</span>rew</p>
                                            <ul className="poiret text-xl text-gray-400 text-center mt-2 flex justify-center items-center">
                                                <li className='m-3 p-2 transition-colors hover:bg-purple cursor-pointer'>Food</li>
                                                <li className='m-3 p-2 transition-colors hover:bg-purple cursor-pointer'>Merchs</li>
                                                <li className='m-3 p-2 transition-colors hover:bg-purple cursor-pointer'>Blogs</li>
                                                <li className='m-3 p-2 transition-colors hover:bg-purple cursor-pointer'>Cafe</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="section">
                                    <div className={`text-white h-screen w-screen justify-center items-center flex flex-col relative`}>
                                        <div className="flex flex-col justify-center items-center">
                                            <h2 className='text-3xl poiret'>A Cozy and Beautiful Place</h2>
                                            <p>Built with Love</p>
                                        </div>
                                        <Swiper
                                            className='w-3/4 mt-12'
                                            effect= {isMobile ? "fade" : "coverflow"}
                                            initialSlide={2}
                                            loop={true}
                                            autoplay={
                                                {delay: 3000}
                                            }
                                            coverflowEffect={{
                                                rotate: 45,
                                                stretch: 80,
                                                depth: 500,
                                                modifier: 1,
                                                slideShadows: false,
                                            }}
                                            slidesPerView={2}
                                            centeredSlides
                                        >
                                            {
                                                field_imgs.map((img,i) => 
                                                <SwiperSlide>
                                                    <div className="bg-white p-3 shadow-lg rounded-lg">
                                                        <img src={img.default}  className={styles.slide} alt={`img_place${i}`}/>
                                                    </div>
                                                    
                                                </SwiperSlide>)
                                                
                                            }
                                            
                                        </Swiper>
                                        
                                    </div>
                                </div>

                                <div className="section">
                                    <div className={`text-white h-screen w-screen justify-center items-center flex flex-col relative`}>
                                        <div className="flex flex-col justify-center items-center">
                                            <h2 className='text-3xl poiret'>Treat Yourself!</h2>
                                            <p>With our lovely and tasty Menu!</p>
                                        </div>
                                        <Swiper
                                            className='w-3/4 mt-12'
                                            effect= {isMobile ? "fade" : "coverflow"}
                                            initialSlide={2}
                                            loop={true}
                                            autoplay={
                                                {delay: 3000}
                                            }
                                            coverflowEffect={{
                                                rotate: 45,
                                                stretch: 80,
                                                depth: 500,
                                                modifier: 1,
                                                slideShadows: false,
                                            }}
                                            slidesPerView={2}
                                            centeredSlides
                                        >
                                            {
                                                food_imgs.map((img,i) => 
                                                <SwiperSlide>
                                                    <div className="bg-white p-3 shadow-lg rounded-lg">
                                                        <img src={img.default}  className={styles.slide} alt={`img_place${i}`}/>
                                                        <p className='text-center text-black'>Frapuccino</p>
                                                    </div>
                                                </SwiperSlide>)
                                                
                                            }
                                            
                                        </Swiper>
                                    </div>
                                </div>
                                
                                <div className="section">
                                    <div className=" flex justify-center items-center">
                                        
                                        <div className="text-white text-center">
                                            <p className='text-4xl text-royalBlue-light font-bold'>Reach Us!</p>
                                            <p className='text-lg mt-2'>2nd Floor, St. Anne’s Building, Poblacion, Wawa, Balagtas Bulacan 3016 Bulacan Philippines</p>
                                            <div className='flex justify-center'>
                                                <div className='bg-royalBlue rounded-full p-4 m-3'>FB</div>
                                                <div className='bg-royalBlue rounded-full p-4 m-3'>FB</div>
                                                <div className='bg-royalBlue rounded-full p-4 m-3'>FB</div>
                                                <div className='bg-royalBlue rounded-full p-4 m-3'>FB</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
            
        </div>
    )
}

export default PHome