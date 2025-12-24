import { useState } from "react";
import "../../assets/page-auth.css";
import api from "../../config";
import { useNavigate } from "react-router-dom";
type User = {
    email: string;
    password_hash: string;
}
function Login() {
    const [user, setUser] = useState<User>({email: "", password_hash: ""});
    const redirect = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
       
        api.post("login", user)
        .then((res) => { 
            console.log(res.data);
            if(res.data.error){
                alert(res.data.error);
            }else{
               
                localStorage.setItem("bearer_token", res.data.token);
               
                redirect("/dashboard");
            }
        })
        .catch((err) => {
            console.error(err);
        })
    }
  return (
    <>
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                  </span>
                  <span className="app-brand-text demo text-body fw-bolder">alibrary</span>
                </a>
              </div>
              <h4 className="mb-2">Welcome to LIBRARY! 👋</h4>
              <p className="mb-4">Please sign-in to your account and start the adventure</p>

              <form className="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email or Username</label>
                  <input type="text" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="form-control" name="email-username" placeholder="nayeem@example.com" autoFocus />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">Password</label>
                    <a href="auth-htmlForgot-password-basic.html">
                      <small>htmlForgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input type="password" value={user.password_hash} onChange={(e) => setUser({...user, password_hash: e.target.value})} className="form-control" name="password" placeholder="pass123" aria-describedby="password" />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                <a href="auth-register-basic.html">
                  <span>Create an account</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login   