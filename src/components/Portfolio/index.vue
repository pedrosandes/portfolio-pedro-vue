<script>
import SectionTitle from "@/components/SectionTitle"
import Button from "@/components/Button"
import PortfolioProject from "@/components/Portfolio/components/PortfolioProject"
import projects from "@/assets/mock/projects"

export default {
  name: "Portfolio",
  data(){
    return {
      projectsList: projects
    }
  },
  components: {
    SectionTitle,
    Button,
    PortfolioProject
  },
  methods: {
    openLink(){
      window.open('https://github.com/pedrosandes?tab=repositories', '_blank')
    }
  }
}
</script>

<template>
  <section id="portfolio"  class="c-portfolio">
    <header class="header">
      <SectionTitle>Portfólio</SectionTitle>
      <Button @click="openLink">Ver todos os projetos</Button>
    </header>
    <div class="c-projects">
      <PortfolioProject 
      v-for="project in projectsList" 
      :key="project.id" 
      :projectName="project.name"
      :projectImage="project.image"
      :projectAlt="project.alt"
      :projectLink="project.link"
      />
    </div>
  </section>
</template>

<style src="./styles.scss" lang="scss" scoped />
 