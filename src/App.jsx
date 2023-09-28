
import Menu from './componentes/layouts/Menu.jsx'
import Content from './componentes/layouts/Content.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'


export default function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Menu />
          <Content />
        </BrowserRouter>
      </div>
    </>
  )
}
