import React from 'react'
import Image from 'next/image'
import checkSVG from '../../../../public/images/icon-list.svg'

function SignUpText() {
  return (
    <div className='w-full flex justify-center text-sm'>
        <div className='w-5/6'>
            <div className='mt-10 mb-6 sm:mt-11'>
                <p className='font-roboB text-[32px]'>Stay updated!</p>
            </div>
            <div>
                <p className='font-roboR text-sm'>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div className='mt-6'>
                <div className='flex mb-1'>
                    <div className='w-6 h-6 mr-2'>
                        <Image src={checkSVG} className='w-[18px] h-[18px]' alt=''></Image>
                    </div>
                    <p className='font-roboR'>Product discovery and building what matters</p>
                </div>
                <div className='flex mb-2'>
                    <div className='w-6 h-6 mr-1'>
                        <Image className='w-[18px] h-[18px]' src={checkSVG} alt=''></Image>
                    </div>
                    <p className='font-roboR'>Measuring to ensure updates are a success</p>
                </div>
                <div className='flex mb-1'>
                    <div className='w-[18px] h-6 mr-2'>
                        <Image className='w-[18px] h-[18px]' src={checkSVG} alt=''></Image>
                    </div>
                    <p className='font-roboR'>And much more!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpText