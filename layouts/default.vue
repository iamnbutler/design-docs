<template>
  <Head :lang="'en-US'">
    <Title>Getting your first job in the product design industry</Title>
    <Meta name="description" :content="''" />
    <Link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎒</text></svg>" />
  </Head>
  <main class="pl-4 pr-4">
    <h1
      class="container mx-auto pt-8 md:pt-16 font-mono font-bold text-gray-700"
    >
      <span class="squiggle"
        >🎒 Getting your first job in the product design industry</span
      >
    </h1>
    <div
      class="
        container
        mx-auto
        flex flex-col
        md:flex-row
        pt-8
        md:pt-16
        pb-8
        md:pb-32
      "
    >
      <Nav></Nav>
      <div class="docs prose font-prose flex-auto">
        <slot />
        <NuxtPage />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  scrollToTop: true
}
</script>

<style>
body {
  width: 100vw;
}

.prose h2 {
  margin-top: 0;
}

.prose h2:not(:first-child) {
  margin-top: 3rem;
}

.prose h3:not(:first-child) {
  margin-top: 2rem;
}

.editorial p:first-child,
figure p:first-child {
  margin-top: 0;
}

.editorial p:last-child,
figure p:last-child {
  margin-bottom: 0;
}

.align-with-list {
  margin: 0;
  margin-left: 2rem;
}

.prose .tag {
  margin-bottom: 0;
}
</style>
