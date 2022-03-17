<script>
import SectionTitle from "@/components/SectionTitle"
import Button from "@/components/Button"
import SkillsCard from "@/components/Skills/components/SkillsCard"
import Skills from "@/assets/mock/skills"

export default {
  name: "Portfolio",
  data(){
    return {
      skillsList: Skills
    }
  },
  components: {
    SectionTitle,
    Button,
    SkillsCard
  },
  methods: {
    openLink(){
      window.open('https://www.linkedin.com/in/pedro-sandes', '_blank')
    }
  }
}
</script>

<template>
  <section id="skills" class="c-skills">
    <header class="header">
      <SectionTitle>Habilidades Principais</SectionTitle>
      <Button @click="openLink">Ver todas as habilidades</Button>
    </header>
    <div class="c-skill">
      <SkillsCard
        v-for="skill in skillsList" 
        :key="skill.id"
        :title="skill.title"
        :description="skill.description"
        :image="skill.image"
        :alt="skill.alt"
       />
    </div>
  </section>
</template>

<style src="./styles.scss" lang="scss" scoped />
 