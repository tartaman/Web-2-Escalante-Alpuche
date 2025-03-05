const lista = document.querySelector("#listaLocalidades")

document.addEventListener("DOMContentLoaded", async() => {
    const url = "returnLocalidades"
    const response = await fetch(url)
    const data = await response.json()
    data.localidades.forEach(localidad => {
        const option = document.createElement("option")
        option.value = localidad.id
        option.text = localidad.name
        lista.appendChild(option)
    });
})