import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import Header from './components/Header';
import { UsuarioProvider } from './context/UsuarioContext';

const App = () => {
  return (
    <UsuarioProvider>
      <div className="contenedor2">
        <Header/>

        <main>
          <ListaProyectos/>
        </main>

        <Footer/>
      </div>
    </UsuarioProvider>
  );
}

export default App;