<template>
  <main class="pl-8 pr-8">
    <h1 class="container mx-auto pt-8 md:pt-16 font-mono text-gray-400">Getting your first job in the product design industry</h1>
    <div class="container mx-auto flex flex-col md:flex-row pt-8 md:pt-24 pb-8 md:pb-32">
      <Nav></Nav>
      <div class="docs prose font-prose flex-auto">
          <slot />
          <NuxtPage/>
      </div>
    </div>
  </main>
</template>

<style>

body {
  width: 100vw;
}

.prose h2 {
  margin-top: 0;
}

figure p:first-child {
  margin-top: 0;
}

figure p:last-child {
  margin-bottom: 0;
}

.align-with-list {
  margin: 0;
  margin-left: 2rem;
  
}

</style>