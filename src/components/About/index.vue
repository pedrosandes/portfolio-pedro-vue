<script>
import SectionTitle from "@/components/SectionTitle"
export default {
  name: "About",
  components: {
    SectionTitle
  }
}
</script>

<template>
  <section id="about" class="c-about">
     <header class="header">
          <SectionTitle>Sobre mim</SectionTitle>
      </header>
      <section class="wrapper">
        <div class="c-texts">
          <p class="text">
            Me chamo Pedro Sandes, tenho 18 anos e sou desenvolvedor Front-end.
            Comecei no mundo da programação no final do ano de 2020, com insentivo 
            do meu irmão que já trabalhava na área de tecnologia, comecei meus estudos 
            com UX/UI e depois partir para HTML e CSS, depois de um tempo estudando sobre 
            essas duas linguagens, conheci uma iniciativa social chamada Estartando Devs onde 
            me guiaram e me orientaram a me tornar um desenvolvedor.
          </p>
          <p class="text">
            Sou uma pessoa que gosta muito de novos desafios, e gosto de sempre
            estar aprendendo e ajudando pessoas, faço parte de comunidades como 
            a da do próprio Estartando Devs, Rocketseat e da Ballerini.
          </p>
        </div>
        <img title="Imagem de avatar" class="avatar" src="@/assets/images/avatar-smoking.png" alt="Imagem de avatar do Pedro Sandes" />
      </section>
  </section>
</template>

<style src="./styles.scss" lang="scss" scoped />
 