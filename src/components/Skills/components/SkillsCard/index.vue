<script>
export default {
  name: "SkillsCard",
  props: {
    title: String,
    description: String,
    image: String,
    alt: String,
  }
}
</script>

<template>
  <article class="c-card">
    <figure>
      <img :src="image" :alt="alt">
    </figure>
    <div class="c-texts">
      <h3 aria-label="Titulo de uma tecnologia" >{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </article>
</template>

<style src="./styles.scss" lang="scss" scoped />
