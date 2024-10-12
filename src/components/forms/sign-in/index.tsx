"use client"

import { useAuthSignIn } from '@/hooks/authentication'
import React from 'react'

type Props = {}

const SignInForm = (props: Props) => {

  const {isPending, onAuthenticatedUser, register, errors} = useAuthSignIn()
  return (
    <div>SignInForm</div>
  )
}

export default SignInForm