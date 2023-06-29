import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import Details from './components/Details';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Exercises />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
