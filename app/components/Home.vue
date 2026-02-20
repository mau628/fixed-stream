<template>
  <section>
    <h1 class="title">Home</h1>
    <div class="fixed-grid has-4-cols">
      <div class="grid element-wrapper" tabindex="0" @keydown="handleKeydown">
        <div v-for="(element, idx) in elements" :key="element.url" class="cell"
          :class="{ 'is-selected': idx === index }">
          <Element :element="{ ...element }" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const COLS = 4
const index = ref(0)
const elements = ref<Show[]>([
  { title: 'Toy Story', source: "Disney", image: "toy-story.webp", url: "f6174ebf-cb92-453c-a52b-62bb3576e402" },
  { title: 'Toy Story 2', source: "Disney", image: "toy-story-2.webp", url: "55bb8618-baac-449e-9f63-f402f41371a2" },
  { title: 'Toy Story 3', source: "Disney", image: "toy-story-3.webp", url: "95e7b2ce-5f45-4923-976d-b7e9968a7357" },
  { title: 'Toy Story 4', source: "Disney", image: "toy-story-4.webp", url: "97d822a3-7dad-4d85-8350-ce4f8642511e" },
  { title: 'Monsters Inc.', source: "Disney", image: "monsters-inc.webp", url: "3c90b85f-ba5e-4351-be87-e625d5706952" },
  { title: 'Daniel Tigre S01', source: "YouTube", image: "daniel-tigre-s01.jpg", url: "VTFXrWGtkQw&list=PLpX4BrBayzzqjY-dCzLFiXe-FUqcjHZGX" },
  { title: 'Daniel Tigre S02', source: "YouTube", image: "daniel-tigre-s02.jpg", url: "lUCi2RQMdSw&list=PLpX4BrBayzzppyfZHWIk4JU8NKSEycuG-" },
  { title: 'Franklin y Sus Amigos', source: "YouTube", image: "franklin.jpg", url: "hdcZGO8X6mI&list=PLjXyTw1_uY7NQbTvTWChxk9Qax1_1cYbV" },
  { title: 'Bananas en Pijama', source: "Prime Video", image: "bananas-en-pijama.webp", url: "0J8042LJK31RD4DB5CSC1KCW58/ref=atv_sr_fle_c_sr782405_pvsearchresults_1_1" },
])

const handleKeydown = (event: KeyboardEvent) => {
  const total = elements.value.length
  let newIndex = index.value

  switch (event.key) {
    case 'ArrowLeft':
      newIndex = index.value > 0 ? index.value - 1 : total - 1
      event.preventDefault()
      break
    case 'ArrowRight':
      newIndex = index.value < total - 1 ? index.value + 1 : 0
      event.preventDefault()
      break
    case 'ArrowUp':
      newIndex = index.value >= COLS ? index.value - COLS : index.value + (Math.floor((total - 1) / COLS) * COLS)
      event.preventDefault()
      break
    case 'ArrowDown':
      newIndex = index.value + COLS < total ? index.value + COLS : index.value % COLS
      event.preventDefault()
      break
    case 'Enter':
      console.log(useUrl(elements.value[index.value]))
      event.preventDefault()
      break
  }

  index.value = Math.max(0, Math.min(newIndex, total - 1))
}
</script>

<style lang="scss" scoped>
$padding: 0.4rem;

.element-wrapper {
  overflow: auto;
  padding: $padding $padding $padding $padding;
}

.is-selected {
  outline: $padding solid #3273dc;
  border-radius: $padding;
}
</style>