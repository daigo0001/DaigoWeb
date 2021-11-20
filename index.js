const ham = document.getElementById('hamMenu');
const image = document.getElementById('Image');
const menu_wrapper = document.getElementById('menu_wrapper');
const footer = document.getElementById('footer');

ham.addEventListener('click', function(){
  ham.classList.toggle('close');
  image.classList.toggle('delete');
  footer.classList.toggle('delete')
  menu_wrapper.classList.toggle('close');
});