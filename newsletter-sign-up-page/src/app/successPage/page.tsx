import React from 'react'
import Image from 'next/image'
import successIcon from '../../../public/images/icon-success.svg'

function SuccessPage() {
  return (
    <div>
      <div>
        <Image src={successIcon} alt=''></Image>
      </div>
      <div>
        <p>Thanks for subscribing</p>
      </div>
      <div>
        <p>A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
    </div>
  )
}

export default SuccessPage