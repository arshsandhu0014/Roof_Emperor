import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const error = "error occurred";
  return (
    <div className='login'>
      <Link to='/register' class='auth__btn'>
        Sign Up
      </Link>
      <section class='side' style={{ backgroundImage: "url('images/bk.png')" }}>
        <Link to='/'>
          <p
            style={{
              position: "absolute",
              top: "15rem",
              left: "9rem",
              fontWeight: 600,
            }}
            className='p-lg'
          >
            &larr; Back
          </p>
        </Link>
        <img src='images/img.svg' alt='' />
      </section>

      <section class='main'>
        <div class='login-container'>
          <p class='title'>Welcome back</p>
          <div class='separator'></div>
          <p class='welcome-message'>
            Please, provide login credential to proceed and have access to all
            our services
          </p>

          <form class='login-form'>
            <div class='form-control'>
              <input type='text' placeholder='Username' />
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
              <i class='fas fa-user'></i>
            </div>
            <div class='form-control'>
              <input type='password' placeholder='Password' />
              <i class='fas fa-lock'></i>
            </div>

            <button class='submit'>Login</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
