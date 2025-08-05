import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Footer({isDarkMode}) {
  return (
   <>
   <div className='mt-6'>
    <div className='text-center'>
       <h1 className='text-2xl mx-auto m-2'>ASHLY</h1>
       <div className='flex items-center gap-2 mx-auto w-max'>
       <Image src={ isDarkMode ? assets.mail_icon_dark:assets.mail_icon} alt='' className='w-5' />
       ashlishaji18@gmail.com
       </div>
    </div>
    <div className='text-center sm:flex items-center justify-between border-t border-grey-500
    mx-[10%] mt-6 py-5'>
        <p>ashly@2025.All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Ashly565">Github</a></li>
              <li><a target='_blank' href=""></a>LinkedIn</li>
        </ul>
    </div>
    
    </div>
    </>
  )
}

export default Footer