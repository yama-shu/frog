import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<>Not Found</>} />
        
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
