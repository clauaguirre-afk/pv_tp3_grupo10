import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import PerfilUsuario from './components/PerfilUsuario';
import DetalleProyecto from './components/DetalleProyecto';
import { Routes, Route } from 'react-router-dom';
const App =()=>{
  return(
    <div className="contenedor2">
      <Header/>

      <main>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/proyectos' element={<ListaProyectos/>}/>
          <Route path='/proyectos/:id' element={<DetalleProyecto/>}/>
          <Route path='/perfil' element={<PerfilUsuario/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
 );
}
export default App;