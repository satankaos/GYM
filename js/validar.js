document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });









  function validarFormulario(evento) {
    evento.preventDefault();
    /* valido usuario*/ 
    var usuario = document.getElementById('usuario').value;
     var regus = /([A-Za-z]{1,2}|[0-9]{1,2}|[A-Za-z][0-9])/
     if (usuario.length==0) {
      console.warn('CAMPO VACIO')
       //validaFalla(usuario)
       return;
     } else if (!usuario.match(regus)) {
       //validaFalla(usuario)
       //OK = false
      console.warn('CAMPO no cumple')
       return;
     } else {
       //validaOk(usuario)
       console.log('CAMPO usuario bien')
       localStorage.setItem('usuario', usuario);
     }
     /********************************** */
     /* valido nombre y apellidos */
 var nombre = document.getElementById('nombre').value;
 if (nombre.length==0) {
 console.warn("nombre vacio")
 return;
   } else if (nombre.length < 4) {
    console.warn("nombre menos de 4 ")
     return;
   } else {
    console.log("nombre valido")
 
    localStorage.setItem('nombre', nombre);
   }
   var apellido = document.getElementById('apellidos').value;
   if (apellido.length==0) {
     console.warn("apellido vacio")
     return;
   } else {
     console.log("apellido bien")
     localStorage.setItem('apellido', apellido);
   }
 
 /******************************************************* */
 /* valido correo*/
 var correo = document.getElementById('correo').value;
 var reget = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
 if (correo.length == 0 ) {
    console.warn("correo vacio")
    return;
 } else if (!correo.match(reget)) {
   console.warn("no cumple el correo")
   return;
 } else {
   console.log("correo valido")
   localStorage.setItem("correo", correo);
 }
 /******************************************* */
     /* valido contraseña*/ 
     var contraseña2 = document.getElementById('repetir_contraseña').value;
     var contraseña = document.getElementById('contraseña').value;
   
     const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
    if (contraseña.length==0) {
      
     console.warn("cap contr vacio")
      return;
    } else if (contraseña.length < 8) {

    
     console.warn("menos de 8 caracteres")
      return;
    } else if (!contraseña.match(er)) {
    
       console.warn("no cumple")
    
      return;
    }else  {
        console.log("contraseña bien")
    }
    
    if (contraseña != contraseña2) {
       console.warn("mal puto")
        return;
    }else{
        console.log("bien contraseñas igules")
        localStorage.setItem('contraeña', contraseña);
    }
/**************************************************** */
/* validar telefono  */
telefono = document.getElementById('telefono').value;
var rexte2 = /^(0034|\+34)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/;

    if (telefono.length==0) {

      console.warn( "no hay telefono")
      return;
    } else if (!telefono.match(rexte2)) {
      console.warn("telefono mal formado")
      return;
    } else {
      console.warn("telefono bien")
      localStorage.setItem('telefono', telefono);

    };
/************************* */




/* valider dni */
const dni = document.getElementById('dni').value;
if (dni.length == 0 ) {

    console.warn("no introducido")
   return;
  } else {
    if (validaDni(dni)) {
      console.log("dni bien")
      localStorage.setItem('dni', dni);
    }
}

/************************************************* */

var registro = { 'nombre' : nombre, 'apellidos' : apellido, 'usuario': usuario,'contraseña': contraseña,'telefono': telefono,'dni': dni,'correo': correo };
localStorage.setItem('key', JSON.stringify(registro));











  // this.submit();
  }
  function validaDni(dni) {
    var numero
    var letr
    var letra
    var expresion_regular_dniVAlor
    expresion_regular_dniVAlor = /^\d{8}[A-Z]$/;

    if (dni.match(expresion_regular_dniVAlor)) {//conprueba con la expresion regular que el formato sea el adecuado
     var letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
      var numero = dni.substr(0, 8);//saco los numeros de el dni
      var letr = dni.substr(8, 9);//saco la letra de el dni
      
      var completra = letra.charAt(numero % 23)// hacemos la division para qur nos de el indice y saquemos la 
      
     
      
      if (dni.length > 9) {//comprueva que no tenga mas de 9 caracteres
        console.warn("tieene mas de 9")
       return;
      } else if (completra.toUpperCase == letr.toUpperCase()) {//conprueba la letra del dni con la sacada de la formula 
        console.warn("letra incorrecta")
       return;
      } else {
        
        return true;

      }
    } else {
      validaFalla(dni);
     return;
    }

  }