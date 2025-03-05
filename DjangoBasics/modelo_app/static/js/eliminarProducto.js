const botones = document.querySelectorAll("#EliminarButton")
botones.forEach(boton => {
    boton.addEventListener("click", async function() {
        const id = boton.getAttribute("eventID")
        const datatosend = {
            "id": id
        }
        const confirm = window.confirm("¿Desea eliminar el producto?")
        if (confirm) {
            const token = document.querySelector("#csrftoken").value
            const response = await fetch(`eliminarProducto`, {
                method: 'DELETE',
                headers: {
                    'X-CSRFToken': token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(datatosend)
            })
            const data = await response.json()
            alert(data.message)
            window.location.reload()
        }
    })
})