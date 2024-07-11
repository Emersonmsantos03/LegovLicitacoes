import Cards from './Cards'
import './Soluctions.css'
import arrow from '../../../public/images/down-arrow.png'


let Soluctions = () =>{
    return(

        <section className='soluctions'> 
            <div className='soluctions-container'>
                <div className='soluctions-objectives'>
                    <div className='objectives-title'><h2>Nossos objetivos:</h2></div>
                    <div className='objectives-cards'><Cards /></div>
                </div>


               
                    
                    <div className='soluctions-tree'>
                      
                      
                        <div className='soluctions-tree-left'>
                            <div className='soluctions-tree-leaf'>
                                <button>Compliance Legal <img src={arrow}/></button>
                                <p>Adesão às leis, regulamentos e normas que regem uma organização, 
                                    garantindo que suas atividades estejam em conformidade com as exigências legais.</p>
                            </div>
                            <div className='soluctions-tree-leaf'>
                                <button>Negociação e Estratégia <img src={arrow}/></button>
                                <p>Estratégia e negociação licitatória envolvem táticas para competir e ganhar contratos públicos ou privados, 
                                    ajustando termos, condições e preços para alcançar acordos vantajosos e otimizar propostas de valor.</p>
                            </div>
                            <div className='soluctions-tree-leaf'>
                                <button>Transparência <img src={arrow}/></button>
                                <p>Ação de forma aberta e acessível, oferecendo clareza e visibilidade sobre decisões, processos e informações. 
                                    Em contextos governamentais e empresariais, essa prática promove confiança e responsabilidade.</p>
                            </div>

                        </div>
            <div className='soluctions-tree-line'></div>
                        <div className='soluctions-tree-right'>
                            <div className='soluctions-tree-leaf'>
                                <button>Análise de Viabilidade <img src={arrow}/></button>
                                <p>Avaliação um projeto ou proposta para determinar sua praticabilidade e rentabilidade, 
                                    considerando aspectos técnicos, financeiros e de mercado.</p>
                            </div>
                            <div className='soluctions-tree-leaf'>
                                <button>Treinamento <img src={arrow}/></button>
                                <p> São programas de capacitação destinados a ensinar técnicas e procedimentos para participar de processos de licitação, 
                                    visando a preparação de propostas competitivas e a compreensão das normas e regulamentos envolvidos.</p>
                            </div>
                            

                        </div>
                        



                    </div>
                    

               


                

            

            </div>
             </section>
    )

}

export default Soluctions