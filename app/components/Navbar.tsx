"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/responsive", label: "Responsive" },
    { href: "/counter", label: "Counter" },
    { href: "/profile", label: "Profile" },
    { href: "/services", label: "Services" },
    { href: "/contact-form", label: "Contact Form" },
    { href: "/charts", label: "Charts" },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="max-w-5xl mx-auto flex justify-center items-center gap-3 flex-wrap p-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md transition ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}