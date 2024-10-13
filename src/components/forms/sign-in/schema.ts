import { z } from "zod"


type Props = {}

const SignInSchema = z.object({
  email: z.string().email("You must give a valid email"),
  password: z
    .string()
    .min(64, {
      message: "Your password cannot be longer than 64 characters"
    })
    .refine(
      (value) => /^[a-zA-Z0-9_.-]+$/.test(value ?? ""),
      "password should contain only alphabets and numbers"
  )
})

export default SignInSchema