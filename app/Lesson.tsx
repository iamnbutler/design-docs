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
  icon: StaticImageData;
  chapters?: Chapter[];
}

export function LessonNavItem({ lesson }: { lesson: Lesson }) {
  const { href, name, description, icon, chapters } = lesson;
  const pathname = usePathname();
  const current = pathname && pathname.startsWith(href);

  const header = (
    <Link
      href={href}
      className={`
          flex items-center space-x-2 rounded border px-2 py-2 text-sm
          ${
            current
              ? 'border-amber-500/10 bg-gradient-to-r from-amber-500/5 to-amber-500/10 shadow-xl hover:border-amber-500/30'
              : 'border-transparent hover:border-zinc-800'
          }
        `}
      style={{
        filter: 'drop-shadow(0px 4px 2px rgba(24,24,24,0.24))',
      }}
    >
      <Image
        src={icon.src}
        width={48}
        height={48}
        alt="Design Docs Logo – An elaborate book icon"
        className="relative top-0.5 flex h-12 w-12 grow-0"
        style={{
          filter: 'drop-shadow(0px 4px 6px rgba(24,24,24,0.24))',
        }}
      />
      <div className="relative top-0.5 flex flex-col">
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
      </div>
    </Link>
  );

  if (current && chapters) {
    return (
      <div className="flex flex-col space-y-2 border-b border-zinc-800 pt-2 pb-4">
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
