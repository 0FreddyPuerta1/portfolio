import profile from '../assets/profile.jpg'
import './AboutMe.css'
import banner from '../assets/banner.png'

const AboutMe = () => {
    return(
        <div className='container'>
            <img src={banner} alt="" className='banner'/>
            <div className='info'>
                
                <p>Mi nombre es Freddy Puerta, tengo 23 años. Naci en Cartagena, Colombia el 24 de diciembre de 1998.
                    Desde muy joven siempre fui fanatico de la tecnología, recuerdo que de niño 
                    solía desarmar aparatops como grabadoras, calculadoras y demás, solo para ver
                    que tenian por dentro (entender como funcionaban). 

                    A la edad de 9 años tuve mi primera computadora, misma donde descargue mis primeros
                    videojuegos y donde aprendi a automatizar pequeñas tareas con Bash,
                </p>
            </div>

        </div>
    )
}


export default AboutMe;