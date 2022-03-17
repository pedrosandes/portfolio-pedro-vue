<script>
import mediaSociais from "@/assets/mock/mediasSociais.js"
export default {
  name: "TheFooter",
  data(){
    return {
      medias: mediaSociais,
    }
  },
  computed: {
    currentYear(){
      return new Date().getFullYear()
    }
  }
}
</script>

<template>
  <footer>
    <div class="author">
      <h2>Pedro Sandes</h2>
      <p>Front-end Developer</p>
    </div>
      <nav aria-label="Links sociais">
        <ul class="social">
          <li v-for="media in medias" :key="media.id" >
            <a :href="media.link" target="_blank" rel="noreferrer">
              <img :src="media.icon" :alt="media.alt">
            </a>
          </li>
        </ul>
      </nav>
    <div>
      <p>Todos os direitos reservados ©  Pedro Sandes {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style src="./styles.scss" lang="scss" scoped/>
