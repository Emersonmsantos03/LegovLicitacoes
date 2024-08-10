import './Contact.css'
import { motion } from 'framer-motion';

let Contact = () =>{


    return(
        <section className='cont' id='cont'>
            <div className='cont-container'>
        
                   <div className='cont-container-title'> 
                   <motion.div
            initial={{ y: 200, x: 200, opacity: 0 }}
            whileInView={{ y: 100, x: 200, opacity: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 1 }} 
            className='mocao'
          > 
                    <div className='title'><h1>Seja um de nossos <strong>clientes</strong></h1></div>
                    </motion.div>

                    
                    
                    <div className='subtitle'>
                    <motion.div
                    
                    initial={{ y: 0, x: -50, opacity: 0 }}
                    whileInView={{ y: 0, x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 1 }}
                    className='mocao3'>
                        
                        <h5>Descubra como nossos especialistas 
                        podem aumentar suas chances de sucesso em licitações e conquistar novos contratos.</h5>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{opacity: 1 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ duration: 3 }}
                        className='mocao2'
          > 
                        <button><a a href="https://wa.me/5541995043150?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20como%20aumentar%20as%20minhas%20chances%20no%20processo%20de%20licita%C3%A7%C3%A3o%21" target="_blank">Saiba mais!</a></button>
                        </motion.div>

                        </div>
                   </div>

                   <div className='conts'>
                  
                    <div className='conts-contacts'>
                        <h3>Contatos:</h3>
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
                            <a href='http://localhost:5173/'>Início</a>
                            <a href='#about'>Sobre nós</a>
                            <a href='#soluctions'>Soluções</a>
                            <a href='#partners'>Parceiros</a>

                        </div>
                        
                   </div>


            </div>



        </section>

    )
}

export default Contact