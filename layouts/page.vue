<template>
  <main>
    <div class="container mx-auto flex flex-row pt-16">
      <Nav></Nav>
      <div class="docs prose font-prose">
        <article>
          <slot />
        </article>
      </div>
    </div>
  </main>
</template>