<script>
export default {
  name: "PortfolioProject",
  props: {
    projectName: String,
    projectImage: String,
    projectAlt: String,
    projectLink: String
  },
  methods: {
    openLink(){
      open(this.projectLink, '_blank')
    }
  }
}
</script>

<template>
  <article class="c-project">
    <h3 class="c-project__title">{{ projectName }}</h3>
    <figure>
      <img :src="projectImage" :alt="projectAlt">
    </figure>
    <button  @click="openLink" :aria-label="`Ver projeto ${projectName}`" class="button">Ver projeto</button>
  </article>
</template>

<style src="./styles.scss" lang="scss" scoped/>
