
// category filter
document.querySelectorAll('#filters button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelector('#filters .active')?.classList.remove('active');
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('#articles article').forEach(card=>{
      if(cat==='all'||card.dataset.cat===cat){card.style.display='block';}
      else{card.style.display='none';}
    });
  });
});
