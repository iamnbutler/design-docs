import { default as NextLink } from "next/link";
import { useRouter } from "next/router";
import { ExternalIcon } from "./Icon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Link({ href, name, icon, external = false }) {
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
    text-base06`;

  // Nav links that are not current
  const inactiveStyle = `
    text-base04 hover:text-base06`;

  {
    /* prettier-ignore-end */
  }

  current ? (commonStyle += activeStyle) : (commonStyle += inactiveStyle);

  return (
    <NextLink href={href} passHref>
      <a className={commonStyle} aria-current={current && "page"}>
        {icon && (
          <div
            className={classNames(
              current
                ? "bg-base0C/25 group-hover:bg-base0C/40 border-base04/20"
                : "bg-base01 group-hover:bg-base03 border-base04/10",
              "p-1.5 flex items-center text-md rounded-lg space-x-2 text-base06 border drop-shadow-md"
            )}
          >
            <span
              className={
                current ? "opacity-100" : "opacity-40 group-hover:opacity-80"
              }
            >
              {icon}
            </span>
          </div>
        )}

        <div>
          <span className="truncate">{name}</span>
          {external && (
            <span className="font-mono text-xs opacity-50">
              <ExternalIcon />
            </span>
          )}
        </div>
      </a>
    </NextLink>
  );
}
