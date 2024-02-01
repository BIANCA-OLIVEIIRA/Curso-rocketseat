function toggleMode() {
   const html = document.documentElement
   html.classList.toggle("light") // Simplificado //    if(html.classList.contains('light')){
    //        html.classList.remove('light')
    //    } else {
    //        html.classList.add('light')
    //    }
    const img = document.querySelector("#profile img") //pegar a tag img - substituir a imagem- se tiver light mode adicionar a imagem light, se tiver sem o light mode manter a imagem normal
    if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png") 
    } else {
    img.setAttribute("src", "./assets/avatar.png")
    }
}















