import { useAuthSignUp } from '@/hooks/authentication'
import React from 'react'

type Props = {}

const SignInForm = (props: Props) => {
  const {
    register,
    errors,
    verifying,
    creating,  
    onGenerateCode,
    onInitiateUserRegistration,
    code,
    setCode,
    getValues
  } = useAuthSignUp()
  return (
    <div>SignInForm</div>
  )
}

export default SignInForm