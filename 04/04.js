// 1. DOM 생성이 되면 img, button 요소를 가져오기
// 2. button 클릭이 되는 경우를 찾아야 함
// 3. img src 속성을 변경
//    - 랜덤수를 발생 -> 해당하는 랜덤수의 이미지를 가져오기

// 1. DOM 생성이 되면 
document.addEventListener('DOMContentLoaded', () => {
  //img, button 요소를 가져오기
  const imgCom = document.querySelector('#Com')
  const imgUser = document.querySelector('#User')
  const bts = document.querySelectorAll('button')
  const result = document.querySelector('#result')


  //2. button 클릭이 되는 경우를 찾아야 함
  for (let bt of bts) {
    bt.addEventListener('click', () => {
      //랜덤수를 발생 1~6까지
      const nCom = Math.floor(Math.random() * 6) + 1;

      //user 숫자
      const nUser = bt.textContent.charAt(0)

      imgCom.setAttribute('src', `./img/${nCom}.png`);
      imgUser.setAttribute('src', `./img/${nUser}.png`);

      if (nCom == nUser) {
        result.innerHTML = `<h1>맞음</h1>`;
      }

      else {
        result.innerHTML = `<h1>틀림</h1>`;
      }

    });
  }







});
