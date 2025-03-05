const button = document.querySelector("#crearEventoButton")
button.addEventListener('click', async (e) => {
    e.preventDefault()
    const token = document.querySelector("#csrftoken").value
    const formdata = new FormData(document.querySelector("#crearEventoForm"))
    const data = {}
    formdata.forEach((value, key) => {
        data[key] = value
    })
    const response = await fetch('createProductoByFetch', {
        method: 'POST',
        headers: {
            'X-CSRFToken': token, 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const json = await response.json()
    alert(json.message)
    window.location.reload()
})