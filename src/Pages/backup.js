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


function Auth() {

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
    // loadCaptchaEnginge(6);
  }, [])

  const doSubmit = () => {
    navigate("/dashboard")
    //let's assume there is an HTML input text box with id 'user_captcha_input' to get user input
    // let user_captcha = document.getElementById('user_captcha_input').value;

    // if (validateCaptcha(user_captcha) == true) {
    //   alert('Captcha Matched');
    //   loadCaptchaEnginge(6);
    //   document.getElementById('user_captcha_input').value = "";

    //   console.log("Pic Name", picName)
    //   console.log("Service Group", selectedSg)
    //   console.log("Company name", companyName)
    //   console.log("Username", emailU)
    //   console.log("serviceType", serviceType)
    //   console.log("channles", selectedChannels)
    //   console.log("nama channel", nameChannel)
    //   console.log("password", password)
    // }

    // else {
    //   alert('Captcha Salah');
    //   document.getElementById('user_captcha_input').value = "";
    // }
  };


  return (
    <div className="Parentbox"> {
        pageData == "Register" ? (
          <div className="card">
            <h1>Register</h1>

            <div className='form'>
              <div className='contentTitle'>
                <p className='text'>PIC Name</p>
              </div>
              <div className='contentform'>
                <input onChange={(text) => setPicName(text.target.value)} className='formData'></input>
              </div>
            </div>

            <div className='form'>
              <div className='contentTitle'>
                <p>Company Name</p>
              </div>
              <div className='contentform'>
                <input onChange={(text) => setCompanyName(text.target.value)} className='formData'></input>
              </div>
            </div>

            <div className='form'>
              <div className='contentTitle'>
                <p>Username</p>
              </div>
              <div className='contentform'>
                <input onChange={(text) => setEmailU(text.target.value)} className='formData'></input>
              </div>
            </div>

            <div className='form'>
              <div className='contentTitle'>
                <p>Password</p>
              </div>
              <div className='contentform'>
                <input type={"password"} onChange={(text) => setPassword(text.target.value)} className='formData'></input>
              </div>
            </div>

            <div className='form'>
              <div className='contentTitle'>
                <p>Service Group</p>
              </div>
              <div className='contentform'>
                <select onChange={(text) => setSelectedSg(text.target.value)} className='dropdown'>
                  {
                    data.map((item, index) => {
                      return (
                        <option value={item.value}>{item.name}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>

            {
              selectedSg != "Shared" ? (
                <div className='form'>
                  <div className='contentTitle'>
                    <p>Service Type</p>
                  </div>
                  <div className='contentform'>
                    <select onChange={(text) => setServiceType(text.target.value)} className='dropdown'>
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

            <div className='form'>
              <div className='contentTitle'>
                <p>Channels</p>
              </div>
              <div className='contentform2'>
                {
                  channels.map((item, index) => {
                    return (
                      <>
                        <input type="radio" id="html" name="fav_language" onChange={(text) => setSelectedChannels(text.target.value)} value={item.name} />
                        <label for="html">{item.name}</label><br />
                      </>

                    )
                  })
                }

              </div>
            </div>

            {
              selectedChannels == "Custom" ? (
                <div className='form'>
                  <div className='contentTitle'>
                    <p>Channel Name</p>
                  </div>
                  <div className='contentform'>
                    <input onChange={(text) => setNameChannel(text.target.value)} className='formData'></input>
                  </div>
                </div>
              ) : (<div></div>)
            }

            {/* <div className="form-group">
              <div className="col mt-3">
                <LoadCanvasTemplate />
              </div>

              <div className="col mt-3">
                <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
              </div>

              <div className="col mt-3">
                <div><button className='button' onClick={() => doSubmit()}>Submit</button></div>
              </div>
            </div> */}
            
            <div className="col mt-3">
                <div><button className='button' onClick={() => doSubmit()}>Submit</button></div>
              </div>

            <div onClick={() => setPageData("Login")} class="footer">
              <p><strong>Already have an account? </strong><a href="#"> Login</a></p>
            </div>


          </div>
        ) : (
          <div className="card2">
            <h1>Login</h1>

            <div className='form'>
              <div className='contentTitle'>
                <p>Username</p>
              </div>
              <div className='contentform'>
                <input onChange={(text) => setEmailU(text.target.value)} className='formData'></input>
              </div>
            </div>

            <div className='form'>
              <div className='contentTitle'>
                <p>Password</p>
              </div>
              <div className='contentform'>
                <input type={"password"} onChange={(text) => setPassword(text.target.value)} className='formData'></input>
              </div>
            </div>

          <div onClick={() => setPageData("Register")} class="footer2">
           <p><strong>Don't have an account? </strong><a href="#">Register</a></p>
          </div>
          </div>
        )
      }

    </div>
  );
}

export default Auth;
