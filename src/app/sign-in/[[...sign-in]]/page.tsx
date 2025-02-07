import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <SignIn />
 

}

console.log("🔥",process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);