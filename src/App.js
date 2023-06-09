
import './App.css';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import Backlog from './pages/Backlog/Backlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/backlog" element={ <Backlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;