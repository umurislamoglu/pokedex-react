import Header from './layout/Header';
import Dashboard from './layout/Dashboard';
import './styles/main.scss'
import { BrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';



function App() {


  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
