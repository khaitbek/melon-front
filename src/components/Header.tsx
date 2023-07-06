import { Button, Logo, Navbar, SearchBar } from "@/components";

export function Header() {
  return (
    <header className="py-11">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-6">
          <div className="flex gap-16 items-center">
            <Logo />
            <SearchBar />
          </div>
          <Navbar />
          <div className="flex items-center gap-6">
            <Button variant="outline">
              Login
            </Button>
            <Button variant="orange">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
