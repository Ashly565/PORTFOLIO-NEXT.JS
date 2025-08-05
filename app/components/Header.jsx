import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function Header() {
  return (
    <>
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2 '>
    {/* <div >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
    </div> */}
     <motion.h3 
     initial={{y:-20,opacity:0}}
     whileInView={{y:0,opacity:1}}
     transition={{duration:0.6,delay:0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-2 mt-16 font-Ovo'>
            Hi! I'm Ashly <Image src={assets.hand_icon} alt='' className=' w-6'/> </motion.h3>
            <motion.h1  
            initial={{y:-30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.8,delay:0.5}}
            className='text-3xl sm:text-5xl  lg:text-[66px] font-Ovo'> Web Developer</motion.h1>
          
            <motion.p 
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:0.6,delay:0.7}}
            className='max-w-2xl mx-auto font-Ovo'>
                I am a frontend developer passionate about creating dynamic UIs with React.
                 I build component-based architectures that are both powerful and maintainable.
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                 initial={{y:30,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.6,delay:0.1}}
                href="#contact" className='px-5 py-1 border border-white rounded-full bg-black text-white 
                flex items-center gap-2 dark:bg-transparent'>
                    contact me<Image src={assets.right_arrow_white} alt='' className=' w-4' />
                </motion.a>

                <motion.a
                 initial={{y:30,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.6,delay:1.2}}
                 href="/sample-resume.pdf" download
                 className='px-5 py-1 border rounded-full border-black/20 flex items-center gap-2 bg-white dark:text-black'>
                 myresume<Image src={assets.download_icon} alt='' className=' w-4' />
                </motion.a>
      
            </div>
            </div>
    </>
  )
}

export default Header