const Formulario = document.getElementById("registro");
const Nombre = document.getElementById("nombre");
const Edad = document.getElementById("edad");
const Modalidad = document.getElementById("modalidad");
const Correo = document.getElementById("correo");
const Experiencia = document.getElementById("experiencia");

const infcaracteres = document.getElementById("vistaCaracteres");
const infexperiencia = document.getElementById("infoExperiencia");
const infnombre = document.getElementById("vistaNombre")
const infedad = document.getElementById("estadoEdad")
const infmodalidad = document.getElementById("infoModalidad");
const infcorreo = document.getElementById("infCorreo");
const salida = document.getElementById("resultado");



Nombre.addEventListener("input", function () {
    if (Nombre.value === "") {
        infnombre.textContent = "";
        infcaracteres.textContent = "";
    } 
    else {
        infnombre.textContent = "Participante " + Nombre.value;
        infcaracteres.textContent = Nombre.value.length + " caracteres ";
    }
});





Nombre.addEventListener("input", function (){
    let longitud = Nombre.value.length;

     if (longitud < 5 || longitud > 20) {
        infnombre.textContent = "valor fuera de rango";
    }
    else {
         infnombre.textContent = "Valor valido";
    }
});



Nombre.addEventListener("blur", function (){

    if (Nombre.value === "") {
        infnombre.textContent =
        "Este campo es obligatorio.";
    }
    else {
        infnombre.textContent =
        "campo diligenciado.";
    }
});



Edad .addEventListener("blur", function (){

    if (Edad.value === "") {
        estadoEdad.textContent =
        "Este campo es obligatorio.";
    }
    else {
        estadoEdad.textContent =
        "campo diligenciado.";
    }
});



Modalidad.addEventListener("change", function (){

if (Modalidad.value === "virtual") {
    infoModalidad.textContent = "La modalidad vitual es muy FEA! ";

}
else if (Modalidad.value === "presencial") {
     infoModalidad.textContent = "La modalidad presencial es muy chevere PA!";
}
else   {
    infoModalidad.textContent = "";
}

});



Correo.addEventListener("focus", function(){
    infcorreo.textContent= "ingrese un correo valido."
});

Formulario.addEventListener("submit", function (event){
    event.preventDefault();

    let valorEdad = Number(Edad.value)
    let nombreValido = Nombre.value !== "";
    let edadValida = valorEdad >= 14 && valorEdad <=100;
    let modalidadValida = Modalidad.value !== "";
    let correoValido = Correo.value !=="";
    let experienciaValida = Experiencia.value !== "";

if (nombreValido && edadValida && modalidadValida && correoValido) {
salida.textContent = " Todos los datos son correctos.";
} 
else {
salida.textContent = "Completa el formulario.";
}

});




Experiencia.addEventListener("change", function (){

if (Experiencia.value === "principiante") {
    infexperiencia.textContent = "Me alegre tenerte, vamos con toda";

}
else if (Experiencia.value === "intermedio") {
     infexperiencia.textContent = "Ya tienes conocimientos que bueno";
}
else if (Experiencia.value === "avanzado") {
     infexperiencia.textContent = "A bueno mijo";
}

else   {
    infexperiencia.textContent = "";
}

});