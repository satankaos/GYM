$( document ).ready(function() {
    var usuario = localStorage.getItem('usuario');
    console.log(usuario)
    $('.boton').text(usuario);  })         

    document.getElementById('botonc').addEventListener('click', function() {
        nombre = localStorage.getItem('nombre');
        correo = localStorage.getItem('correo');
        telefono =	localStorage.getItem('telefono');
        dni = localStorage.getItem('dni');
        usuario	=	localStorage.getItem('usuario');
        apellido =	localStorage.getItem('apellido');
        var precio = localStorage.getItem('precio');
        var nombre1 = localStorage.getItem('nombre1');
        let nprecio=precio+'€'
        
    
        document.getElementById('limpiar').innerHTML =''
        document.getElementById('limpiar').outerHTML='<div class="normal" id="normal">'+
        '<h4> Nombre: '+nombre+'</h4>'+
        '<h4> Apellido: '+apellido+'</h4>'+
        '<h4>Usuario:'+usuario+'  </h4>'+
        '<h4>Correo: '+correo+'</h4>'+
        '<h4>DNI: '+dni+'</h4>'+
        '<h4>Telefono: '+telefono+'</h4>'+
        '<h4>Tarifa: '+nombre1+"\n"+nprecio+'</h4>'
        '</div>'
        
        

    });