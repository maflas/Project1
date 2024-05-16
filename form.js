
const nombre = document.getElementById("nombre");
const ApellidoPaterno = document.getElementById("ApellidoPaterno");
const ApellidoMaterno=document.getElementById("ApellidoMaterno");
const Email=document.getElementById("Email");
const Contraseña=document.getElementById("Contraseña");
const sexo=document.getElementById("sexo");

const form = document.getElementById("form");
const listInputs =document.querySelectorAll(".form-input");
var expr =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    /* forEach ira limpiando el ultimo hijo de cada div osea la 
    etiqueta p cada vez que lo solicitemos por medio de la lista de inputs*/
    listInputs.forEach((Element) => {
        Element.lastElementChild.innerHTML = "";
        
        });
    
    if(nombre.value.length < 3   || nombre.value.length > 20 ||  nombre.value.trim() =="" ){
       
            mostrarMensajeError("nombre","Nombre debe contener 3 a 20 caracteres");
        }
    if(ApellidoPaterno.value.length < 3   || ApellidoPaterno.value.length > 20  || ApellidoPaterno.value.trim() =="" ){
       
            mostrarMensajeError("ApellidoPaterno","A-Paterno debe contener 3 a 20 caracteres");
        }    
    if(ApellidoMaterno.value.length < 3   || ApellidoMaterno.value.length > 20 || ApellidoMaterno.value.trim() =="" ){
       
            mostrarMensajeError("ApellidoMaterno","A-Materno debe contener 3 a 20 caracteres");
        }
    
    if(Contraseña.value.length < 8 || Contraseña.value.length  > 20 ||Contraseña.value.trim()== ""){
            mostrarMensajeError("Contraseña","contraseña debe tener mas de 8 caracteres pero menos de 20");
    }
    if(sexo.value == "ninguno"  || sexo.value == "" || sexo.value.trim()== ""){
       
        mostrarMensajeError("select","Seleccione un genero");
    }
    if(Email !== expr.test(correo) || Email.value.length < 3 || Email.value.trim()==""){
        mostrarMensajeError("Email","ingrese Email correcto");
    }

   });

   
   function mostrarMensajeError(ClaseInput, mensaje){

    let elemeto = document.querySelector(`.${ClaseInput}`);
    elemeto.lastElementChild.innerHTML = mensaje;
    
}

