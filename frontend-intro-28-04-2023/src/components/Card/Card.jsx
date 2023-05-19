import "./Card.css"
function Card(props){
  const item = props.item;

    return(
        <div className="card">
          <h2>{item.nome}</h2>
          <img width= "200" src={item.imagemUrl}/>
        {/*<h2>Pikachu</h2>*/}
        {/*<img 
          width="200"
          src="https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-10_5z4v.png"
    />*/}
      </div>
    )
}

export default Card

{/* Comentário do seu código */}