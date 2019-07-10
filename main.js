let arreglo_tareas=[];
lista();
function addTarea(){
    let tarea=document.getElementById("tarea").value;
    arreglo_tareas.push(tarea);
    console.log(arreglo_tareas);
    lista();
}
function lista(){
    if (arreglo_tareas.length>0){
        let textoTarea="";
        /*arreglo_tareas.forEach(function(item,index){
            textoTarea+=item+"<br>";});*/
            for (let i = 0; i < arreglo_tareas.length; i++) {
                textoTarea+= arreglo_tareas[i]+"<br>";             
            }
        document.getElementById("mensaje").innerHTML=textoTarea;
    } else {
        document.getElementById("mensaje").innerHTML="No hay tarea";
    }
}
