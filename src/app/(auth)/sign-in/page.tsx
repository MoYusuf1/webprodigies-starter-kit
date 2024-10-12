// import { GoogleAuthButton } from "@/components/global/google-oauth-button"
import SignInForm from "@/components/forms/sign-in"
import BackdropGradient from "@/components/global/backdrop-gradient"
import { Separator } from "@/components/ui/separator"

const SignInPage = () => {
  return (
    <>
      <BackdropGradient 
        className="w-4/12 h-2/6 opacity-40"
        container="flex flex-col items-center"
      >
        <h5 className="font-bold text-base text-themeTextWhite mt-5">Login</h5>
        <p className="text-themeTextGray leading-tight mx-5">
          Network with people from around the world,<br/> join groups, create your own,
          watch courses <br/> and become the best version of yourself.
        </p>
        <SignInForm/>
      
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>

      </BackdropGradient>
    </>
  )
}

export default SignInPage