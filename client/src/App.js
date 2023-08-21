import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import ClientsTable from './components/ClientsTable';



function App() {
  return (    
    <div className="App bg-dark">
      <header className="App-header">
      <AppNavBar/>    
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/clients' element={<ClientsTable/>}/>
      </Routes>     
      </BrowserRouter> 
    </div>    
  );
}

export default App;
