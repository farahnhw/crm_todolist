import './Auth.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Image2 from "../../images/Login2.svg";
import { ReactSession } from 'react-client-session';

function Auth() {

  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [akun, setAkun] = useState([
    {
      username: "delvia",
      password: "delvia"
    },
    {
      username: "farah",
      password: "farah"
    }
  ])

  useEffect(() => {
  }, [])

  const doSubmit = () => {

    var data = akun.find(data => data.username === username && data.password === password);

    if(data) {
      ReactSession.setStoreType("localStorage");
      ReactSession.set("username", username);
      navigate("/dashboard")
    } else {
      alert("username atau password salah")
    }
    //navigate("/dashboard")
  };

  return (
    <div className="Section">
      <div className="card rounded-none shadow-xl m-auto bg-pink">
        <div className="card w-4/6 shadow-xl m-auto my-10">
          <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row ">
              <img src={Image2} className="max-w-xs rounded-lg" />
              <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                <div className="card-body ">
                  <h2 className="card-title ">Welcome back</h2>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input onChange={(item) => setUsername(item.target.value)} type="text" placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input onChange={(item) => setPassword(item.target.value)} type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn" onClick={() => doSubmit()}>Login</button>
                  </div>
                  <label className="label">Don't have an account yet?
                    <button onClick={() => navigate("/Register")} class="btn text-black btn-link">Sign Up</button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
