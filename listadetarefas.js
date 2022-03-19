let h1 = document.getElementById("h1-lista-de-tarefas")

let text = "Lista de tarefas"

const mostrarTexto = (h1, text) => {

 let c = text.split("").reverse()
 
setInterval(() => {

    if(!c.length){
        return clearInterval()
    }

    let next =  c.pop()

    h1.innerHTML += next

 }, 100)
}

mostrarTexto(h1,text)