'use client'
import React from 'react'
import SignUpPageImage from '../components/signUpPageImage/page'
import SignUpText from '../components/signUpText/page'
import SignUpForm from '../components/signUpForm/page'

function SignUpPage() {
  return (
    <div className='bg-darkSlategrey lg:w-full h-screen lg:flex lg:justify-center lg:items-center'>
      <div className='bg-white h-full lg:rounded-3xl lg:flex lg:flex-row-reverse lg:h-[480px] lg:w-[720px]'>
        <SignUpPageImage></SignUpPageImage>
        <div className='lg:h-full lg:flex lg:justify-center lg:items-center'>
          <div className='lg:h-[96%] lg:w-[95%]'>
            <SignUpText></SignUpText>
            <SignUpForm></SignUpForm>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage