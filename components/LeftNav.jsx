import {
  BookmarkIcon,
  BookOpenIcon,
  ChatIcon,
  CursorClickIcon,
  InformationCircleIcon,
  PhotographIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import NavLink from "./NavLink";

const navigation = [
  {
    name: "Build a Foundation",
    href: "/posts/basics",
    icon: <BookOpenIcon className="w-4 h-4" />,
  },
  {
    name: "Discover the Roles",
    href: "/posts/roles",
    icon: <SearchIcon className="w-4 h-4" />,
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
    href: "/posts/resources",
    icon: <BookmarkIcon className="w-4 h-4" />,
  },
];

export default function LeftNav() {
  return (
    <nav
      className="min-h-full py-8 mx-2 space-y-1 border-r w-96 border-base03"
      aria-label="Sidebar"
    >
      <NavLink
        name="Introduction"
        href="/"
        icon={<InformationCircleIcon className="w-4 h-4" />}
      />
      <div className="pb-4">
        {navigation.map((item) => (
          <NavLink
            name={item.name}
            href={item.href}
            icon={item.icon}
            key={item.href}
          />
        ))}
      </div>
      <ul className="pt-4 border-t border-base03">
        <li>
          <NavLink
            name="About this site"
            href="https://github.com/iamnbutler/design-docs/blob/main/README.md"
          />
          <NavLink
            name="How to contribute"
            href="https://github.com/iamnbutler/design-docs/blob/main/CONTRIBUTING.md"
          />
          <NavLink
            name="Contributors"
            href="https://github.com/iamnbutler/design-docs/graphs/contributors"
          />
          <NavLink
            name="Release notes"
            href="https://github.com/iamnbutler/design-docs/releases"
          />
        </li>
      </ul>
      <div className="flex flex-col px-3 py-2 space-y-2 text-sm opacity-50 group text-base04 hover:opacity-100">
        <p>
          Design docs is an open source project. Anyone can contribute, and this
          content can be used in any way.
        </p>
        <a
          href="https://github.com/iamnbutler/design-docs/blob/main/LICENSE"
          className="underline hover:text-base08"
        >
          CC0-1.0
        </a>
      </div>
    </nav>
  );
}
