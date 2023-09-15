import { NavLink } from "@/components";
const navLinks = [
    {
        href: "/",
        title: "Home",
    },
    {
        href: "/about",
        title: "About",
    },
    {
        href: "/courses",
        title: "Courses",
    },
]

export function Navbar() {
  return (
      <nav>
          <ul className="flex gap-20">
              {navLinks.map((navLink) => (
                  <NavLink {...navLink} />
              ))}
          </ul>
      </nav>
  )
}
