import { useRouter } from "next/router";
import { GithubIcon } from "./Icon";
import NavLink from "./NavLink"

const navigation = [
  { name: "Introduction", href: "/posts/intro" },
  { name: "Discover the Roles", href: "/posts/roles" },
  { name: "Build a Foundation", href: "/posts/basics" },
  { name: "Have work to show", href: "/posts/work" },
  { name: "Have a portfolio", href: "/posts/portfolio" },
  { name: "Talk about your work", href: "/posts/talk" },
  { name: "Further Reading", href: "/posts/readings" },
];

export default function LeftNav() {

  return (
    <nav
      className="p-4 space-y-1 border-r w-96 border-base00"
      aria-label="Sidebar"
    >
      {navigation.map((item) => (
        <NavLink name={item.name} href={item.href} key={item.href} />
        // <a
        //   key={item.name}
        //   href={item.href}
        //   className={classNames(
        //     current
        //       ? "text-base06"
        //       : "hover:bg-base02 border-base00 text-base04",
        //     "group flex items-center px-3 py-2 text-md font-bold space-x-3 rounded-lg"
        //   )}

        // >
        //   <div
        //     className={classNames(
        //       current
        //         ? "bg-base09 text-base00 border-base00/50 border"
        //         : "bg-base01 group-hover:bg-base02 border-base00 text-base07",
        //       "p-2 flex items-center text-md rounded-lg space-x-2"
        //     )}
        //   >
        //     <GithubIcon />
        //   </div>
        //   <span className="truncate"></span>
        //   {item.count ? (
        //     <span
        //       className={classNames(
        //         current
        //           ? "bg-white"
        //           : "bg-gray-100 text-gray-600 group-hover:bg-gray-200",
        //         "ml-auto inline-block py-0.5 px-3 text-xs rounded-full"
        //       )}
        //     >
        //       {item.count}
        //     </span>
        //   ) : null}
        // </a>
      ))}
    </nav>
  );
}
