import Cabecalho from './Components/Cabecalho/Cabecalho';
import MainConteiner from "./Components/MainConteiner/MainConteiner";
import Rodape from './Components/Rodape/Rodape';
import ButtonFooter from './Components/buttonFooter/buttonFooter';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    
      <Cabecalho />
      
      
      <MainConteiner />
      
      <ButtonFooter/>

      <Rodape />

      <ToastContainer/>
    </>
  )
}

export default App;
