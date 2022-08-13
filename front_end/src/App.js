import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import NavigationBar from './Components/NavigationBar';
import { useUsersContext } from './Hooks/useUsersContext';

function App() {

  const {user} = useUsersContext()

  return (
    <div className="App">
      <BrowserRouter>
          <NavigationBar/>
          <div className="pages">
             <Routes>
               <Route path='/' element={user ? <Home/> : <Navigate to="/login"/>}/>
               <Route path='/Signup' element={!user ? <Signup/> : <Navigate to="/"/>}/>
               <Route path='/Login' element={!user ? <Login/> : <Navigate to="/"/>}/>
             </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
