<!-- ======================= JS (script.js) ======================= -->
// סינון קטגוריות
const filterButtons=document.querySelectorAll('#filters button');
const cards=document.querySelectorAll('#articles article');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelector('#filters .active').classList.remove('active');
  btn.classList.add('active');
  const cat=btn.dataset.cat;
  cards.forEach(c=>{
    c.style.display=(cat==='all'||c.dataset.cat===cat)?'block':'none';
  });
}));

// מודאל מאמר
const modal=document.getElementById('modal');
const modalBody=document.getElementById('modal-body');
const closeBtn=document.querySelector('.modal .close');

document.querySelectorAll('.read-more').forEach(btn=>{
  btn.addEventListener('click',e=>{
    const article=e.target.closest('article');
    const title=article.querySelector('h2').innerText;
    const content=article.querySelector('.hidden-content').innerHTML;
    modalBody.innerHTML=`<h2>${title}</h2>${content}`;
    modal.style.display='flex';
  });
});
closeBtn.addEventListener('click',()=>modal.style.display='none');
window.addEventListener('click',e=>{if(e.target===modal) modal.style.display='none'});
window.addEventListener('keydown',e=>{if(e.key==='Escape') modal.style.display='none'});

// ווידג׳ט צ׳אט
const chatToggle=document.getElementById('chat-toggle');
const chatBox=document.getElementById('chat-box');
chatToggle.addEventListener('click',()=>{
  chatBox.style.display=chatBox.style.display==='flex'?'none':'flex';
});

document.addEventListener('click',e=>{
  if(!document.getElementById('chat-widget').contains(e.target)) chatBox.style.display='none';
});
