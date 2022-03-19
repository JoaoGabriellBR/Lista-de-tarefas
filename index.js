const botaoadicionar = document.getElementById("botao-adicionar")

const principal = () => {
    const input_tarefa = document.getElementById("input-tarefa").value
    averiguardados(input_tarefa)
}

const limpainput = () => {
    const inputtarefa = document.getElementById("input-tarefa").value = ""
}

const averiguardados = (input_tarefa) => {

    if(input_tarefa == ''){
        alert("PREENCHA O CAMPO E TENTE NOVAMENTE")
    }

    else if(input_tarefa.length >= 80){
        alert("LIMITE DE 70 CARACTÉRES EXCEDIDO")
    }

    else{
        adicionartarefa(input_tarefa)
    }
}

    

const adicionartarefa = (input_tarefa) => {

    const divprincipal = document.getElementById("container-principal")

    const novadiv = document.createElement("div")
    const p = document.createElement("p")
    const botaoexcluir = document.createElement("button")

    p.innerHTML = `${input_tarefa.toUpperCase()}`
    botaoexcluir.innerText = "X"

    p.setAttribute("id", "tarefa")
    botaoexcluir.setAttribute("id", "botao-excluir-tarefa")
    novadiv.setAttribute("class", "div-lista-de-tarefas")

    novadiv.appendChild(p)
    novadiv.appendChild(botaoexcluir)
    divprincipal.appendChild(novadiv)

    limpainput()
    
    botaoexcluir.addEventListener("click", () => {
        document.getElementById("container-principal").removeChild(novadiv)
    })

}

botaoadicionar.addEventListener("click", principal)