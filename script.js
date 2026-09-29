const room=document.querySelector('.room');
document.addEventListener('pointermove',e=>{
  const x=(e.clientX/window.innerWidth-.5);
  const y=(e.clientY/window.innerHeight-.5);
  if(room && window.innerWidth>850) room.style.transform=`rotateY(${x*2.5}deg) rotateX(${y*-1.8}deg)`;
});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.querySelector(a.getAttribute('href'));
  if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
}));
