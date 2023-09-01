import './App.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/blogs/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Blog />
    </div>
  );
}

export default App;
