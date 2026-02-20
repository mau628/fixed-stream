import type { Show } from "~/types/show";

  export default function (element: Show) {
    let url = ""
  if (element.url) {
    switch (element.source?.toUpperCase()) {
      case "DISNEY":
      case "DISNEY+":
        url = `www.disneyplus.com/es-419/play/${element.url}`
        break
      case "YOUTUBE":
        url = `www.youtube.com/watch?v=${element.url}`
        break
      case "AMAZON":
      case "PRIME VIDEO":
        url = `https://www.primevideo.com/region/na/detail/${element.url}`
        break
      case "HBO MAX":
      case "HBO":
        url = `play.hbomax.com/feature/${element.url}`
        break
    }
  }
  if (url.length > 0) {
    window.location.href = `https://${url}`
  }
}