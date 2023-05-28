import { useEffect, useState } from "react";

/*const tarefas = [
  { id: "1", title: " minha primeira tarefa" },
  { id: "2", title: " minha primeira tarefa" },
  { id: "3", title: " minha primeira tarefa" },
  { id: "4", title: " minha primeira tarefa" },
  { id: "5", title: " minha primeira tarefa" },
  { id: "6", title: " minha primeira tarefa" },
];*/
export default function MinhaTarefa() {

    const[tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function buscarDados(){
        const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
        const resultadoFinal = await resultado.json()
        return resultadoFinal

    }

    buscarDados().then(res=>setTarefas(res))
  }, []);

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return(
            <div key={tarefa.id}>
                <li key={tarefa.id}>
                    {tarefa.title}
                    {tarefa.completed ? ' - Tarefa Concluída' : null}
                </li>

            </div>
            
          ) 
        })}
      </ol>
    </div>
  );
}
