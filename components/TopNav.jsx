import NextLink from "next/link";
import { GithubIcon } from "./Icon";

const tools = [
  {
    name: "Design Docs on Github",
    href: "https://github.com/iamnbutler/design-docs",
    icon: <GithubIcon />,
  },
];

export default function TopNav() {
  return (
    <nav className="flex justify-between px-6 py-1">
      <div className="flex items-center space-x-4 grow">
        <NextLink href="/">
          <a className="block py-2 font-serif italic font-black opacity-100 text-md text-base0A hover:opacity-80">
            Design Docs
          </a>
        </NextLink>
        <a
          className="flex items-center justify-center h-8 px-3 space-x-2 text-sm font-semibold border rounded-lg bg-base02 hover:opacity-80 border-base04/10 text-md text-base06 drop-shadow-md"
          href="https://github.com/iamnbutler/design-docs"
        >
          v2.0.0
        </a>
      </div>
      <div className="flex items-center space-x-4 text-base06">
        {/* TODO: Add tooltips to tools after Chakra is added. */}
        {tools.map((tool) => (
          <a
            href={tool.href}
            title={tool.name}
            key={tool.name}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-8 h-8 space-x-2 border rounded-lg bg-base00 hover:opacity-80 border-base04/10 text-md text-base06 drop-shadow-md"
          >
            {tool.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
