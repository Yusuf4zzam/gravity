import { twMerge } from "tailwind-merge";

export default function NavItems({ children, className }) {
  return <li className={twMerge("cursor-pointer", className)}>{children}</li>;
}
