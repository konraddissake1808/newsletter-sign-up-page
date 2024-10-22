'use client'

import React from 'react'
import Image from 'next/image'
import successIcon from '../../../public/images/icon-success.svg'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

function SuccessPage() {

  const router = useRouter()

  return (
    <div className='w-full h-screen flex justify-center items-end'>
      <div className='w-5/6 h-3/4 flex flex-col justify-between'>
        <div>
          <div>
            <Image src={successIcon} alt=''></Image>
          </div>
          <div className='mt-8'>
            <p className='font-roboB text-[32px] leading-none'>Thanks for subscribing</p>
          </div>
          <div className='mt-6'>
            <p className='font-roboR text-sm'>A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</p>
          </div>
        </div>
        <div>
          <Button className="w-full h-10 text-sm mb-9" onClick={ () => {router.push('../signUpPage')}}>Dismiss Message</Button>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage