import CNavBar from "../../components/CNavBar"
import CStarrySky from '../../components/CStarrySky';

import styles from "./styles.module.css"

const field_imgs = [
    require("./field/1.jpg"),
    require("./field/2.jpg"),
    require("./field/3.jpg"),
    require("./field/4.jpg"),
    require("./field/5.jpg"),
    require("./field/6.jpg"),
    require("./field/7.jpg"),
]

function PBlogs(){


    return (
        <div className='flex flex-col'>
            <CNavBar />
            <div className='absolute w-full h-full object-cover z-0'>
                <CStarrySky />
            </div>
            <div className='absolute h-screen w-screen overflow-y-auto overflow-x-hidden'>
                <h2 className='text-4xl text-center text-white mt-14'>Blogs</h2>
                <div className="flex flex-wrap overflow-hidden m-10 justify-center md:mx-12 lg:mx-32">

                        {
                            field_imgs.map((e,i) =>
                                <div key={i*2} className="bg-white text-black rounded-2xl overflow-hidden transition-transform transform hover:scale-105 cursor-pointer m-2 w-full md:w-2/5">
                                        <img src={field_imgs[0].default} className="object-cover h-96 w-full" alt="b1_img"/>
                                        <div className=" p-5 text-white bg-gradient-to-br from-royalBlue-light to-purple-light">
                                            <p className="font-bold text-3xl">A Day With A Great Start</p>
                                            <p className="text-md mt-6 font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et...</p>
                                        </div>
                                </div>
                            )
                        }
                        
                    

                </div>

            </div>
            
        </div>
    )
}

export default PBlogs