function changeImg(el){
  document.getElementById('mainImage').src = el.src;
}

// save for later
document.querySelector('.save').addEventListener('click',()=>{
  document.querySelector('.save i').classList.toggle('ri-heart-fill');
});
