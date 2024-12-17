import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    initial={{opacity:0.2,y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn Your imagination into visuals</p>
      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img  className='w-80 sl:w-96 rounded-lg'src={assets.sample_img_1} alt="" />
        <div >
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introduction To Imagify</h2>
            <p className='text-gray-600 mb-4'>This technology has wide-ranging applications, from e-commerce and digital marketing to content
                 creation and educational tools, enabling users to enhance their visual storytelling and engage their audience more effectively.
                  By providing an intuitive and user-friendly interface, these platforms make it 
                accessible for anyone, regardless of technical expertise,
                 to create professional-quality images from text inputs. </p>

        </div>
      </div>
    </motion.div>
  )
}

export default Description