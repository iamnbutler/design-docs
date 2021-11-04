<template>
  <nav class="nav-footer flex flex-row justify-between mt-8">
    <div class="prev-link">
      <NuxtLink v-if="prev" :to="prevLink" class="inline-block border-b-4" active-class="active"
        >&larr; {{ prevText }}</NuxtLink
      >
    </div>
    <div class="next-link">
      <NuxtLink v-if="next" :to="nextLink" class="inline-block border-b-4" active-class="active"
        >{{ nextText }} &rarr;</NuxtLink
      >
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    prev: Boolean,
    prevLink: String,
    prevText: String,
    next: Boolean,
    nextLink: String,
    nextText: String
  },
};
</script>

<style lang="scss" scoped>
a:not(.active) {
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
.nav-footer a {
    text-decoration: none;
}
</style>
