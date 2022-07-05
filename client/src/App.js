import './App.css';
import Login from "./components/Login.js";
import Navigationbar from './components/Navbar.js';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Redirect,
} from 'react-router-dom';
import Signup from './components/Signup.js';
import Posts from './components/Posts';
import Profile from './components/Profile';
import { Component } from 'react';
import { fetchData } from './Extensions';

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
      posts: []
    }
  }
  getUserPosts = () => {
    let user = localStorage.getItem('user');
    if (user) {
      let parseUser = JSON.parse(user);
      let userId = parseUser.id;
      fetchData("/post/getUserPosts",
        {
          userId,
        },
        "POST")
        .then((data) => {
          if (!data) {
            this.setState({
              posts : data
            })
            console.log(data)
          }
        })
        .catch((error) => {
          console.log(error)
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
            <Route element={<Navigationbar />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Signup />} />
              <Route path="profile" element={<Profile />} />
              <Route path="posts" element={<Posts posts={posts} />} />
              <Route path="/" element={<Posts posts={posts} />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }

}

export default App;
