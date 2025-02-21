const createButton = document.querySelector("#create-user-button");
createButton.addEventListener("click", function(event) {
    event.preventDefault();
    const form = document.querySelector("#create-user-form");
    const formData = new FormData(form);
    const data = {};
    const token = document.querySelector("#csrf_token").value;
    console.log(token)
    formData.forEach((value, key) => {
        data[key] = value;
    });
    fetch(USER_CREATE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": token,
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((value) => {
        console.log(value)
    }).catch((error) => {
        console.log(error)
    })
})