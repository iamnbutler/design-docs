'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface Chapter {
  href: string;
  name: string;
}

export interface Lesson {
  href: string;
  name: string;
  description: string;
  chapters?: Chapter[];
}

export function LessonNavItem({ lesson }: { lesson: Lesson }) {
  const { href, name, description, chapters } = lesson;
  const pathname = usePathname();
  const current = pathname && pathname.startsWith(href);

  const header = (
    <Link
      href={href}
      className={`
          flex flex-col rounded-sm border px-4 py-2 text-sm
          ${
            current
              ? 'border-amber-500/50 bg-gradient-to-r from-amber-500/5 to-amber-500/10 shadow-xl hover:border-amber-500/60'
              : 'border-transparent hover:border-zinc-800'
          }
        `}
    >
      <span
        className={`
          font-bold
          ${current ? 'text-zinc-200' : 'text-zinc-400'}
          `}
      >
        {' '}
        {name}
      </span>
      <span
        className={`
        italic
        ${current ? 'text-amber-400/50' : 'text-zinc-500'}
        `}
      >
        {description}
      </span>
    </Link>
  );

  if (current && chapters) {
    return (
      <div className="flex flex-col pt-2 pb-4 space-y-2 border-b border-zinc-800">
        <header className="pb-2">{header}</header>
        {chapters.map((chapter, i) => {
          const current = pathname && pathname.startsWith(chapter.href);
          return (
            <Link
              key={chapter.href + i}
              href={chapter.href}
              className={`ml-4 text-sm ${
                current ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {chapter.name}
            </Link>
          );
        })}
      </div>
    );
  }

  return header;
}
