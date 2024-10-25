import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Linebot from './linebot.js'; // './' は同じフォルダ内のファイルを示す
import Discordbot from './discord.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linebot" element={<Linebot />} />
        <Route path="/discordbot" element={<Discordbot />} />

      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
