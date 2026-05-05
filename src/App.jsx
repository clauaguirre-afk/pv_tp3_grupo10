import ListaProyectos from './components/ListaProyectos';
import Footer from './components/Footer';
import Header from './components/Header';
const App =()=>{
  return(
    <div>
      <Header/>

      <main>
        <ListaProyectos/>
      </main>

      <Footer/>
    </div>
 );
}
export default App