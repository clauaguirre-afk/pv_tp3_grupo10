import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import Header from './components/Header';
const App =()=>{
  return(
    <div className="contenedor2">
      <Header/>

      <main>
        <ListaProyectos/>
      </main>

      <Footer/>
    </div>
 );
}
export default App;