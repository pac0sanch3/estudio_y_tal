function guardar(){
        let valorp1, valorp2, valorp3, valorp4
        valorp1 = document.getElementById("p1").value
    
        localStorage.setItem("p1",valorp1)
       
        window.location="respuestas.html"
    
        valorp2 = document.getElementById("p2").value
    
        localStorage.setItem("p2",valorp2)
     
        window.location="respuestas.html"
    
        valorp3 = document.getElementById("p3").value
    
        localStorage.setItem("p3", valorp3)
    
        window.location="respuestas.html"
}
