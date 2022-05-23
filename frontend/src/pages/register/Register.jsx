import "./register.css";
import { Link } from "react-router-dom";

const Login = () => {
  const error = "";
  return (
    <div className='register'>
      <Link to='/login' class='auth__btn'>
        Sign In
      </Link>
      <section
        className='side'
        style={{ backgroundImage: "url('images/bk.png')" }}
      >
        <Link to='/'>
          <p
            style={{
              position: "absolute",
              top: "8rem",
              left: "7rem",
              fontWeight: 600,
            }}
            className='p-lg'
          >
            &larr; Back
          </p>
        </Link>
        <img src='images/img.svg' alt='' />
      </section>

      <section className='main'>
        <div className='register-container'>
          <p className='title'>Create Account</p>

          <div className='separator'></div>

          <form className='register-form'>
            <div className='form-control'>
              <input type='text' placeholder='Name' />
              {error && (
                <p
                  style={{
                    fontSize: "5",
                    color: "red",
                    textAlign: "left",
                    // marginTop: 5,
                    marginLeft: 30,
                  }}
                >
                  {error}
                </p>
              )}
              <i className='fas fa-user'></i>
            </div>
            <div className='form-control'>
              <input type='email' placeholder='Email' autocomplete='off' />
              {error && (
                <p
                  style={{
                    fontSize: "5",
                    color: "red",
                    textAlign: "left",
                    // marginTop: 5,
                    marginLeft: 30,
                  }}
                >
                  {error}
                </p>
              )}
              <i className='fas fa-envelope'></i>
            </div>
            <div className='form-control'>
              <input
                type='password'
                placeholder='Password'
                autocomplete='off'
              />
              {!error && (
                <p
                  style={{
                    fontSize: "5",
                    color: "red",
                    textAlign: "left",
                    marginTop: 5,
                    marginLeft: 30,
                  }}
                >
                  Something Went Wrong
                </p>
              )}
              <i className='fas fa-lock'></i>
            </div>
            <div className='form-control'>
              <input type='password' placeholder='Confirm Password' />
              {error && (
                <p
                  style={{
                    fontSize: "5",
                    color: "red",
                    textAlign: "left",
                    marginTop: 5,
                    marginLeft: 30,
                  }}
                >
                  {error}
                </p>
              )}
              <i className='fas fa-lock'></i>
            </div>

            <Link to='/'>
              <p>Forgot Password ?</p>{" "}
            </Link>

            <div style={{ display: "flex", alignItems: "center" }}>
              <button className='submit'>Sign Up</button>
              <p style={{ marginLeft: "1rem", marginRight: "1rem" }}>OR</p>
              <button
                className='google__signin'
                style={{ alignSelf: "center" }}
              >
                <i className='fab fa-google'></i>
              </button>
              <button
                className='google__signin'
                style={{ alignSelf: "center" }}
              >
                <i className='fab fa-facebook'></i>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
