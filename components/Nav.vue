<template>
  <nav class="font-mono pb-8 mb-8 mr-32 flex-none flex flex-col">
    <ul>
      <li>
        <NuxtLink
          to="/"
          class="pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Introduction</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/roles"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Discover the roles</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/basics"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Build a foundation</NuxtLink
        >
      </li>
      <li>
        <!-- <NuxtLink
          to="/work"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Have work to show</NuxtLink
        > -->
        <a
          href="#coming-soon"
          class="
            pt-2 pb-2 mb-2 inline-flex border-b-4 border-b-transparent text-gray-400 inactive
          "
          >Have work to show</a
        >
      </li>
      <li>
        <NuxtLink
          to="/portfolio"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Have a portfolio</NuxtLink
        >
      </li>
      <li>
        <!-- <NuxtLink
          to="/talk"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Talk about your work</NuxtLink
        > -->
        <a
          href="#coming-soon"
          class="
            pt-2 pb-2 mb-2 inline-flex border-b-4 border-b-transparent text-gray-400 inactive
          "
          >Talk about your work</a
        >
      </li>
      <li>
        <NuxtLink
          to="/readings"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Further Reading</NuxtLink
        >
      </li>
    </ul>
    <p class="mt-6 text-xs text-gray-500">
      Ver 1.0,
      <a
        rel="author"
        href="https://twitter.com/iamnbutler"
        class="inline-block hover:text-gray-800"
        >Nate Butler</a
      >
    </p>
    <p class="mt-2 text-xs text-gray-400">
      Last updated
      <time
        class="inline-block"
        pubdate
        datetime="2021-11-04"
        title="November 4th, 2021"
        >11.04.21</time
      >
    </p>
  </nav>
</template>

<style lang="scss" scoped>
a:not(.active, .inactive) {
  border-bottom-color: transparent;
  &:hover {
    border-bottom-color: #FCD34D;
  }
}

a.active {
  border-bottom-color: #FCD34D;
  &:hover {
    border-bottom-color: #FBBF24;
  }
}
</style>
