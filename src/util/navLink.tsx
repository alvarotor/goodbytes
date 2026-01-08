import type { ComponentChildren } from "preact";

export function NavLink(props: {
  href: string;
  children: ComponentChildren;
  className?: string;
}) {
  return <a href={props.href} className={props.className}>{props.children}</a>;
}