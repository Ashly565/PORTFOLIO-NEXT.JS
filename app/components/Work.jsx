import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function Work({isDarkMode}) {
  return (
    <>
    <motion.div
     initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}  
     id='work' className="w-full px-[12%] py-5 scroll-mt-20">
 
     <motion.h4
       initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
     transition={{duration:0.5,delay:0.3}} 
      className="text-center  mb-2 text-lg font-Ovo">My portfolio</motion.h4>
  
    <motion.h2 
     initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
     transition={{duration:0.5,delay:0.5}} 
    className="text-center text-3xl font-Ovo">My latest works</motion.h2>
    {/* <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
     Welcome to my web devolopment portfolio! Explore a collection of projects 
     showcasing my expertise in front-end devolopment 
    </p>  */}
   
    <motion.div 
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:0.6,delay:0.9}} 
    className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project,index)=>(
          
          <motion.div 
           whileHover={{scale:1.05}}
           transition={{duration:0.3}}
          key={index} className='aspect-square   bg-no-repeat bg-contain  bg-center
             rounded-lg relative cursor-pointer group'
            style={{backgroundImage:`url(${project.bgImage})`}}>
               
               <div className='bg-white w-11/12 rounded-md absolute text-sm bottom-5 left-1/2 -translate-x-1/2
               py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                 <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>

                </div>
                <a href={project.link} target='_blank'
                className='border rounded-full border-black w-6 aspect-square flex items-center 
                 justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image  src={assets.send_icon} alt='send icon ' className='w-4'/>
                   
                </a>
               </div>
            </motion.div>
        ))}
    </motion.div>
  
   <motion.a 
  initial={{opacity:0}}
   whileInView={{opacity:1}}
   transition={{duration:0.5,delay:1.1}} 
    href="" className='w-max flex items-center justify-center gap-2 text-grey-700
     border border-grey-700 rounded-full px-10 py-2 mx-auto my-18 hover:bg-lighthover duration-500
      dark:text-white dark:border-white  dark:hover:bg-darkhover'>
        Show more <Image src={ isDarkMode ? assets.right_arrow_bold_dark :assets.right_arrow_bold} alt='Right arrow' className='w-3'/>
         </motion.a>
    </motion.div>
    </>
  )
}

export default Work