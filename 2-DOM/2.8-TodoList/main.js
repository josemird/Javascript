document.addEventListener("DOMContentLoaded", function () {
  // Selecciona los elementos necesarios
  const input = document.querySelector(".search input");
  const addBtn = document.querySelector(".search .btn-add");
  const list = document.querySelector(".li-container ul");
  const empty = document.querySelector(".empty");
  const counter = document.querySelector(".task-count");


  function updatecounter() {
    const items = list.children;
    counter.textContent = items.length;
    empty.style.display = items.length === 0 ? "block" : "none";
  }

  // Función para guardar las tareas en LocalStorage
  function saveItemsLocal() {
    const items = Array.from(list.children).map(
      (task) => task.textContent
    );
    localStorage.setItem("items", JSON.stringify(items));
  }

  // Función para cargar las tareas desde LocalStorage al cargar la página
  function loadItemsLocal() {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      items.forEach((itemText) => {
        addItemsToList(itemText);
      });
    }
  }

  // Función para agregar una tarea a la lista
  function addItemsToList(itemText) {
    // Crea un nuevo elemento de lista
    const newItem = document.createElement("li");

    // Crea un párrafo dentro del elemento de lista
    const itemsParagraph = document.createElement("p");
    itemsParagraph.textContent = itemText;

    // Crea el botón de eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.classList.add("btn-delete");

    // Manejador de evento para eliminar la tarea al hacer clic en la "x"
    deleteBtn.addEventListener("click", function () {
      newItem.remove();
      updatecounter();
      saveItemsLocal();
    });

    // Agrega el párrafo y el botón al elemento de lista
    newItem.appendChild(itemsParagraph);
    newItem.appendChild(deleteBtn);

    // Agrega el nuevo elemento a la lista de tareas
    list.appendChild(newItem);

    // Muestra la lista de tareas y actualiza el contador
    list.style.display = "block";
    updatecounter();
  }

  // Manejador de evento para el botón de agregar
  addBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtiene el valor del input de tarea
    const itemText = input.value.trim();

    // Verifica si se ingresó un valor válido
    if (itemText !== "") {
      // Agrega la tarea a la lista
      addItemsToList(itemText);

      // Guarda las tareas en LocalStorage
      saveItemsLocal();

      // Limpia el campo de entrada
      input.value = "";
    }
  });

  // Carga las tareas desde LocalStorage al cargar la página
  loadItemsLocal();

  // Actualiza el contador de tareas al cargar la página
  updatecounter();
});
