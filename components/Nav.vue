<template>
  <nav class="font-mono pb-8 mb-8 mr-32 flex flex-col">
    <ul>
      <li>
        <NuxtLink
          to="/"
          class="pb-2 mb-2 font-bold inline-flex border-b-4"
          active-class="active border-green-400"
          >Intro to the Design Industry</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/basics"
          class="pt-2 pb-2 mb-2 inline-flex hover:border-green-100"
          active-class="active border-green-400"
          >Learn the basics</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/roles"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active border-green-400"
          >Understand the roles</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/work"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active border-green-400"
          >Have work to show</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/portfolio"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active border-green-400"
          >Have a portfolio</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/presence"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active border-green-400"
          >Be searchable</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/talk"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active border-green-400"
          >Talk about your work</NuxtLink
        >
      </li>
    </ul>
    <p>Ver 1.0, <a rel="author" href="https://twitter.com/iamnbutler" class="inline-block">Nate Butler</a></p>
  </nav>
</template>

<style lang="sass" scoped></style>
