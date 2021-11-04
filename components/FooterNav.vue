<template>
  <nav class="nav-footer flex flex-row justify-between mt-8">
    <div
      class="
        prev-link
        p-2
        pl-4
        pr-4
        bg-transparent
        hover:bg-gray-100
        rounded-lg
      "
    >
      <NuxtLink
        v-if="prev"
        :to="prevLink"
        class="inline-block"
        active-class="active"
        >&larr; {{ prevText }}</NuxtLink
      >
    </div>
    <div
      class="
        next-link
        p-2
        pl-4
        pr-4
        bg-yellow-50
        hover:bg-yellow-200
        rounded-lg
      "
    >
      <NuxtLink
        v-if="next"
        :to="nextLink"
        class="inline-block"
        active-class="active"
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
    nextText: String,
  },
};
</script>

<style lang="scss" scoped>
.nav-footer a {
  text-decoration: none;
}
</style>
