const  weso = document.getElementById("history");    
const liClick = document.querySelectorAll(".train .calendar ul li");

for (var q = 0; q < liClick.length; q++) {
    
    liClick[q].addEventListener("click", e => {
            
       weso.innerHTML = e.target.dataset.filter;  
    })
   
}

