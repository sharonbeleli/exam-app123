
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
/* ❶ כפתורי “קרא עוד” קיבלו ממילא class=btn-primary – אין שינוי נוסף */

/* ❷ צ'אט – פתיחה וסגירה */
const chatToggle=document.getElementById('chat-toggle');
const chatBox=document.getElementById('chat-box');

chatToggle.addEventListener('click',()=>{
  chatBox.style.display=chatBox.style.display==='flex'?'none':'flex';
});
/* סגירה בלחיצה בחוץ */
document.addEventListener('click',e=>{
  if(!chatWidget.contains(e.target)) chatBox.style.display='none';
});
