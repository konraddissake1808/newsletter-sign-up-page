'use client'
import React from 'react'
import SignUpPageImage from '../components/signUpPageImage/page'
import SignUpText from '../components/signUpText/page'
import SignUpForm from '../components/signUpForm/page'

function SignUpPage() {
  return (
    <div>
      <SignUpPageImage></SignUpPageImage>
      <SignUpText></SignUpText>
      <SignUpForm></SignUpForm>
    </div>
  )
}

export default SignUpPage