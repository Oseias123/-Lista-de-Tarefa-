const spryzen = document.querySelector ("input")
const blizzard = document.querySelector ("ol")
let ramos = []

function adicionar (){
   ramos.push(spryzen.value)
   console.log(ramos)
   render()
}

function render(){
    blizzard.innerHTML = null
    ramos.forEach(function(tarefa){
    const li = document.createElement("li")
    li.innerText = tarefa 
    blizzard.appendChild(li)
})

}

function apagar(){
    ramos = []
    blizzard.innerHTML = null
}

 



