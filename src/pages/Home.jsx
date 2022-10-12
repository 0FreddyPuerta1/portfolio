import './Home.css'
import coffee from '../assets/coffee.gif'
import pc from '../assets/pc.gif'
import music from '../assets/music.gif'
const Home = () => {
    return(
        <div className="home">
            <div className='presentation'>
                <h1>Hola, mi nombre es Freddy Puerta</h1>
                <h3>Soy desarrollador Front-End</h3>
                <h4>Me gusta la tecnología, la musica y el café</h4>
            </div>
            <div className='images'>
                <img src={coffee} alt="" />
                <img src={pc} alt="" />
                <img src={music} alt="" />
            </div>
            <div className='information'>
                <p>¿Que te parece si hacemos equipo? 
                    Podriamos tomar café y oir musica... 
                    Mientras trabajamos 
                    ¿A que es una buena idea?
                </p>
                <button>¡Contactame!</button>
            </div>
        </div>
    )
}



export default Home