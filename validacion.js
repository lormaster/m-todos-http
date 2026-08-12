async function hacer_post() {

    const formulario = document.getElementById("formulario");

    const datosFormulario = new FormData(formulario);

    console.log(
        datosFormulario.get("nombreUsuario")
    );

    console.log(
        datosFormulario.get("correoUsuario")
    );


    const respuesta = await fetch(
        "https://httpbin.org/post",
        {
            method: "POST",
            body: datosFormulario
        }
    );


    const infoRespuesta = await respuesta.json();

    return infoRespuesta;
}

const formulario =
    document.getElementById("formulario");


formulario.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const datoInfo =
            await hacer_post();


        sessionStorage.setItem(
            "datoInfo",
            JSON.stringify(datoInfo)
        );


        window.location.href =
            "respuesta.html";

    }
);