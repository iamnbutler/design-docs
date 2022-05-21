const navigation = [
  { name: "Introduction", href: "/posts/intro", current: true },
  { name: "Discover the Roles", href: "/posts/roles", current: false },
  { name: "Build a Foundation", href: "/posts/basics", current: false },
  { name: "Have work to show", href: "/posts/work", current: false },
  { name: "Have a portfolio", href: "/posts/portfolio", current: false },
  { name: "Talk about your work", href: "/posts/talk", current: false },
  { name: "Further Reading", href: "/posts/readings", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LeftNav() {
  return (
    <nav
      className="w-64 p-4 space-y-1 border-r bg-base01 border-base00"
      aria-label="Sidebar"
    >
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? "bg-base0C text-base06"
              : "bg-base01 hover:bg-base02 border-base00 text-base07",
            "group flex items-center px-3 py-2 text-sm rounded-md font-bold"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          <span className="truncate">{item.name}</span>
          {item.count ? (
            <span
              className={classNames(
                item.current
                  ? "bg-white"
                  : "bg-gray-100 text-gray-600 group-hover:bg-gray-200",
                "ml-auto inline-block py-0.5 px-3 text-xs rounded-full"
              )}
            >
              {item.count}
            </span>
          ) : null}
        </a>
      ))}
    </nav>
  );
}
