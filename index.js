const mark=document.getElementById("mark");
const dots=document.querySelectorAll('#dot');
const counter=document.getElementById('counter');

mark.addEventListener("click", ()=>{
    dots.forEach(function (dot){
        dot.style.display='none';
        counter.textContent=0
    })
    
})