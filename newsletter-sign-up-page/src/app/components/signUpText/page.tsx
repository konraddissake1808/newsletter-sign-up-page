import React from 'react'
import Image from 'next/image'
import checkSVG from '../../../../public/images/icon-list.svg'

function SignUpText() {
  return (
    <div>
        <div>
            <div>
                <p className='font-roboB text-[32px]'>Stay updated</p>
            </div>
            <div>
                <p className='font-roboR text-base'>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div>
                <div className='flex'>
                    <div>
                        <Image src={checkSVG} alt=''></Image>
                    </div>
                    <p>Product discovery and building what matters</p>
                </div>
                <div className='flex'>
                    <div>
                        <Image src={checkSVG} alt=''></Image>
                    </div>
                    <p>Measuring to ensure updates are a success</p>
                </div>
                <div className='flex'>
                    <div>
                        <Image src={checkSVG} alt=''></Image>
                    </div>
                    <p>And much more</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpText