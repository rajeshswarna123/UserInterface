import './App.css';
import Login from "./components/Login.js";
import Navigationbar from './components/Navbar.js';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  Redirect,
} from 'react-router-dom';
import Signup from './components/Signup.js';
import Posts from './components/Posts';
import Profile from './components/Profile';
import { Component } from 'react';
import { fetchData } from './Extensions';
import AddPost from './components/AddPost';

const posts = [
  {
    id: 12334,
    title: "Interview With the Vampire",
    content: "test"
  },
  {
    id: 34553,
    title: "The Lovely Bones",
    content: "test"
  },
  {
    id: 55555,
    title: "On a Pale Horse",
    content: "test"
  },
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      user: null,
    }
  }
  getUserPosts() {
    let user = localStorage.getItem('user');
    if (user) {
      let parseUser = JSON.parse(user);
      let userId = parseUser.userName;
      this.setState({
        user: parseUser
      })
      
    }
  }
  componentDidMount() {
    this.getUserPosts();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route element={<Navigationbar/>}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Signup />} />
              <Route path="profile" element={<Profile />} />
              <Route path="posts" element={<Posts user={this.state?.user} />} />
              <Route path="create" element={<AddPost />} />
              <Route path="/" element={<Posts user={this.state?.user}  />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }

}

export default App;
