import { Routes, Route } from 'react-router-dom'
import Navegacion from './componentes/Navegacion'
import Home from './vistas/Home'
import Contacto from './vistas/Contacto'
import NotFound from './vistas/NotFound'

function App() {


  return (
    <>
      <Navegacion/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
