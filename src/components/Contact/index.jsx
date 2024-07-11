import './Contact.css'

let Contact = () =>{


    return(
        <section className='cont'>
            <div className='cont-container'>
        
                   <div className='cont-container-title'> 
                    <div className='title'><h1>Seja um de nossos <strong>clientes</strong></h1></div>
                    <div className='subtitle'><h5>Descubra como nossos especialistas 
                        podem aumentar suas chances de sucesso em licitações e conquistar novos contratos.</h5>
                        <button>Saiba mais!</button>
                        </div>
                   </div>

                   <div className='conts'>
                    <div className='conts-contacts'>
                        <h3>Nossos contatos:</h3>
                        <p>@legov.licita</p>
                        <p>41 99145-3085</p>
                        <p>legov.licita@gmail.com </p>
                        <p>Rua Antonio Dalmarco 495, Curitiba-PR</p>
                    </div>


                        <div className='admin'>
                            <h3><strong>Administração:</strong></h3>
                            <div className='admin-container'>
                                <div className='admin-container-user'>
                                    <h4>Ednildon Trindade</h4>
                                    <h5>CEO & Assessor</h5>
                                    <p>41 99810-3150</p>
                                    <p>edinildon@legovlicitacoes.com.br</p>
                                </div>

                                <div className='admin-container-user'>
                                    <h4>Jonath Richard</h4>
                                    <h5>COO & Assessor</h5>
                                    <p>41 99145-30850</p>
                                    <p>jonath@legovlicitacoes.com.br</p>
                                </div>
                            
                            </div>

                        </div>

                        <div className='cont-nav'>
                            <h3>Navegação:</h3>
                            <a>Início</a>
                            <a>Sobre nós</a>
                            <a>Vantagens</a>
                            <a>Soluçções</a>

                        </div>
                   </div>


            </div>



        </section>

    )
}

export default Contact