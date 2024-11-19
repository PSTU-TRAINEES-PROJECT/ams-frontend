import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  onClick,
  className = "",
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`px-4 py-1 rounded-md  transition delay-75 hover:border border-secondary-200 ${className}`}
  >
    {children}
  </Link>
);

export default NavLink;
