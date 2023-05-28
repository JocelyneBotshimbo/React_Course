import { useEffect, useState } from "react"

export default function MinhaList(){

    const minhaLista =[
        {id:'1', value: 'Fruta'},
        {id:'2', value: 'Legume'},
        {id:'3', value: 'Carne'}
       /* <h4 key="1">Item 1</h4>,
        <h4 key="2">Item 2</h4>,
        <h4 key="3">Item 3</h4>,
        <h4 key="4">Item 4</h4>,
        <h4 key="5">Item 5</h4>*/
    ]
    const [produtos, setProdutos] = useState(minhaLista)
    const [pesquisa, setPesquisa] = useState('')

    useEffect(
        ()=>{
            if(pesquisa){
                const novaLista = minhaLista.filter((item)=>{
                    return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                })
                setProdutos(novaLista)

            }else{
                setProdutos(minhaLista)
            }

        }
        ,[pesquisa]
    )

    return(
        <div>
            <h1>Efeitos colaterais</h1>
            <input

             value={pesquisa}
             onChange={(e) => setPesquisa(e.target.value)}
             placeholder="pesquise aqui" />

            {produtos.map((item) => {
            return(
                <div key={item.id}>
                    <h4>{item.value}</h4>
                </div>
            )
        })}

        </div>
       

    )
}