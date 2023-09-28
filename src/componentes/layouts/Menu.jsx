import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = props => (
    <>
    <aside className='Menu'>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/game">game</Link></li>
                <li><Link to="/cep">Listagem Cep</Link></li>
            </ul>
        </nav>
    </aside>
    </>
)
export default Menu;