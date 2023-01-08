import '@/styles/globals.css';
import Link from 'next/link';
import React from 'react';
import { LessonNavItem } from './Lesson';
import Sidebar from './sidebar';

const lessons = [
  {
    name: 'Getting Started',
    href: '/',
    description: 'Learn the basics of the course',
    chapters: [
      {
        name: 'Chapter 1: Course Overview',
        href: '/',
      },
      {
        name: 'Chapter 2: Learning Goals',
        href: '/introduction/chapter-2',
      },
      {
        name: 'Chapter 3: Course Materials',
        href: '/introduction/chapter-3',
      },
    ],
  },
  {
    name: 'Build a foundation',
    href: '/foundation',
    description: 'Establish a solid foundation for your learning',
    chapters: [
      {
        name: 'Chapter 1: Basic Concepts',
        href: '/foundation/chapter-1',
      },
      {
        name: 'Chapter 2: Foundational Skills',
        href: '/foundation/chapter-2',
      },
      {
        name: 'Chapter 3: Essential Tools',
        href: '/foundation/chapter-3',
      },
      {
        name: 'Chapter 4: Practice Exercises',
        href: '/foundation/chapter-4',
      },
    ],
  },
  {
    name: 'Discover the roles',
    href: 'https://www.example.com/roles',
    description: 'Explore the different roles in the field',
    chapters: [
      {
        name: 'Chapter 1: Overview of Roles',
        href: 'https://www.example.com/roles/chapter-1',
      },
      {
        name: 'Chapter 2: Case Studies',
        href: 'https://www.example.com/roles/chapter-2',
      },
      {
        name: 'Chapter 3: Interviews with Professionals',
        href: 'https://www.example.com/roles/chapter-3',
      },
      {
        name: 'Chapter 4: Role-Specific Skills and Requirements',
        href: 'https://www.example.com/roles/chapter-4',
      },
    ],
  },
  {
    name: 'Have work to show',
    href: 'https://www.example.com/work',
    description: 'Start building a portfolio of your work',
    chapters: [
      {
        name: 'Chapter 1: Types of Work to Include',
        href: 'https://www.example.com/work/chapter-1',
      },
      {
        name: 'Chapter 2: Gathering and Organizing Your Work',
        href: 'https://www.example.com/work/chapter-2',
      },
      {
        name: 'Chapter 3: Showcasing Your Work Online',
        href: 'https://www.example.com/work/chapter-3',
      },
    ],
  },
  {
    name: 'Have a portfolio',
    href: '/portfolio',
    description: 'Create a professional portfolio',
  },
  {
    name: 'Talk about your work',
    href: '/talk',
    description: 'Learn how to effectively present your work',
  },
  {
    name: 'Further reading',
    href: '/reading',
    description: 'Find additional resources for learning',
  },
];

export function Navigation() {
  return (
    <div className="col-span-3 py-4 px-8 space-y-4">
      <Link href="/" className="font-bold text-zinc-300">
        Design Docs <span className="text-zinc-500">– 2.1</span>
      </Link>
      <menu className="space-y-2">
        {lessons.map((lesson, i) => (
          <LessonNavItem key={lesson.href + i} lesson={lesson} />
        ))}
      </menu>
    </div>
  );
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
          <div className="col-span-7 p-4">{children}</div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
