const menuLinks = [
  {
    label: "About this site",
    href: "https://github.com/iamnbutler/design-docs/blob/main/README.md"
  },
  {
    label: "How to contribute",
    href: "https://github.com/iamnbutler/design-docs/blob/main/CONTRIBUTING.md"
  },
  {
    label: "Release notes",
    href: "https://github.com/iamnbutler/design-docs/blob/main/README.md"
  }
]

function SidebarMenuLink({ label, href }: { label: string, href: string }) {
  return (
    <a href={href} className={`flex items-center space-x-1.5 text-zinc-400 hover:text-indigo-600`}>
      <span>{label}</span> <span className="text-xs relative top-0.5">↗️</span>
    </a>
  )
}

export default function Sidebar() {
  return (
    <aside className="col-span-2 py-4 px-8 mt-12 divide-y divide-zinc-800 divide-dashed font-mono text-sm">
      <menu className="flex flex-col space-y-1 py-4">
        {menuLinks.map(link =>
          <SidebarMenuLink key={link.href} label={link.label} href={link.href} />)}
      </menu>
      <footer className="py-4 text-zinc-600 text-xs">
        <p>"Design Docs" is an open source project that is licensed under the <a href="https://github.com/iamnbutler/design-docs/blob/main/LICENSE">CC0-1.0</a> license. This allows for any individual to contribute to the project and permits the use of this content in any manner.</p>
      </footer>
    </aside>
  )
}