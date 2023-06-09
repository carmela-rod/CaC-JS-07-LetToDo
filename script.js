let tareas = [];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputText = document.querySelector("#text");
    tareas.push({
        id: Date.now(),
        text: inputText.value,
        complete: false,
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));

    inputText.value = "";
    renderTareas();
});

const renderTareas = () => {
    tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    tareas.forEach(
        (tarea) =>
            (tbody.innerHTML += ` 
            <tr>
                <td>${tarea.text}</td>
                <td>    
                <button> Completar</button>
                <button> Editar</button>
                <button> Borrar</button>
                </td>
            </tr>   
            `)
    );
};

document.addEventListener("DOMContentLoaded", () => {
    renderTareas();
});