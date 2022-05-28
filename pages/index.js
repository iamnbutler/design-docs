import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Layout from "../components/Layout";
import PageProse from "../components/PageProse";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Index() {
  return (
    <Layout>
      <PageProse title="Welcome to Design Docs">
        <p>
          There is no "right way" to find your path in the industry. The world
          of digital product design is still rapidly evolving and has come a
          long way, even in the past five years.
        </p>
        <p>
          The exciting part is you are on your way to joining an industry with a
          tremendous amount of impact on people's day-to-day lives–It's up to
          you to make it for better and not for worse.
        </p>
        <h2>Finding Your Path</h2>
        <p>
          Together, we'll outline some common paths, roles, and the way they
          interact. However, never feel like you must follow a path anyone lays
          out for you. One of the most magical things about design and the
          digital world is that you can always forge your own way, and there are
          some exciting corners to find.
        </p>
        <p>
          <p>
            You can give feedback on anything on this site{" "}
            <a href="https://forms.gle/jimgp3uAk8df8MUH9">using this form</a>,
            or if you are familiar with Github you can{" "}
            <a href="https://github.com/iamnbutler/design-industry-intro/discussions/new">
              start a discussion
            </a>
            . Feel free to reach out to me over{" "}
            <a href="mail-to:iamnbutler@gmail.com">email</a> or on{" "}
            <a href="https://twitter.com/iamnbutler">twitter</a> as well!
          </p>
        </p>
      </PageProse>
    </Layout>
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
