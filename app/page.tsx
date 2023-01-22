import { iADuoRegular, iAQuattroRegular } from '@/app/fonts/font';

export default function Page() {
  return (
    <article
      className={`prose prose-lg prose-slate mx-auto mt-12 ${iADuoRegular.className}`}
    >
      <h1 className={iAQuattroRegular.className}>Getting Started</h1>
      <p>
        The field of digital product design is constantly evolving and has grown
        significantly in recent years. As you embark on your journey in this
        industry, it's important to keep in mind that there is no one "right"
        way to find your place in it. Every designer's path is unique and will
        depend on their skills, interests, and experiences.
      </p>

      <p>
        One of the exciting aspects of this field is the impact it has on
        people's daily lives. From the apps we use on our phones to the websites
        we visit, digital product design plays a crucial role in how we interact
        with technology. As a designer, you have the opportunity to create
        meaningful and user-friendly products that can make a positive
        difference in the world.
      </p>

      <p>
        As you progress through this course, we will outline some common paths
        and roles within the industry and how they fit together. However, it's
        important to remember that you are not limited to any particular route.
        The digital world is full of possibilities and allows for a great deal
        of creativity and flexibility. Don't be afraid to explore different
        areas and find your own unique niche within the field.
      </p>
    </article>
  );
}
