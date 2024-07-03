import Cards from './Cards'
import './Soluctions.css'

let Soluctions = () =>{
    return(

        <section className='soluctions'> 
            <div className='soluctions-container'>
                <div className='soluctions-objectives'>
                    <div className='objectives-title'><h2>Nossos objetivos:</h2></div>
                    <div className='objectives-cards'><Cards /></div>
                </div>
                <div className='soluctions-leafs'></div>

            </div>
             </section>
    )

}

export default Soluctions