
window.addEventListener('load', () => {
  const form = document.querySelector('#form');
  const usuario = document.getElementById('usuario');
  const nombre = document.getElementById('nombre');
  const dni = document.getElementById('dni');
  const apellido = document.getElementById('apellidos');
  const correo = document.getElementById('correo');
  const contraseña = document.getElementById('contraseña');
  const c2 = document.getElementById('repetir_contraseña');
  const telefono = document.getElementById('telefono');
  const IBAN = document.getElementById('IBAN');
  const SWIFT = document.getElementById('SWIFT');
  const fecha_nacimiento = document.getElementById('fecha_nacimiento');
  const registrar=document.getElementById('boton');
  
 
form.addEventListener('reset', (e) => {
  e.preventDefault()
  cero()

})
  const validaCampos = () => {
    //cap elementos
     OK=true
    const usuarioValor = usuario.value.trim()
    const nombreValor = nombre.value.trim()
    const dniValor = dni.value.trim()
    const apellidoValor = apellido.value.trim()
    const correoValor = correo.value.trim()
    const contraseñaValor = contraseña.value.trim()
    const c2Valor = c2.value.trim()
    const telefonoValor = telefono.value.trim()
    const ibanValor = IBAN.value.trim()
    const SWIFTValor = SWIFT.value.trim()
    const fnValor = fecha_nacimiento.value.trim()
    var regus = /([A-Za-z]{1,2}|[0-9]{1,2}|[A-Za-z][0-9])/
    if (!usuarioValor) {
      //console.log('CAMPO VACIO')
      validaFalla(usuario)
      OK=false
    } else if(!usuarioValor.match(regus)){
      validaFalla(usuario)
      OK=false
    }else{
      validaOk(usuario)
      
    }

    var reget = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if (!correoValor) {
      validaFalla(correo)
      OK=false
    } else if (!correoValor.match(reget)) {
      validaFalla(correo)
      OK=false
    } else {
      validaOk(correo,"correo valido")
      
    }
    //validando campo password
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
    if (!contraseñaValor) {
      validaFalla(contraseña)
      OK=false
    } else if (contraseñaValor.length < 8) {
      validaFalla(contraseña)
      OK=false
    } else if (!contraseñaValor.match(er)) {
      validaFalla(contraseña)
      OK=false
    } else {
      validaOk(contraseña) 
      
    }
    //validando campo password Confirmación
    if (!c2Valor) {
      validaFalla(c2)
    } else if (contraseñaValor !== c2Valor) {
      validaFalla(c2)
      OK=false
    } else {
      validaOk(c2)
      
       
    }


    if (!nombreValor) {

      validaFalla(nombre)
    } else if(nombreValor.length<4){
      validaFalla(nombre)
      OK=false
    }else{
      validaOk(nombre)
      
       
    }
    if (!apellidoValor) {

      validaFalla(apellido)
      OK=false
    } else {
      validaOk(apellido," ") 
      
    }
    var rexte2 = /^(0034|\+34)?(\d\d\d)-? ?(\d\d)-? ?(\d)-? ?(\d)-? ?(\d\d)$/;

    if (!telefonoValor) {

      validaFalla(telefono)
      OK=false
    } else if (!telefonoValor.match(rexte2)) {
      validaFalla(telefono)
      OK=false
    } else {
      validaOk(telefono)
      
    };
    var rexib = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/g
    if (!ibanValor) {
      validaFalla(IBAN)
    } else if (!ibanValor.match(rexib)) {
      validaFalla(IBAN)
    } else {
      validaOk(IBAN)
      
    }
      var regsw = /([a-zA-Z]{4})([a-zA-Z]{2})(([2-9a-zA-Z]{1})([0-9a-np-zA-NP-Z]{1}))((([0-9a-wy-zA-WY-Z]{1})([0-9a-zA-Z]{2}))|([xX]{3})|)/g
    if (!SWIFTValor) {

      validaFalla(SWIFT)
    } else if (!SWIFTValor.match(regsw)){
      validaFalla(SWIFT)
    }else{
      validaOk(SWIFT)
      
    }

    if (!fnValor) {

      validaFalla(fecha_nacimiento)
      OK=false
    } else {
      validaOk(fecha_nacimiento)
      
    }
    if (!dniValor) {

      validaFalla(dniValor)
      OK=false
    } else {
      if (validaDni(dniValor)) {
        validaOk(dni)
        
      }
      
    }
   
  }


   function validaDni(dniVAlor) {
     var numero
     var letr
     var letra
     var expresion_regular_dniVAlor
     expresion_regular_dniVAlor = /^\d{8}[A-Z]$/;
    

     if(expresion_regular_dniVAlor.test (dniVAlor) == true){
      letra='TRWAGMYFPDXBNJZSQVHLCKET';  
      numero = dniVAlor.substr(0,8);//saco los numeros de el dni
        letr = dniVAlor.substr(8,9);//saco la letra de el dni 
       
        completra= letra.charAt(numero % 23)// hacemos la division para qur nos de el indice y saquemos la letra
       if (completra!=letr.toUpperCase()) {
          validaFalla(dni);
          OK=false
        }else{
          validaOk(dni)
        }
     }else{
       validaFalla(dni);
       OK=false
      }
      var numero
      var letr
      var letra
      var expresion_regular_dniVAlor
      
 
      
 
      if(dniVAlor.match(expresion_regular_dniVAlor)){//conprueba con la expresion regular que el formato sea el adecuado
       letra='TRWAGMYFPDXBNJZSQVHLCKET';  
       numero = dniVAlor.substr(0,8);//saco los numeros de el dni
         letr = dniVAlor.substr(8,9);//saco la letra de el dni 
         completra= letra.charAt(numero % 23)// hacemos la division para qur nos de el indice y saquemos la letra
       if (dniVAlor.length>9){//comprueva que no tenga mas de 9 caracteres
        validaFalla(dni)
        OK=false
          }else if (completra!=letr.toUpperCase()) {//conprueba la letra del dni con la sacada de la formula 
                 validaFalla(dni);
                 OK=false
              }else{
              validaOk(dni)
              
            }
         }else{
          validaFalla(dni);
          OK=false
             }
      
 }
 
 form.addEventListener('submit', (e) => {
  e.preventDefault() //quito comportameinto por defecto
  validaCampos()//valido los campos 
  if (OK==true) {
    esOk()};//saco mensaje si todo esta bien balidado
})

/** lo uso para cambiar el color de el input y mandar el mensaje  */
 const validaFalla = (input, msje) => {
  const formControl = input.parentElement
  formControl.className = 'form-control falla'
}
/** igual pero cuando es correcto  */
const validaOk = (input,msje) => {
  const formControl = input.parentElement
 
  formControl.className = 'form-control ok'
}

function  esOk() {
    setTimeout(()=>{ alert("Enviado");},1000) 
}
})

/*local*/ 

