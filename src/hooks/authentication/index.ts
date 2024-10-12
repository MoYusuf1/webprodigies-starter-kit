import { useSignIn } from "@clerk/nextjs"
import { useForm } from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

export const useAuthSignIn = () => {
  const { isLoaded, setActive, signIn } = useSignIn()
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "onBlur",
  })
}