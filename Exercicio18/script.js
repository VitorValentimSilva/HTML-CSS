function menu(){
  var body = document.querySelector('body');
  if (itens.style.display == 'block'){
    itens.style.display = 'none'
    clisair.style.display = 'none'
    climenu.style.display = 'inline'
    body.style.backgroundColor = 'white'
    corpo.style.display = 'block'
    roda.style.display = 'block'
    corpo.style.marginTop = '3%'
  }
  else {
    itens.style.display = 'block'
    climenu.style.display = 'none'
    clisair.style.display = 'inline'
    body.style.backgroundColor = 'blue'
    corpo.style.display = 'none'
    roda.style.display = 'none'
    cabeca.style.marginTop = '5%'
    clisair.style.paddingBottom = '10%'
  }
}