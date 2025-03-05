const buttons = document.querySelectorAll("#verBoletosButton")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("boletoid")
        window.location.href = `boletos/${id}`
    })
})