function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/Mobile/avatar-light.png")
  } else {
    //se estiver sem light mode, adicionar a imagem normal
    img.setAttribute("src", "./assets/assets/Mobile/avatar.png")
  }
}
