import NextLink from "next/link";
import { useRouter } from "next/router";
import { GithubIcon } from "./Icon";

const tools = [
  {
    name: "Design Docs on Github",
    href: "https://github.com/iamnbutler/design-industry-intro",
    icon: <GithubIcon />,
  },
];

export default function TopNav() {
  // let current = useRouter().asPath === href;
  const router = useRouter();

  return (
    <nav className="flex justify-between px-6 py-1">
      <div className="flex items-center space-x-4 grow">
        <NextLink href="/">
          <a className="block py-2 font-serif italic font-black opacity-100 text-md text-base0A hover:opacity-80">
            Design Docs
          </a>
        </NextLink>
        <a
          className="block px-2 py-0.5 text-sm font-bold border rounded-md text-base06 border-base03 opacity-100 hover:opacity-80"
          href="https://github.com/iamnbutler/design-industry-intro"
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
            className="opacity-100 hover:opacity-80"
          >
            {tool.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
