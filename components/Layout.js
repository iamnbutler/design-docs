const navigation = [
  { name: 'Getting Started', href: '/posts/getting-started', current: true },
  { name: 'Fundamentals', href: '/posts/fundamentals', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
  return (
    <>
      <div className="flex space-x-1">
        <nav className="space-y-1 w-64 p-4" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <span className="truncate">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current ? 'bg-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200',
                    'ml-auto inline-block py-0.5 px-3 text-xs rounded-full'
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
        <div className="w-full">
          <div className="max-w-2xl mx-auto my-8">{children}</div>
        </div>
      </div>
    </>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}