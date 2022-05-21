import NextLink from "next/link";
import { GithubIcon } from "./Icon";
import LeftNav from "./LeftNav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col w-screen space-x-1 overflow-x-hidden">
        <nav className="flex justify-between px-8 border-b bg-base02 border-base00">
          <div className="flex items-center space-x-4">
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
            <a href="https://github.com/iamnbutler/design-industry-intro">
              <GithubIcon />
            </a>
          </div>
        </nav>
        <div className="flex w-full space-x-1">
          <LeftNav />
          <div className="w-full">
            <div className="max-w-2xl mx-auto my-8">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
