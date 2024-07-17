import './Partners.css'
import cp1 from '../../../public/images/cp1.png'
import cp2 from '../../../public/images/cp2.png'
import cp3 from '../../../public/images/cp3.png'
import cp4 from '../../../public/images/cp4.png'
import cp5 from '../../../public/images/cp5.png'
import cp6 from '../../../public/images/cp6.png'
import cp7 from '../../../public/images/cp7.png'
import cp8 from '../../../public/images/cp8.png'

var company = [
    {image: cp1},
    {image: cp2},
    {image: cp3},
    {image: cp4},
    {image: cp5},
    {image: cp6},
    {image: cp7},
    {image: cp8}

]

let Partners = () =>{
    return(

        <section className='partners' id='partners'>
            <div className='partners-container'>
                <div className='partners-container-title'><h1>Empresas que acreditam em <strong>nosso potencial</strong></h1></div>

                    <div className='icon-container'>
                        {company.map(({image}, index) => (
                            <div key={index} className='company-icon'><img src={image} alt={index}/></div>
                        ))}
                    </div>
                    <div className='partners-button'><button><a href="https://wa.me/5541995043150?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20como%20aumentar%20as%20minhas%20chances%20no%20processo%20de%20licita%C3%A7%C3%A3o%21">Seja um de nossos clientes!</a></button></div>
            </div>
        </section>
    )
}


export default Partners;