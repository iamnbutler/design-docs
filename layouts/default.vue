<template>
  <main>
    <div class="container mx-auto flex flex-row pt-16">
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

</style>