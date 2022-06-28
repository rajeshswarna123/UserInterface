
  const Login = (props) => {
    return (
        <div>
        <img src="" className="logo" alt="Posts App" />
        <form className="form">
          <div className="input-group">
            <input type="email" name="email" placeholder="Enter email" />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="primary">LogIn</button>
        </form>
        <button className="secondary">
          SignUp
        </button>
      </div>
    );
  }
  
  export default Login;