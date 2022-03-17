<script>
import TheHeader from "@/components/TheHeader"
import Home from "@/components/Home"
import About from "@/components/About"
import Portfolio from "@/components/Portfolio"
import Skills from "@/components/Skills"
import TheFooter from "@/components/TheFooter"

export default {
  name: 'App',
  components: {
    TheHeader,
    Home,
    About,
    Portfolio,
    Skills,
    TheFooter
  }
}
</script>

<template>
    <TheHeader />
    <main>
      <Home />
      <About />
      <Portfolio />
      <Skills />
    </main>
    <TheFooter />
</template>

<style src="@/assets/scss/_reset.scss" lang="scss" />

 


