import NextLink from "next/link";
import { GithubIcon } from "./Icon";

const tools = [
  {
    name: "Design Docs on Github",
    href: "https://github.com/iamnbutler/design-industry-intro",
    icon: <GithubIcon />,
  },
];

export default function TopNav() {
  return (
    <nav className="flex justify-between max-w-5xl px-8 mx-auto">
      <div className="flex items-center space-x-4 grow">
        <NextLink href="/">
          <a className="block py-2 font-bold text-md text-base0A">
            Design Docs
          </a>
        </NextLink>
        <a
          className="block px-2 py-0.5 text-sm font-bold border rounded-md text-base06 bg-base0C/20 border-base0C/30"
          href="https://github.com/iamnbutler/design-industry-intro"
        >
          v2.0.0
        </a>
      </div>
      <div className="flex items-center space-x-2 text-base06">
        {/* TODO: Add tooltips to tools after Chakra is added. */}
        {tools.map((tool) => (
          <a href={tool.href} title={tool.name} target="_blank">
            {tool.icon}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-2 text-base06"></div>
    </nav>
  );
}
