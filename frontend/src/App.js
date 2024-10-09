import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Footer from './components/Footer';
import SForm from './components/SForm';
import AllSupplier from './components/AllSupplier';
import UpdateSup from './components/UpdateSup';

  function App (){
    return(
    <Router>
      <div>
        <Header />
        <hr />
        <Routes>
          <Route path='/sp'element={<SForm/>} />
          <Route path='/allsup' element={<AllSupplier/>} />
          <Route path='/UpdateSup' element={<UpdateSup/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    )
  }
  
export default App;
