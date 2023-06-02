const tareas = [];

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputText = document.querySelector("#text");
        tareas.push({
            id: Date.now(),
            text: inputText.ariaValueMax,
            complete:false,
        });

    inputText.value = "";
    console.log(tareas);
})