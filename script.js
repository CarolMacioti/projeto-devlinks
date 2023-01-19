function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

// PARA SUBSTITUIR O AVATAR CONFORME O LIGHTMODE ON/OFF

//pegar a tag img
  const img = document.querySelector("#profile img")
  
//substituir a imagem: 
 
  if(html.classList.contains("light")) {
  //CONDIÇÕES: 
  // 1) se tiver LIGHT MODE, add a imagem light
   img.setAttribute("src", "./assets/avatar-light.png")
   img.setAttribute("alt", "Foto de Carolina, fundo verde, cabelos compridos e loiros, óculos escuros e blusa azul.")
  } else { 
  // 2) se estiver SEM LIGHT MODE, manter a imagem do DARK MODE (normal)
  img.setAttribute("src", "./assets/avatar.png")
  }

}