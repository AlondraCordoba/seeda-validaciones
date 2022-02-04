const form = document.getElementById("form");
console.log(form);

const inputArray = document.querySelectorAll("#form input,select");
console.log(inputArray);

const divNombre = document.getElementById("msjNombre");
const divIdioma = document.getElementById("msjIdioma");
const divPais = document.getElementById("msjPais");
const divUsuario = document.getElementById("msjUsuario");
const divSueld = document.getElementById("msjSueld");
const divCpass = document.getElementById("msjCpass");
const divOcupacion = document.getElementById("msjOcupacion");

const regNombre = /^[a-zA-ZÁ-ÿ\s]{3,50}$/;

inputArray.forEach((input) => {
  input.addEventListener("keyup", validar);
  input.addEventListener("blur", validar);
});

const expresiones = {
	RFC: /^([A-ZÑ&]{3,4}[A-ZÑ&]+) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-ZÑ&\d]{2})([AÑ&\d])$/
}	

function validar(event) {
  let contenido = event.target.value.toString();
  let input = event.target;
  const mensajeLength = "Minimo 3 letras y maximo 50";

  switch (input.id) {
    case "nombre":
      if (contenido == "") {
        validarVacio(divNombre);
      } else if (contenido.length < 3 || contenido.length > 50) {
        validarMSJ(divNombre, input, false, mensajeLength);
      } else {
        validarMSJ(divNombre, input, true, mensajeLength);
      }
      break;


    case "usuario":
      if (input.value == "") {
        validarVacio(divUsuario);
      } else if (contenido.length < 3 || contenido.length > 50) {
        validarMSJ(divUsuario, input, false, mensajeLength);
      } else {
        validarMSJ(divUsuario, input, true, mensajeLength);
      }
      break;

    case "sueld":
      if (input.value == "") {
        validarVacio(divSueld);
      } else if (contenido.length < "5186.10" || contenido.length > "5186.10") {
        validarMSJ(divSueld, input, false, mensajeLength);
      } else {
        validarMSJ(divSueld, input, true, mensajeLength);
      }
      break;

    case "rfc":
      validarCampo(expresiones.RFC, e.target, 'RFC');
      break;

    case "ocupacion":
      if (input.value == "") {
        validarVacio(divOcupacion);
      } else if (contenido.length < 3 || contenido.length > 50) {
        validarMSJ(divOcupacion, input, false, mensajeLength);
      } else {
        validarMSJ(divOcupacion, input, true, mensajeLength);
      }
      break;
  }
  function validarVacio(div) {
    div.classList.remove(`d-none`);
    div.classList = `d-block invalid-feedback`;
    div.textContent = "Campo obligatorio";
  }

  function validarMSJ(div, input, estado, mensaje) {
    if (estado == false) {
      div.classList.remove("d-none");
      div.classList = "d-block invalid-feedback";
      div.textContent = `${mensaje}`;
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    } else {
      divNombre.classList.remove("d-block");
      divNombre.classList.add("d-none");
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }
  }

  const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle')
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
      campos[campo]=true;
      sueldo[campo]=true;
  
    } else{
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle')
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
      campos[campo]=false;
      sueldo[campo]=false;
    }
  }

}