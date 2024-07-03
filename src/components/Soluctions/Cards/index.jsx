import './Cards.css'
import victory from '../../../../public/images/victory-icon.svg'
import time from '../../../../public/images/time-icon.svg'
import idea from '../../../../public/images/idea-icon.svg'

let card = [
    {image: victory,  title:'Aumentar chance de vitória', text:'Aumentar as oportunidades nos processos de licitações publicados pelos diversos órgãos públicos através de análises detalhadas, estratégias eficazes e preparação adequada de documento.'},
    {image: time, title:'Economia de tempo',  text:'Agilizar o processo de participação em licitações, poupando tempo para que os clientes possam focar em suas operações principais.'},
    {image: idea, title:'Identificar oportunidades',  text:'Monitorar constantemente novas oportunidades de licitações que se alinhem com os serviços e expertise do cliente.'}
]

let Cards = () =>{
    return(


        <div className='cards-container'>
            {card.map(({image, title, text}, index) =>(
                <div className='card' key={index}>
                <div className='card-image'>
                    <img src={image}/>
                </div>
                <div className='card-texts'>
                    <h3>{title}</h3>    
                    <p>{text}</p>
                </div>
            </div>
            ))}
        
        </div>
    )
}


export default Cards