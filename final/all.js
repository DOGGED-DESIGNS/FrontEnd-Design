window.addEventListener("load",function(){const e=document.querySelector(".about-comp");e.click()});const btn=document.querySelectorAll(".comp"),mission=document.querySelectorAll(".mission");function addingActive(e){const t=document.getElementById(""+e);t.style.display="block"}btn.forEach(e=>{e.addEventListener("click",function(e){mission.forEach(e=>{e.style.display="none"}),btn.forEach(e=>{e.classList.remove("active")}),e.currentTarget.classList.add("active"),addingActive(e.currentTarget.dataset.id)})}),console.log("this is the reviews ");const link=document.querySelectorAll("a"),shiftImg=(console.log(link),document.querySelectorAll(".shift-img")),shiftArticle=(link.forEach(e=>{e.addEventListener("click",function(e){e.preventDefault()})}),document.querySelectorAll(".shift-article")),right=document.querySelector(".left"),left=document.querySelector(".right");let counter=0;function increase(){++counter>shiftArticle.length-1&&(counter=0),shiftArticle.forEach(e=>{e.style.transform=`translateX(-${100*counter}%)`}),shiftImg.forEach(e=>{e.style.transform=`translateX(-${100*counter}%)`})}function decrease(){--counter<0&&(counter=shiftArticle.length-1),shiftArticle.forEach(e=>{e.style.transform=`translateX(-${100*counter}%)`}),shiftImg.forEach(e=>{e.style.transform=`translateX(-${100*counter}%)`})}shiftImg.forEach((e,t)=>{e.style.left=100*t+"%"}),shiftArticle.forEach((e,t)=>{e.style.left=100*t+"%"}),left.addEventListener("click",function(e){decrease(),console("left has been clicked")}),right.addEventListener("click",function(){increase()});