import { ExternalIcon } from "./Icon";
import { default as NextLink } from "next/link";
import { useRouter } from "next/router";

export default function Link({ href, name, external = false }) {
  {
    /* prettier-ignore-start */
  }

  let current = useRouter().asPath === href;

  // Shared by all links
  let commonStyle = `
    group flex items-center 
    px-3 py-2 space-x-3
    rounded-lg
    text-md font-bold`;

  // Current nav links
  const activeStyle = `
    text-base06 
    hover:text-base06`;

  // Nav links that are not current
  const inactiveStyle = `
    text-base04
    hover:bg-base02 border-base00`;

  {
    /* prettier-ignore-end */
  }

  current
    ? (commonStyle += activeStyle)
    : (commonStyle += inactiveStyle);

  return (
    <NextLink href={href} passHref>
      <a className={commonStyle} aria-current={current && "page"}>
        <span className="truncate">{name}</span>
        {external && (
          <span className="font-mono text-xs opacity-50">
            <ExternalIcon />
          </span>
        )}
      </a>
    </NextLink>
  );
}
