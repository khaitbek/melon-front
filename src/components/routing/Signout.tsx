import { SignoutLogo } from "../Icons"
import { Button } from "../ui"

interface Props { }

export const SignOut = (props: Props) => {
  return (
    <Button variant="link" className="flex justify-start pl-0 gap-5">
      <SignoutLogo />
      Sign out
    </Button>
  )
}