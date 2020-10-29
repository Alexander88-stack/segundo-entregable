// Creamos una variable que capture el elemento del button
let captarTarea = document.getElementById('crear');




// al elemtno capturado, le agregamos un escuchador del evento click 
// y decimos que funcion queremos ejecutar cuando seuceda el click
captarTarea.addEventListener('click', clickCrear);

function clickCrear() {
      
       //Coger el valor de nuestra tarea
    let contenidoTarea = document.getElementById('nuevatarea').value;
   
       
        //Mandar la tarea a mi lista
    let capturaLista = document.getElementById('mylist');   // cambiar el nombre a "listaTodos"

    
        // Metiendo una nueva tarea en la lista

    //creea boton eliminar
    let spanEliminar = document.createElement("SPAN");
    let botonEliminar = document.createTextNode("\u00D7");
    spanEliminar.appendChild(botonEliminar)
    spanEliminar.classList.add("spanEliminar")
    //crea tarea y le agrega el boton de eliminar
    let li = document.createElement("li");
    li.innerText = contenidoTarea 
    li.appendChild(spanEliminar)
    //agrega la tarea a la lista de tareas
    capturaLista.appendChild(li)



    //eliminar elemento
    // coger todos los botones
    let botonesEliminar = document.querySelectorAll(".spanEliminar")
    //coger todas las tareas
    let toDos = document.querySelectorAll("li")
  
    //recorrer botones eliminar para agregarles un evento que permita eliminar las tareas
    for ( let i=0; i < botonesEliminar.length; i++){
        botonesEliminar[i].addEventListener('click', function(){
            toDos[i].remove()
            botonesEliminar[i].remove()
        })
    }
 
    
}



