import {
  BookmarkIcon, BookOpenIcon, ChatIcon,
  CursorClickIcon,
  InformationCircleIcon,
  PhotographIcon,
  SearchIcon
} from "@heroicons/react/solid";
import NavLink from "./NavLink";

const navigation = [
  {
    name: "Introduction",
    href: "/posts/intro",
    icon: <InformationCircleIcon className="w-4 h-4" />,
  },
  {
    name: "Discover the Roles",
    href: "/posts/roles",
    icon: <SearchIcon className="w-4 h-4" />,
  },
  {
    name: "Build a Foundation",
    href: "/posts/basics",
    icon: <BookOpenIcon className="w-4 h-4" />,
  },
  {
    name: "Have work to show",
    href: "/posts/work",
    icon: <PhotographIcon className="w-4 h-4" />,
  },
  {
    name: "Have a portfolio",
    href: "/posts/portfolio",
    icon: <CursorClickIcon className="w-4 h-4" />,
  },
  {
    name: "Talk about your work",
    href: "/posts/talk",
    icon: <ChatIcon className="w-4 h-4" />,
  },
  {
    name: "Further Reading",
    href: "/posts/readings",
    icon: <BookmarkIcon className="w-4 h-4" />,
  },
];

export default function LeftNav() {
  return (
    <nav
      className="p-4 space-y-1 border-r w-96 border-base00"
      aria-label="Sidebar"
    >
      {navigation.map((item) => (
        <NavLink
          name={item.name}
          href={item.href}
          icon={item.icon}
          key={item.href}
        />
      ))}
    </nav>
  );
}
