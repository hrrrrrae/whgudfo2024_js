document.addEventListener('DOMContentLoaded', ()=>{

  const imgUser = document.querySelector('#User')
  const imgCom = document.querySelector('#Com')
  const bts = document.querySelectorAll('button')
  const result = document.querySelector('#result')

  for(let bt of bts) {
    bt.addEventListener('click', ()=>{
      const nCom = Math.floor(Math.random()*6)+1
      const nUser = bt.textContent.charAt(0)

      imgCom.setAttribute('src', `./img/${nCom}.png`)
      imgUser.setAttribute('src', `./img/${nUser}.png`)

      if(nCom == nUser){
        result.innerHTML = `<h1>맞음<h1/>`
      }
      else{
        result.innerHTML = `<h1>틀림<h1/>`
      }
    })
  }


})