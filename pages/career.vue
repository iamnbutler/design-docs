<template>
  <main>
    <div class="container mx-auto">
      <Nav></Nav>
      <div class="docs prose font-prose">
        <h1>Career</h1>
        <article>
          <h2>Intro to the Design Industry</h2>
          <h3>Preface</h3>
          <h3>Design Roles & Paths</h3>
          <p>Early in a their career there is an initial fork that many designers reach:</p>
          <ol>
              <li>Do I continue to learn and practice a variety of different types of design?</li>
              <li>Or do I specilize in one thing like brand design, prototyping, etc?</li>
          </ol>
          <p>There are many opinions on this topic, but in my personal experience I would guide designers early in their careers to take a general approach to design.</p>
          <p>Building fundimental skills and crafting high quality work with level up your design work at a fast pace.</p>
          <ul>
            <li>UX Design</li>
            <li>UI Design</li>
            <li>Visual Design</li>
            <li>Interaction Designer</li>
            <li>Design Program Management (Design Operations)</li>
            <li>
              Sub-fields, Specializations and single field design (Icon Design,
              Accessibility Design, Type Design, etc)
            </li>
          </ul>
          <Collapseable>
            <template v-slot:title>
              How are UI, UX and Product Design different?
            </template>
            <template v-slot:content> hello world </template>
          </Collapseable>
          <Collapseable>
            <template v-slot:title>
              Do I need visual design if I just want to be a UX designer?
            </template>
            <template v-slot:content> hello world </template>
          </Collapseable>
          <h4>Senior Design Roles</h4>
          <ul>
            <li>Systems Design*</li>
            <li>Design Management</li>
            <li>Staff Design</li>
          </ul>
          <h4>Tangential Roles</h4>
          <p>
            These all require going deep on a skill I would consider outside of
            (but often useful to!) a designer's core skill set.
          </p>
          <ul>
            <li>Project Manager</li>
            <li>Prototyper</li>
            <li>Design Engineer (or Frontend Developer)</li>
          </ul>
          <h2>Getting in to the industry</h2>
          <ol>
            <li>Learn the basics</li>
            <li>Have work to show</li>
            <li>Have a portfolio</li>
            <li>Be searchable</li>
            <li>Talk about your work</li>
            <li>Understand your level</li>
          </ol>
          <h3>Have work to show</h3>
          <h4>Further Reading</h4>
          <a
            href="https://medium.com/intercom-inside/the-dribbblisation-of-design-406422ccb026"
            >The Dribbblisation of Design – Paul Adams, 2014</a
          >
          <h3>Talk about your work</h3>
          <h4>Further Reading</h4>
          <a
            href="https://brianlovin.com/writing/how-to-give-a-great-product-design-portfolio-presentation"
            >How to give a great product design portfolio presentation – Brian
            Lovin, 2021</a
          >
        </article>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
//   border-left: 1px solid black;
//   border-right: 1px solid black;
}

h1,
h2,
h3, nav {
//   border-bottom: 1px solid black;
}
</style>
