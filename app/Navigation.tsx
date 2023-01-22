import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LessonNavItem } from '@/app/Lesson';
import bookIcon from '@/app/nav/book-icon.png';
import compassIcon from '@/app/nav/compass-icon.png';
import hammerIcon from '@/app/nav/hammer-icon.png';
import Logo, { Wordmark } from './nav/Logo';

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
    <div className="col-span-3 m-4 border border-black">
      <Link
        href="/"
        className="font-bol relative flex items-center border-b border-black p-2"
      >
        <Logo className="h-16 text-black dark:text-white" />
        <Wordmark className="h-12 text-black dark:text-white" />
      </Link>
      <menu className="">
        {lessons.map((lesson, i) => (
          <LessonNavItem key={lesson.href + i} lesson={lesson} />
        ))}
      </menu>
    </div>
  );
}
