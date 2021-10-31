<template>
  <div class="collapseable cursor-pointer flex flex-col mb-2" :class="{ active: isActive }">
    <div
      class="title flex flex-row items-center font-medium"
      @click="isActive = !isActive"
    >
      <span class="icon chevron mr-3">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.10355 1.14645C3.90829 0.951184 3.59171 0.951184 3.39645 1.14645C3.20118 1.34171 3.20118 1.65829 3.39645 1.85355L4.10355 1.14645ZM3.39645 10.1464C3.20118 10.3417 3.20118 10.6583 3.39645 10.8536C3.59171 11.0488 3.90829 11.0488 4.10355 10.8536L3.39645 10.1464ZM8.39142 5.43431L4.10355 1.14645L3.39645 1.85355L7.68431 6.14142L8.39142 5.43431ZM7.68431 5.85858L3.39645 10.1464L4.10355 10.8536L8.39142 6.56569L7.68431 5.85858ZM7.68431 6.14142C7.60621 6.06332 7.60621 5.93668 7.68431 5.85858L8.39142 6.56569C8.70384 6.25327 8.70384 5.74673 8.39142 5.43431L7.68431 6.14142Z"
            fill="inherit"
          />
        </svg>
      </span>
      <slot name="title">Title</slot>
    </div>
    <div class="content hidden pl-6">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isActive: false };
  },
};
</script>

<style lang="scss" scoped>

.icon {
  display: inline-block;

  & svg {
    transition: all 100ms;
    fill: rgba(0, 0, 0, 0.4);
  }
}
.active .icon {
  & svg {
    transform: rotate(90deg);
    fill: rgba(0, 0, 0, 1);
  }
}

.active .content {
    display: block;
}
</style>
