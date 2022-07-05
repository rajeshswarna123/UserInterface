import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchData } from "../Extensions";
const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    storeInlocalStorage();
    fetchData("/user/login",
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        if (!data.message) {
          console.log(data)
          navigate("/profile")
        }
      })
      .catch((error) => {
        console.log(error)
      })

  }
  const storeInlocalStorage = () => {
    let copyUser = {...user};
    copyUser.password = ''
    localStorage.setItem('user', JSON.stringify(copyUser));
    navigate("/profile")
  }

  return (
    <div className="col-6">
      <img src="" className="logo" alt="Posts App" />
      <form className="form" onSubmit={onSubmit}>
        <div className="input-group">
          <input type="email" name="email" onChange={onChange} placeholder="Enter email" />
        </div>
        <div className="input-group">
          <input type="password" name="password" onChange={onChange} placeholder="Password" />
        </div>
        <button className="primary" onSubmit={onSubmit}>LogIn</button>
      </form>
      <button className="secondary">
        <Link to="/register">
          SignUp
        </Link>
      </button>
    </div>
  );
}

export default Login;