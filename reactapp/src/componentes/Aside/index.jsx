import './style.css'
import logoCSL from '../../assets/logoCSL.jpg'

function Aside(){
    return ( 
        <aside className="left">
    
        <img src={logoCSL} width="160px" alt="Logo do colégio Ulbra São Lucas"/>
        
        <ul>
            <li>
                <a href="#inicio" className="active">Inicio</a>
            </li>
            <li>
                <a href="#carreira">Carreira</a>
            </li>
            <li>
                <a href="#contato">Contato</a>
            </li>
            <li>
                <a href="#sobre">Sobre</a>
            </li>
        </ul>
    </aside>
)
}
export default Aside