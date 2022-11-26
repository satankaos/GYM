document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});









function validarFormulario(evento) {
  evento.preventDefault();
  /* valido usuario*/
  var usuario = document.getElementById('usuario').value;
  var regus = /([A-Za-z]{1,2}|[0-9]{1,2}|[A-Za-z][0-9])/
  if (usuario.length == 0) {
    document.getElementById('erUsusario').innerHTML = 'Campo Vacio'
    return;
  } else if (!usuario.match(regus)) {

    document.getElementById('erUsusario').innerHTML = ' no caracteres especiales '

    return;
  } else {
    document.getElementById('erUsusario').innerHTML = ''
 
    localStorage.setItem('usuario', usuario);
  }
  /********************************** */
  
  /* valider dni */
  const dni = document.getElementById('dni').value;
  if (dni.length == 0) {
    document.getElementById('erDni').innerHTML ='Dni no introducido'
    
    return;
  } else {
    if (validaDni(dni)) {
      document.getElementById('erDni').innerHTML =''
      localStorage.setItem('dni', dni);
    }
  }

  /************************************************* */
  /* valido nombre y apellidos */
  var nombre = document.getElementById('nombre').value;
  if (nombre.length == 0) {
    document.getElementById('erNombre').innerHTML = 'Campo Vacio'
    return;
  } else if (nombre.length < 4) {
    document.getElementById('erNombre').innerHTML = ' menos de 4 caracteres '
    return;
  } else {
   
    document.getElementById('erNombre').innerHTML = ''
    localStorage.setItem('nombre', nombre);
  }
  var apellido = document.getElementById('apellidos').value;
  if (apellido.length == 0) {
    

    document.getElementById('erApellido').innerHTML = 'Campo Vacio'

    return;
  } else {
    document.getElementById('erApellido').innerHTML =''
    localStorage.setItem('apellido', apellido);
  }

  /******************************************************* */
  /* valido correo*/
  var correo = document.getElementById('correo').value;
  var reget = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  if (correo.length == 0) {
  document.getElementById('erCorreo').innerHTML ='Campo Vacio'

  
    return;
  } else if (!correo.match(reget)) {
   
    document.getElementById('erCorreo').innerHTML =' no cumple el correo'
    return;
  } else {
    document.getElementById('erCorreo').innerHTML =''
    localStorage.setItem("correo", correo);
  }
  /******************************************* */
  /* valido contraseña*/
  var contraseña2 = document.getElementById('repetir_contraseña').value;
  var contraseña = document.getElementById('contraseña').value;

  const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
  if (contraseña.length == 0) {
    document.getElementById('erContraseña').innerHTML =' Campo vacio'
    return;
  } else if (contraseña.length < 8) {

    document.getElementById('erContraseña').innerHTML ='Min 9 caracteres'
   
    return;
  } else if (!contraseña.match(er)) {
    document.getElementById('erContraseña').innerHTML =' numero mayus minus y caracter'
   

    return;
  } else {
    document.getElementById('erContraseña').innerHTML =''
   
  }

  if (contraseña != contraseña2) {
    document.getElementById('erContraseña2').innerHTML ='no coinciden'
    return;
  } else {
    document.getElementById('erContraseña2').innerHTML =''
    localStorage.setItem('contraeña', contraseña);
  }
  /**************************************************** */
  /* validar telefono  */
  telefono = document.getElementById('telefono').value;
  var rexte2 = /^(0034|\+34)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/;

  if (telefono.length == 0) {
    document.getElementById('erTelefono').innerHTML ='Telefono vacio'
  
    return;
  } else if (!telefono.match(rexte2)) {
    document.getElementById('erTelefono').innerHTML ='telefono mal formado'
    return;
  } else {
    document.getElementById('erTelefono').innerHTML =''
    localStorage.setItem('telefono', telefono);

  };
  /************************* */





  var registro = { 'nombre': nombre, 'apellidos': apellido, 'usuario': usuario, 'contraseña': contraseña, 'telefono': telefono, 'dni': dni, 'correo': correo };
  localStorage.setItem('key', JSON.stringify(registro));







  certificaciones();


  function certificaciones() {
    window.open("/html/pagina_dentro.html", "_self");
    this.submit();
  }

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
      document.getElementById('erDni').innerHTML ='Formato erroneo'
      return;
    } else if (completra.toUpperCase == letr.toUpperCase()) {//conprueba la letra del dni con la sacada de la formula 
      document.getElementById('erDni').innerHTML ='Letra incorrecta'
      return;
    } else {

      return true;

    }
  } else {
    document.getElementById('erDni').innerHTML ='Formato erroneo'
    return;
  }

}
