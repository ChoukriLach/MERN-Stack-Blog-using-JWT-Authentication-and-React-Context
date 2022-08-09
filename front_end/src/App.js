import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar/>
          <div className="pages">
             <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/Signup' element={<Signup/>}/>
               <Route path='/Login' element={<Login/>}/>
             </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
