const menuLinks = [
  {
    label: 'About this site',
    href: 'https://github.com/iamnbutler/design-docs/blob/main/README.md',
  },
  {
    label: 'How to contribute',
    href: 'https://github.com/iamnbutler/design-docs/blob/main/CONTRIBUTING.md',
  },
  {
    label: 'Release notes',
    href: 'https://github.com/iamnbutler/design-docs/blob/main/README.md',
  },
];

function SidebarMenuLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className={`flex items-center space-x-1.5 text-slate-400 hover:text-indigo-600`}
    >
      <span>{label}</span> <span className="relative top-0.5 text-xs">↗️</span>
    </a>
  );
}

export default function Sidebar() {
  return (
    <aside className="col-span-2 m-4 divide-y divide-dashed divide-slate-800 border border-black p-2 font-mono text-sm">
      <menu className="flex flex-col space-y-1">
        {menuLinks.map((link) => (
          <SidebarMenuLink
            key={link.href}
            label={link.label}
            href={link.href}
          />
        ))}
      </menu>
      <footer className="py-4 text-xs text-slate-600">
        <p>
          "Design Docs" is an open source project that is licensed under the{' '}
          <a href="https://github.com/iamnbutler/design-docs/blob/main/LICENSE">
            CC0-1.0
          </a>{' '}
          license. This allows for any individual to contribute to the project
          and permits the use of this content in any manner.
        </p>
      </footer>
    </aside>
  );
}
