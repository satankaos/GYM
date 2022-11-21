/**/ 
console.log("hola")
$('#boton1').click(()=>{
    localStorage.setItem('precio','39.99');
    localStorage.setItem('nombre','Personal');
    

  })
  
$('#boton2').click(()=>{
    localStorage.setItem('precio','50');
    localStorage.setItem('nombre','Familiar');
    
  })
$('#boton3').click(()=>{
    localStorage.setItem('precio','100');
    localStorage.setItem('nombre','Personal Premium');
  })
$('#boton4').click(()=>{
    localStorage.setItem('precio','150');
    localStorage.setItem('nombre','Familiar Premium')
  })
  $( document ).ready(function() {
    var precio = localStorage.getItem('precio');
    var nombre = localStorage.getItem('nombre');
    let nprecio=precio+'€'
    $('.nprecio').text(nombre+"\n"+nprecio);               
              
    
});
