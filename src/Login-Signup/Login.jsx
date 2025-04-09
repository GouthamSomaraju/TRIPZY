import React from 'react'

const Login = () => {
  return (
    <div style={{backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxvZ2luJTIwcGFnZXxlbnwwfHx8fDE2OTI3NTY5MjM&ixlib=rb-4.0.3&q=80&w=1080')`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}} className="d-flex justify-content-center align-items-center">
      <h1>Login</h1>
      <div><img src="" alt="" /></div>
      <form action="">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
        </div>
        <div className="mb-3">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="mb-3">
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
        <div className="mb-3">
          <p>Or login with:</p>
          <button type="button" className="btn btn-secondary">Google</button>
          <button type="button" className="btn btn-secondary">Facebook</button>
            <button type="button" className="btn btn-secondary">Twitter</button>
        </div>
        <div className="mb-3">
          <p>By logging in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
        </div>
        <div className="mb-3">
          <p>Need help? <a href="#">Contact us</a></p>
        </div>
        <div className="mb-3">
          <p>Login as <a href="#">Admin</a></p>
        </div>
        <div className="mb-3">
          <p>Login as <a href="#">User</a></p>
        </div>
        <div className="mb-3">
          <p>Login as <a href="#">Guest</a></p>
        </div>
        <div className="mb-3">
          <p>Login as <a href="#">Member</a></p>
        </div>
      </form>

    </div>
  )
}

export default Login
