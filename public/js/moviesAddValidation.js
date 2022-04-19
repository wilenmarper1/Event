window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  console.log(titulo);
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//
  // 1- atrapar el form

  let tituloPelicula = document.querySelector("#title");
  let clasificacion = document.querySelector("#rating");
  let premios = document.querySelector("#awards");
  let fecha = document.querySelector("#release_date");
  let duracion = document.querySelector("#length");
  let genero = document.querySelector("#genre_id");
  let ulerror = document.querySelector(".errores");

  // 2- hacer foco en el title del form
  tituloPelicula.focus();

  //3-hacer el addEventListener del form con el eveto submit y adentro del callback meter toda la logica de validaciones
  //nota: hacer una variable errors con el valor de un array vacio, para un pusheando todos los mensajes de errores

  let form = document.querySelector(".form");

  form.addEventListener("submit", function (e) {
    ulerror.innerHTML = "";
    let errores = [];

    /////////////////VALIDACION CAMPO TITULO/////////////////////////////
    if (tituloPelicula.value == "") {
      tituloPelicula.classList.add("is-invalid");
      errores.push("El campo titulo no puede estar vacio");
    } else {
      tituloPelicula.classList.add("is-valid");
    }
    ///////////////////VALIDACION CAMPO CLASIFICACION ///////////////////////
    if (clasificacion.value == "") {
      clasificacion.classList.remove("is-invalid");
      errores.push("El campo calificacion no puede estar vacio");
    } else if (clasificacion.value < 0 || clasificacion.value > 10) {
      clasificacion.classList.add("is-invalid");
      errores.push("La clasificacion deben tener un valor entre 0 y 10");
    } else {
      clasificacion.classList.remove("is-invalid");
      clasificacion.classList.add("is-valid");
    }
    ///////////////////VALIDACION CAMPO PREMIOS ///////////////////////
    if (premios.value == "") {
      premios.classList.add("is-invalid");
      errores.push("El campo premios no puede estar vacio");
    } else if (premios.value < 0 || premios.value > 10) {
      premios.classList.add("is-invalid");
      errores.push("Los premios deben tener un valor entre 0 y 10");
    } else {
      premios.classList.remove("is-invalid");
      premios.classList.add("is-valid");
    }
    ///////////////////VALIDACION CAMPO FECHA ///////////////////////
    if (fecha.value == "") {
      fecha.classList.add("is-invalid");
      errores.push("El campo fecha no puede estar vacio");
    } else {
      fecha.classList.remove("is-invalid");
      fecha.classList.add("is-valid");
    }

    ///////////////////VALIDACION CAMPO DURACION ///////////////////////
    if (duracion.value == "") {
      duracion.classList.add("is-invalid");
      errores.push("El campo duracion no puede estar vacio");
    } else if (duracion.value < 60 || duracion.value > 360) {
      duracion.classList.add("is-invalid");
      errores.push("La duracion deben tener un valor entre 60 a 360 minutos");
    } else {
      duracion.classList.remove("is-invalid");
      duracion.classList.add("is-valid");
    }

    if (genero.value == "") {
      genero.classList.add("is-invalid");
      errores.push("El campo genero no puede estar vacio");
    } else {
      genero.classList.remove("is-invalid");
      genero.classList.add("is-valid");
    }
    //4- evaluar si el array errores esta vacio, sino lo esta iterarlo y mostrar los errores en el ul q tiene la clase
    // errores (mirar la vista moviesAdd). Si esta vacio mandar una alerta y hacer el submit del form
    //nota: usar el prevetDefault() para prevenir el posteo del formulario antes de q se realicen las validaciones

    if (errores.length > 0) {
      e.preventDefault();

      errores.forEach((error) => {
        ulerror.innerHTML += "<li>" + error + "</li>";
      });
    } else {
      alert("Guardando Nueva Pelicula");
    }
  });
};
