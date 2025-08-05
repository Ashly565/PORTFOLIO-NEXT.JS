import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"


function About({isDarkMode}) {
  return (
    <>
      <motion.div
       id="about" className="w-full px-[12%] py-5 scroll-mt-20"
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:1}} >

        <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,delay:0.3}} 
        className="text-center  mb-2 text-lg font-Ovo">Introduction</motion.h4>
       
        <motion.h2
         initial={{opacity:0,y:-20}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.5,delay:0.5}} 
         className="text-center text-5xl font-Ovo">About Me</motion.h2>
        <div className="  gap-20 my-10">
          {/* <div className="w-64 sm:w-48 rounded-3xl max-w-none">
            <Image
              src={assets.user_image}  alt="user"  className="w-full rounded-3xl" />
          </div> */}
          <motion.div 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.8,delay:0.8}}>
         <p className=" text-center mb-10 max-w-2xl mx-auto font-Ovo">
            I'm a frontend developer specializing in building modern, responsive web applications with React,
             JavaScript, and TypeScript. Passionate about crafting intuitive user interfaces
         </p>

         <motion.ul
           whileInView={{scale:1.05}}
          className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl  gap-4  mx-auto">
            {infoList.map(({icon,iconDark,title,description},index)=>(
                <motion.li
                whileHover={{opacity:1.5}}
                key={index} className="border border-grey-400 rounded-xl p-6 cursor-pointer 
                hover:bg-lighthover hover:-translate-y-2 duration-500 hover:shadow-black dark:border-white 
                dark:hover:shadow-white dark:hover:bg-darkhover/50">
                    <Image src={  isDarkMode ? iconDark :icon} alt={title} className="w-7 mt-3"/>
                    <h3 className="my-4 font-semibold text-grey-700 dark:text-white">{title}</h3>
                     <p className="text-grey-600 text-sm dark:text-white/80">{description}</p>
                </motion.li>
            ))}
         </motion.ul>
         <motion.h4 
          initial={{opacity:0}}
           whileInView={{opacity:1,y:-0}}
           transition={{duration:0.6,delay:1.5}}
         className="my-5 text-gray-700 font-Ovo text-center dark:text-white/80">Tools I use</motion.h4>
         <motion.ul 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.5,delay:0.3}}
         className="flex items-center justify-center gap-2 sm:gap-5">
          {toolsData.map((tool,index)=>(
            <motion.li 
            whileHover={{scale:1.1}}
            key={index} className="flex items-center justify-center w-12 sm:w-10 
            aspect-square border border-grey-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 ">
              <Image src={tool} alt="Tool" className="w-5 sm:w-6" />
            </motion.li>
            
          ))}
         </motion.ul>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
