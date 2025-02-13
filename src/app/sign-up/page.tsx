import SignUpForm from "@/components/SignUpForm";
import { signUp } from "@/actions/signUp"

export default function Page() {
  return (
    <div className="h-screen flex items-center">
      <SignUpForm action={signUp}/>
    </div>
  )
}

