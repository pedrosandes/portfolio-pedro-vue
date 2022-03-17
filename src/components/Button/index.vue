<script>
export default {
  name: "Button",
  props: {
   styleClass: String
  }
}
</script>

<template>
  <button type="button" :class="styleClass">
    <slot></slot>
  </button>
</template>

<style src="./styles.scss" lang="scss" scoped />
 