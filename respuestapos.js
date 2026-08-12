const respuesta = document.getElementById("respuesta");

const datoInfo = JSON.parse(
    sessionStorage.getItem("datoInfo")
);


// Mostrar datos de forma segura

const nombre = document.createElement("p");
const correo = document.createElement("p");
const telefono = document.createElement("p");

nombre.textContent =
    "Nombre: " + datoInfo.form.nombreUsuario;

correo.textContent =
    "Correo: " + datoInfo.form.correoUsuario;

telefono.textContent =
    "Teléfono: " + datoInfo.form.telefonoUsuario;

respuesta.appendChild(nombre);
respuesta.appendChild(correo);
respuesta.appendChild(telefono);


// PUT

async function hacer_put() {

    const respuestaServidor = await fetch(
        "https://httpbin.org/put",
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nombreUsuario:
                    datoInfo.form.nombreUsuario,

                correoUsuario:
                    datoInfo.form.correoUsuario,

                telefonoUsuario:
                    datoInfo.form.telefonoUsuario
            })
        }
    );

    const informacion =
        await respuestaServidor.json();

    return informacion;
}


// PATCH

async function hacer_patch() {

    const respuestaServidor = await fetch(
        "https://httpbin.org/patch",
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nombreUsuario:
                    datoInfo.form.nombreUsuario
            })
        }
    );

    const informacion =
        await respuestaServidor.json();

    return informacion;
}


// DELETE

async function hacer_delete() {

    const respuestaServidor = await fetch(
        "https://httpbin.org/delete",
        {
            method: "DELETE"
        }
    );

    const informacion =
        await respuestaServidor.json();

    return informacion;
}


// Botón PUT

const btnPut = document.getElementById("btnPut");

btnPut.addEventListener("click", async () => {

    const resultado = await hacer_put();

    console.log("Respuesta PUT:", resultado);

    respuesta.textContent = "";

    const mensaje = document.createElement("p");

    mensaje.textContent =
        "Petición PUT realizada correctamente.";

    respuesta.appendChild(mensaje);
});


// Botón PATCH

const btnPatch = document.getElementById("btnPatch");

btnPatch.addEventListener("click", async () => {

    const resultado = await hacer_patch();

    console.log("Respuesta PATCH:", resultado);

    respuesta.textContent = "";

    const mensaje = document.createElement("p");

    mensaje.textContent =
        "Petición PATCH realizada correctamente.";

    respuesta.appendChild(mensaje);
});


// Botón DELETE

const btnDelete =
    document.getElementById("btnDelete");

btnDelete.addEventListener("click", async () => {

    const resultado = await hacer_delete();

    console.log("Respuesta DELETE:", resultado);

    respuesta.textContent = "";

    const mensaje = document.createElement("p");

    mensaje.textContent =
        "Petición DELETE realizada correctamente.";

    respuesta.appendChild(mensaje);
});


// Botón volver

const btnVolver =
    document.getElementById("btnVolver");

btnVolver.addEventListener("click", () => {

    window.location.href =
        "ejerciciospos.html";
});