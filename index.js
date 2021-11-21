const ham = document.getElementById('hamMenu');
const image = document.getElementById('Image');
const menu_wrapper = document.getElementById('menu_wrapper');
const footer = document.getElementById('footer');
let fadeInTarget = document.querySelectorAll('.fade-in');

ham.addEventListener('click', function(){
  ham.classList.toggle('close');
  image.classList.toggle('delete');
  footer.classList.toggle('delete')
  menu_wrapper.classList.toggle('close');
});

window.addEventListener('scroll', () => {
  for(let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    if(scroll > offset - windowHeight + 150){
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});
