import './NavBar.css'
import {useNavigate} from 'react-router-dom'


const NavBar = () => {

    const navigate = useNavigate();

    return(
        <div className="NavBar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#/about">About Me</a></li>
                <li><a href="/#/aurora-project">Aurora Project</a></li>
                <li><a href="/#/contact">Contact</a></li>
            </ul>
        </div>
    )
}


export default NavBar;