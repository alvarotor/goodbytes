import { useLocation } from "preact-iso";
import type { JSX } from "preact";

interface NavLinkProps {
    href: string;
    className?: string;
    children: JSX.Element | string | (JSX.Element | string)[];
}

export const NavLink = ({ href, className, children }: NavLinkProps) => {
    const location = useLocation();

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        location.route(href);
    };

    return (
        <a href={href} className={className} onClick={handleClick}>
            {children}
        </a>
    );
};