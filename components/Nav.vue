<template>
  <nav class="font-mono pb-8 mb-8 mr-32 flex-none flex flex-col">
    <ul>
      <li>
        <NuxtLink
          to="/"
          class="pb-2 mb-2 font-bold inline-flex border-b-4"
          active-class="active"
          ><h1>Intro to the Design Industry</h1></NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/basics"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Learn the basics</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/roles"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Understand the roles</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/work"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Have work to show</NuxtLink
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
        <NuxtLink
          to="/presence"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Be searchable</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/talk"
          class="pt-2 pb-2 mb-2 inline-flex border-b-4"
          active-class="active"
          >Talk about your work</NuxtLink
        >
      </li>
    </ul>
    <p class="mt-6 text-xs text-gray-500">
      Ver 1.0,
      <a rel="author" href="https://twitter.com/iamnbutler" class="inline-block "
        >Nate Butler</a
      >
    </p>
    <p class="mt-2 text-xs text-gray-400">Last updated <time
        class="inline-block"
        pubdate
        datetime="2021-11-04"
        title="November 4th, 2021"
        >11.04.21</time
      ></p>
  </nav>
</template>

<style lang="scss" scoped>

a:not(.active) {
  border-bottom-color: transparent;
  &:hover {
    border-bottom-color: #34D399;  
  }
}

a.active {
  border-bottom-color: #34D399;
  &:hover {
    border-bottom-color: #10B981;  
  }
}

</style>