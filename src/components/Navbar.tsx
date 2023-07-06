import { NavLink } from "@/components";
const navLinks: NavLink[] = [
  {
    href: "/",
    title: "Home"
  },
  {
    href: "/about",
    title: "About"
  },
  {
    href: "/courses",
    title: "Courses"
  }
]

export function Navbar() {
  return (
    <nav>
      <ul className="flex gap-20">
        {navLinks.map(navLink => (
          <li key={navLink.title}>
            <NavLink {...navLink} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
