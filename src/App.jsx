import ListaProyectos from './views/ListaProyectos';
import Footer from './components/Footer';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';
import DetalleProyecto from './views/DetalleProyecto';
import { Routes, Route } from 'react-router-dom';
import { UsuarioProvider } from './context/UsuarioContext';
const App =()=>{
  return (
    <UsuarioProvider>

      <div className="contenedor2">

        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/proyectos' element={<ListaProyectos />} />
            <Route path='/proyectos/:id' element={<DetalleProyecto />} />
            <Route path='/perfil' element={<PerfilUsuario />} />
          </Routes>
        </main>

        <Footer />

      </div>

    </UsuarioProvider>
  );
}
export default App;