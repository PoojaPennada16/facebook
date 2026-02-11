export default function Hero() {
  return (
    <div className="container">
      <div className="logo">facebook</div>

      <div className="login-box">
        <h2>Log in to Facebook</h2>

        <input type="text" placeholder="Email address or phone number" />
        <input type="password" placeholder="Password" />

        <button>Log in</button>

        <div className="links">
          <a href="#">Forgotten account?</a>
          <a href="#">Sign up for Facebook</a>
        </div>
      </div>
    </div>
  );
}




