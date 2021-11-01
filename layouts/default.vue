<template>
  <main>
    <div class="container mx-auto flex flex-row pt-16">
      <Nav></Nav>
      <div class="docs prose font-prose">
          <slot />
          <NuxtPage/>
      </div>
    </div>
  </main>
</template>