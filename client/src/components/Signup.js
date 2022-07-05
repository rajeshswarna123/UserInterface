import { Link } from "react-router-dom";
import { fetchData } from "../Extensions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: '', 
    password: '',
    password2: ''
  });

  const { userName, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/register",
      {
        userName,
        password
      },
      "POST")
      .then((data) => {
        if (!data.message) {
          storeInlocalStorage();
          console.log(data)
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
      <div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              name='userName'
              onChange={onChange}
              value={userName}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name='password'
              onChange={onChange}
              value={password}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password2" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              name='password2'
              onChange={onChange}
              value={password2}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </div>
      <button className="secondary">
        <Link to="/login">
          LogIn
        </Link>
      </button>
    </div>
  );
}

export default Signup;