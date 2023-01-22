'use client';

import Image, { StaticImageData } from 'next/image';
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
          flex items-center border-b border-black px-2 pb-2 text-sm
          ${current ? 'text-blue-500' : 'bg-transparent hover:border-slate-500'}
        `}
    >
      <div className="relative top-0.5 flex flex-col">
        <span
          className={`
          font-bold
          ${current ? 'text-blue-500' : 'text-black'}
          `}
        >
          {' '}
          {name}
        </span>
      </div>
    </Link>
  );

  if (current && chapters) {
    return (
      <div className="flex flex-col border-b border-black">
        <header>{header}</header>
        {chapters.map((chapter, i) => {
          const current = pathname && pathname.startsWith(chapter.href);
          return (
            <Link
              key={chapter.href + i}
              href={chapter.href}
              className={`ml-2 border-l border-black pl-2 text-sm ${
                current
                  ? 'text-blue-500 hover:text-blue-500/70'
                  : 'text-black hover:text-black/50'
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
