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
        <NuxtLink
          to="/work"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Have work to show </NuxtLink
        ><span class="text-gray-400">&nbsp;&midast;</span>
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
        <NuxtLink
          to="/talk"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Talk about your work</NuxtLink
        ><span class="text-gray-400">&nbsp;&midast;</span>
      </li>
      <li>
        <NuxtLink
          to="/readings"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Further Reading</NuxtLink
        >
      </li>
      <li><p class="mt-2 text-xs text-gray-400">&midast; Work in progress!</p></li>
    </ul>

    <p class="pt-12 text-xs text-gray-500">
      <a href="https://github.com/iamnbutler/design-resources" class="hover:text-gray-800" target="_blank"
        >Ver 1.0</a
      >,
      <a
        rel="author"
        href="https://twitter.com/iamnbutler"
        class="inline-block hover:text-gray-800"
        target="_blank"
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
    border-bottom-color: #fcd34d;
  }
}

a.active {
  border-bottom-color: #fcd34d;
  &:hover {
    border-bottom-color: #fbbf24;
  }
}
</style>
