import '@/styles/globals.css';
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
  href: string;
  headline: string;
  description: string;
  active?: boolean;
}

export function LessonNavItem({
  href,
  headline,
  description,
  active,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`
        flex flex-col border px-4 py-2 text-sm rounded-sm
        ${active
          ? 'border-zinc-800 shadow-xl'
          : 'border-transparent hover:border-zinc-800'
        }
      `}
    >
      <span
        className={`
        font-bold
        ${active
            ? 'text-zinc-200'
            : 'text-zinc-400'
          }
        `}> {headline}</span>
      <span className="italic text-zinc-500">{description}</span>
    </Link>
  );
}

export function Navigation() {
  return (
    <div className="col-span-2 p-4 space-y-2">
      <LessonNavItem
        href="/"
        headline="Getting Started"
        description="Taking your first steps"
        active={true}
      />
      <LessonNavItem
        href="/"
        headline="Build a Foundation"
        description="Investing in your future"
        active={false}
      />
    </div>
  );
}

export function Sidebar() {
  return (
    <div className='col-span-3 p-4'>
      <div className='border border-zinc-800'>
        sidebar
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Design Docs</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900 text-zinc-50">
        <div className="grid w-full grid-cols-12 gap-4">
          <Navigation />
          <div className='col-span-7 p-4'>
            {children}
          </div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
