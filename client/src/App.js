import './App.css';
import Login from "./components/Login.js";
import Navbar from './components/Navbar.js';

const books = [
  {
    id: 12334,
    title: "Interview With the Vampire"
  },
  {
    id: 34553,
    title: "The Lovely Bones"
  },
  {
    id: 55555,
    title: "On a Pale Horse"
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Posts App</h1>
      <Login />
    </div>
  );
}

export default App;
