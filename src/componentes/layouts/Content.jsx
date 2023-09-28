import { Route, Routes } from 'react-router-dom';
import Home from '../../views/pages/Home';
import About from '../../views/pages/About';
import NotFound from '../../views/pages/NotFound';
import Param from '../../views/pages/Param';
import Listagem from '../../views/pages/Listagem';
import './Content.css'
import Game from '../../views/pages/game';

const Content = props => (
    <>
    <aside className='Content'>
        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/game" element={<Game />}/>
            <Route path="/cep" element={<Listagem />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </aside>
    </>
)
export default Content;