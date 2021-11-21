const ham = document.getElementById('hamMenu');
const image = document.getElementById('Image');
const menu_wrapper = document.getElementById('menu_wrapper');
const footer = document.getElementById('footer');
let fadeInTarget = document.querySelectorAll('.fade-in');

//ハンバーガーメニュー
ham.addEventListener('click', function(){
  ham.classList.toggle('close');
  image.classList.toggle('delete');
  footer.classList.toggle('delete');
  menu_wrapper.classList.toggle('close');
});

//スクロールイベント
window.addEventListener('scroll', () => {
  for(let i = 0; i < fadeInTarget.length; i++){
    //見えているブラウザの上端から、i番目の要素までの距離
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    //ブラウザ全体の上端からのスクロール量を取得する
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    //2つを足すことでi番目までの距離を出すことができる
    const offset = rect + scroll;
    //見えているブラウザのサイズ
    const windowHeight = window.innerHeight;
    //ブラウザ全体の上端からのスクロール量が、i番目までの距離から表示されている
    //ブラウザの高さを引いた値が大きければクラスを追加する
    if(scroll > offset - windowHeight + 150){
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});

const pics_src = ["images/prof.jpeg", "images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
let num = -1;
function slideshow_timer(){
  if(num === 2){
    num = 0;
  }else {
    num++;
  }
  document.getElementById("mypic").src = pics_src[num];
  document.classList.toggle('about-image');
}
setInterval(slideshow_timer, 2000);