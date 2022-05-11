import './Register.css';
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
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

function Register() {
  let navigate = useNavigate();

  const [data, setData] = useState([

    {
      id: 1,
      name: "Dedicated"
    },
    {
      id: 2,
      name: "Shared"
    },
    {
      id: 3,
      name: "OnPrem"
    }
  ])

  const [dataType, setDataType] = useState([
    {
      id: 1,
      name: "FAQ"
    },
    {
      id: 2,
      name: "Transactional"
    }
  ])

  const [channels, setChannels] = useState([
    {
      id: 1,
      name: "WhatsApp"
    },
    {
      id: 2,
      name: "Telegram"
    },
    {
      id: 3,
      name: "Slack"
    },
    {
      id: 4,
      name: "Coster"
    },
    {
      id: 5,
      name: "Custom"
    },
  ])


  const [selectedSg, setSelectedSg] = useState("")
  const [picName, setPicName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [emailU, setEmailU] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [selectedChannels, setSelectedChannels] = useState("")
  const [nameChannel, setNameChannel] = useState("")
  const [password, setPassword] = useState("")
  const [pageData, setPageData] = useState("Register")
  const recaptchaRef = React.createRef();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const doSubmit = () => {
    //let's assume there is an HTML input text box with id 'user_captcha_input' to get user input
    let user_captcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(user_captcha) == true) {
      alert('Captcha Matched');
      loadCaptchaEnginge(6);
      document.getElementById('user_captcha_input').value = "";

      console.log("Pic Name", picName)
      console.log("Service Group", selectedSg)
      console.log("Company name", companyName)
      console.log("Username", emailU)
      console.log("serviceType", serviceType)
      console.log("channles", selectedChannels)
      console.log("nama channel", nameChannel)
      console.log("password", password)

      navigate("/Dashboard")
    }


    else {
      alert('Captcha Salah');
      document.getElementById('user_captcha_input').value = "";
    }
  };

  const doSubmit2 = () => {
    navigate("/")
  }

  return (
    <div className="Section">
      <div className="card rounded-none shadow-xl m-auto bg-pink">
        <div className="card w-4/6 shadow-xl m-auto my-10">
          <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row ">
              <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
                <div className="card-body ">
                  <h2 className="card-title ">Sign Up</h2>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PIC Name</span>
                    </label>
                    <input onChange={(text) => setPicName(text.target.value)} type="text" placeholder="PIC Name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Company Name</span>
                    </label>
                    <input onChange={(text) => setCompanyName(text.target.value)} type="text" placeholder="Company Name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Username</span>
                    </label>
                    <input type="text" onChange={(text) => setEmailU(text.target.value)} placeholder="Username" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input onChange={(text) => setPassword(text.target.value)} type="password" placeholder="Password" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <div clasName="form-control">
                      <label className="label">
                        <span className="label-text">Service Group</span>
                      </label>
                      <select onChange={(text) => setSelectedSg(text.target.value)} className="input input-bordered w-72">
                        {
                          data.map((item, index) => {
                            return (
                              <option value={item.name}>{item.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>

                  {
                    selectedSg != "Shared" ? (
                      <div className="form-control">
                        <div clasName="form-control">
                          <label className="label">
                            <span className="label-text">Service Type</span>
                          </label>
                          <select onChange={(text) => setServiceType(text.target.value)} className="input input-bordered w-72">
                            {
                              dataType.map((item, index) => {
                                return (
                                  <option value={item.name}>{item.name}</option>
                                )
                              })
                            }
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )
                  }


                  <div className="form-control">
                    <div clasName="form-control">
                      <label className="label">
                        <span className="label-text">Channels</span>
                      </label>
                      {
                        channels.map((item, index) => {
                          return (
                            <div className="form-check">
                              <input onChange={(text) => setSelectedChannels(text.target.value)} value={item.name} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:bg-slate-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label className="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                                {item.name}
                              </label>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>

                  {
                    selectedChannels == "Custom" ? (
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Channel Name</span>
                        </label>
                        <input type="text" placeholder="Channel Name" className="input input-bordered" />
                      </div>
                    ) : (
                      <div></div>
                    )
                  }

                  <div className="form-group">
                    <div className="col mt-3">
                      <LoadCanvasTemplate />
                    </div>
                    <div className="col mt-3">
                      <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    <button onClick={() => doSubmit()} className="btn">Register</button>
                  </div>
                  <label className="label">Already have an account?
                  <button onClick={() => doSubmit2()} class="btn text-black btn-link">Sign in</button>
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

export default Register;
