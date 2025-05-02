/* ───── סינון קטגוריות ───── */
document.querySelectorAll('#filters button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelector('#filters .active')?.classList.remove('active');
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('#articles article').forEach(card=>{
      card.style.display = (cat==='all'||card.dataset.cat===cat)?'flex':'none';
    });
  });
});

/* ───── מודאל (חלון קופץ) ───── */
const modal      = document.getElementById('modal');
const modalBody  = document.querySelector('.modal-content');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.read-more').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card = btn.closest('article');
    modalBody.innerHTML = `<h2>${card.querySelector('h2').textContent}</h2><p>${card.dataset.full}</p>`;
    modal.style.display='flex';
  });
});
modalClose.addEventListener('click',()=>modal.style.display='none');
modal.addEventListener('click',e=>{if(e.target===modal) modal.style.display='none'});
document.addEventListener('keyup',e=>{if(e.key==='Escape') modal.style.display='none'});

/* ───── צ'אט ───── */
const chatToggle = document.getElementById('chat-toggle');
const chatBox    = document.getElementById('chat-box');
chatToggle.addEventListener('click',()=>chatBox.style.display = (chatBox.style.display==='flex')? 'none':'flex');
document.addEventListener('click',e=>{
  if(!document.getElementById('chat-widget').contains(e.target)) chatBox.style.display='none';
});
