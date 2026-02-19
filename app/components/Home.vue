<template>
  <section>
    <!--<h1 class="title">Home</h1>
    <Element />
    <Element />
    <Element />-->
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide">0</li>
          <li class="glide__slide">1</li>
          <li class="glide__slide">2</li>
        </ul>
      </div>

      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  </section>
</template>

<script>
import Glide from '@glidejs/glide'

export default {
  mounted() {
    var glide = new Glide(".glide", {
      type: "carousel",
      focusAt: "center",
      perView: 3
    });
    glide.mount();
  },
}
</script>
<style scoped>
@import '@glidejs/glide/dist/css/glide.core.min.css';
@import '@glidejs/glide/dist/css/glide.theme.min.css';
</style>
