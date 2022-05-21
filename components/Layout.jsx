import LeftNav from "./LeftNav";
import TopNav from "./TopNav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col w-screen space-x-1 overflow-x-hidden">
        <div className="w-full font-mono border-b bg-base02 border-base00">
          <TopNav />
        </div>
        <div className="w-full">
          <div className="flex max-w-5xl mx-auto space-x-1">
            <LeftNav />
            <div className="w-full">
              <div className="max-w-2xl mx-auto my-8">{children}</div>
            </div>
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
