function toggleMode(){
  const html = document.documentElement

  // Simplificado
  html.classList.toggle("light")

  // Pegar a  tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver light mode, adicionar a  imagem light
    img.setAttribute("src","./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e blusa preta, sem barba e fundo colorido.")

  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute('alt','Foto de Mayk Brito sorrindo, usando óculos e  camisa preta, de barba e fundo amarelo.')

  }

  // Codigo mais complexo

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  
  
}