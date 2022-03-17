<script>
import Button from "@/components/Button"

export default {
  name: "Main", 
  components: {
    Button
  },
  methods: {
    goAboutMe(){
      location.href = "/#about"
    }
  } 
}
</script>

<template>
  <section id="home" class="c-main">
    <img title="Imagem de avatar" class="avatar" src="@/assets/images/avatar.png"  />
    <div class="main-text-content">
      <h1 class="title">Olá me chamo <span class="decoration-text">Pedro</span>, e sou <span class="decoration-text">Front-end Developer</span>.</h1>
      <Button v-on:click="goAboutMe">Sobre mim</Button>
    </div>
  </section>
</template>

<style src="./styles.scss" lang="scss" scoped/>
