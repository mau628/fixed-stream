<template>
  <div class="card is-clickable" @click="navigate">
    <div class="card-image">
      <figure class="image">
        <img :src="streamImage" :alt="props.element.title + ' image'" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="`/assets/${streamSource}`" :alt="props.element.source" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ props.element.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  element: Show
}>()

const streamSource = computed(() => {
  if (props.element.source) {
    switch (props.element.source.toUpperCase()) {
      case "DISNEY":
      case "DISNEY+":
        return "disney-logo.svg"
      case "YOUTUBE":
        return "youtube-logo.svg"
      case "AMAZON":
      case "PRIME VIDEO":
        return "prime-video-logo.svg"
      case "HBO MAX":
      case "HBO":
        return "hbo-max-logo.svg"
      default:
        return props.element.source
    }
  }
  return "Unknown"
})
const streamImage = computed(() => {
  if (props.element.image) {
    return `assets/${props.element.image}`
  }
  return "https://bulma.io/assets/images/placeholders/1280x960.png"
})
const navigate = () => useUrl(props.element) 
</script>

<style></style>