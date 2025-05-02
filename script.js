/* ───────── סינון קטגוריות ───────── */
document.querySelectorAll('.categories button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelector('.categories .active')?.classList.remove('active');
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('#articles article').forEach(card=>{
      card.style.display = (cat==='all'||card.dataset.cat===cat) ? 'flex':'none';
    });
  });
});

/* ───────── מודאל מאמר ───────── */
const modal      = document.getElementById('modal');
const modalBody  = document.querySelector('.modal-content');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.read-more').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const article = link.closest('article');
    modalBody.innerHTML = `<h2>${article.querySelector('h2').textContent}</h2>
                           <p>${article.dataset.full}</p>`;
    modal.classList.add('open');
  });
});
modalClose.addEventListener('click',()=>modal.classList.remove('open'));
document.addEventListener('keyup',e=>{if(e.key==='Escape') modal.classList.remove('open');});
modal.addEventListener('click',e=>{
  if(e.target===modal) modal.classList.remove('open');
});

/* ───────── וידג'ט צ'אט ───────── */
const chatToggle=document.getElementById('chat-toggle');
const chatBox   =document.getElementById('chat-box');
chatToggle.addEventListener('click',()=>{
  chatBox.style.display = (chatBox.style.display==='flex') ? 'none' : 'flex';
});
document.addEventListener('click',e=>{
  if(!document.getElementById('chat-widget').contains(e.target)) chatBox.style.display='none';
});
