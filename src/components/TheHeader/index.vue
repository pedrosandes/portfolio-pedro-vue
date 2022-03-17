<script>
export default {
  name: "Header",
  data(){
    return {
      isOpenMenu: false,
      isMobile: window.innerWidth < 580
    }
  },
  mounted(){
    window.addEventListener('scroll', this.observerScroll)
    window.addEventListener('resize', this.observerScreenWidth)
  },
  methods: {
    observerScreenWidth(){
      this.isMobile = window.innerWidth < 580
      this.resizeCloseMenu()
    },
    resizeCloseMenu(){
      if(this.isMobile && this.isOpenMenu) {
        this.isOpenMenu = false
        this.removeOverflow()
      }
    }, 
    removeOverflow(){
      document.body.classList.remove('overflow')
    },
    toggleMenu(){
      if(this.isMobile) {
        this.isOpenMenu = !this.isOpenMenu
        document.body.classList.toggle('overflow')
      }
    },
  }
}
</script>

<template>
  <header class="c-header" :class="{open: isOpenMenu}">
    <button :aria-expanded="isOpenMenu" @click="toggleMenu" class="menu-mobile" aria-label="Menu mobile">
      <span arial-label="Clique para abrir ou fechar o menu"></span>
    </button>
    <nav>
      <ul class="menu">
        <li>
          <a @click="toggleMenu" href="#home" class="link">Home</a>
        </li>
        <li>
          <a @click="toggleMenu" href="#about" class="link">Sobre</a>
        </li>
        <li>
          <a @click="toggleMenu" href="#portfolio" class="link">Portfólio</a>
        </li>
        <li>
          <a @click="toggleMenu" href="#skills" class="link">Skills</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style src="./styles.scss" lang="scss" scoped/>


