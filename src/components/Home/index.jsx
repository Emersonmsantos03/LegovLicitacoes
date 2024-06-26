import Header from './Header'
import './Home.css'
import facebook from '../../../public/images/facebook-white-icon.svg'
import instagram from '../../../public/images/instagram-white-icon.svg'
import email from '../../../public/images/email-white-icon.svg'

let Home = () => {

 return (
    <section className='home'>
      <Header  />
      <div className='home-itens'>
         <div className='home-itens-container'>
         <div className='home-itens-title'>
            <h1 className='home-itens-title-text'>Transforme seu produto ou serviços em oportunidades reais através do <strong>processo de licitações.</strong></h1>
         </div>
         <div className='home-itens-subtitle'>
            <h3>Expertise em licitações, ao seu alcance.</h3>
         </div>
         <div className='home-itens-logos'>
            <a><img src={facebook}/></a>
            <a><img src={instagram}/></a>
            <a><img src={email}/></a>
         </div>
         <div className='home-itens-button'><button><a>Fale conosco!</a></button></div>

         </div>
      </div>
    </section>
 )

}

export default Home