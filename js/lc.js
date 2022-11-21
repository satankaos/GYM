/**/ 
console.log("hola")
$('#boton1').click(()=>{
    localStorage.setItem('precio','39.99');
    console.log("hola dentro");
    precio = localStorage.getItem('precio')

 

  })
  
$('#boton2').click(()=>{
    localStorage.setItem('precio','50');
    console.log("hola dentro")
    
    precio = localStorage.getItem('precio')

 document.getElementById("nprecio").innerHTML = precio;
  })
$('#boton3').click(()=>{
    localStorage.setItem('precio','100');
    console.log("hola dentro")
    
    precio = localStorage.getItem('precio')

 document.getElementById("nprecio").innerHTML = precio;
  })
$('#boton4').click(()=>{
    localStorage.setItem('precio','150');
    
    precio = localStorage.getItem('precio')

 document.getElementById("nprecio").innerHTML = precio
  })/*;
  function cambiarTex(precio){
    precio = localStorage.getItem('precio')

    document.getElementById("nprecio").innerHTML = precio
  }*/