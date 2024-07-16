import './About.css'
import about from '../../../public/images/about-image.png'

let About = () => {
    return(
        <section className='about' id='about'>   
            <div className='about-container'>
                <div className='about-container-title'><h1>Conheça a <strong>Legov Licitações</strong></h1></div>
                <div className='about-container-infos'>
                    <div className='about-container-infos-texts'>
                    <p>
                    Na Legov Licitações, guiamos empresas ao sucesso em licitações com soluções eficientes e personalizadas. Nossa expertise e compromisso com a excelência garantem resultados excepcionais.   
                    </p>
                    <p>Visamos um futuro com acesso igualitário a oportunidades de negócios. Impulsionamos o crescimento de nossos clientes com estratégias inovadoras, destacando-nos pela ética e responsabilidade social e ambiental.</p>
                    <p>Nossa dedicação aos valores de comprometimento, excelência e parceria é evidente em cada projeto. Somos sua aliada estratégica para alcançar sucesso duradouro em licitações.</p>
                    </div>
                    
                    <div className='about-container-infos-image'><img src={about} alt='about-image'/></div>
                </div>
                <div className='about-container-button'>
                <p><button><a>Saiba mais!</a></button></p>
                </div>
            </div>
        
        </section>
    )
}

export default About