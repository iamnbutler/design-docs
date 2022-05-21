import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import Layout from '../../components/Layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

const components = {
  Head,
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}


export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <Link href="/">
        <a>👈 Go back home</a>
      </Link>
      <div className="relative py-16 overflow-hidden bg-white">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <span className="block text-base font-semibold tracking-wide text-center text-indigo-600 uppercase">
              {frontMatter.description && (
                <p className="description">{frontMatter.description}</p>
              )}
            </span>
            <h1 className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              {frontMatter.title}
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
              aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
              egestas fringilla sapien.
            </p>
          </div>
          <main className="mx-auto mt-6 text-xl prose prose-xl text-gray-500">
            <MDXRemote {...source} components={components} />
          </main>
        </div>
      </div>
    </Layout>
  )
}

