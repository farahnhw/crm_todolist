import './Dashboard.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import React, { useEffect, useState } from 'react';
// import Scrapper from './Scrapper';
import Calender from "../../images/calendar.svg"
import Home from "../../images/dashboard.svg"
import Chat from "../../images/chat.svg"
import Projects from "../../images/project.svg"
import { ReactSession } from 'react-client-session';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Calendar from 'react-calendar';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Web App', 'Mobile App', 'Desktop'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3,],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

function Dashboard() {

  useEffect(() => {
    const username = ReactSession.get("username");
    console.log("username", username)
    if (!username) {
      navigate("/")
    }

  })

  let navigate = useNavigate();
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="App">
        <div className="Navbar">
          <div className="Navbar-logo">
            <p><strong>.to do list</strong></p>
          </div>
          <div className="Navbar-menu" >
            <ul className="menu w-56 p-2 rounded-box mx-10" >
              <li>
                <p onClick={() => navigate("/dashboard")}>
                  <img width={25} height={25} src={Home} />
                  Dashboard
                </p>
              </li>
              <li>
                <p onClick={() => navigate("/Project")}>
                  <img width={25} height={25} src={Projects} />
                  Projects
                </p>
              </li>
              <li>
                <p onClick={() => navigate("/Chat")}>
                  <img width={25} height={25} src={Chat} />
                  Chat
                </p>
              </li>
              <li>
                <p onClick={() => navigate("/Calendar")}>
                  <img width={25} height={25} src={Calender} />
                  Calendar
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="Header">
          <div className="navbar bg-base-100">
            <div className="flex-none">
              <div className="form-control mt-10 mr-44" >
                <input type="text" placeholder="Search" className="input input-bordered w-96"></input>
              </div>
              <p className="text-base mt-10 ml-80">Farah Nahwa</p>
              <div className="dropdown dropdown-end">
                <label tabindex="0" className="btn btn-ghost btn-circle avatar mt-10 ml-2">
                  <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li><a>Settings</a></li>
                  <li><a>Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 mx-24 ml-80 mb-10">
          <div className="grid grid-cols-3 gap-x-4 mt-12">

            <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
              <div className="flex mb-5">
                <p className="bg-[#FFEED6] text-[#FD795C] p-5 text-3xl font-bold rounded-xl ">5</p>
              </div>
              <p className="text-xl font-medium text-[#3F427B]">Deliver</p>
            </div>

            <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
              <div className="flex mb-5">
                <p className="bg-[#D6DFFF] text-[#3F427B] p-5 text-3xl font-bold rounded-xl ">7</p>
              </div>
              <p className="text-xl font-medium text-[#3F427B]">In Progress</p>
            </div>

            <div className=" card p-8 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
              <div className="flex mb-5">
                <p className="bg-[#FFD6E2] text-[#E82660] p-5 text-3xl font-bold rounded-xl ">25</p>
              </div>
              <p className="text-xl font-medium text-[#3F427B]">Completed</p>
            </div>

            <div class="card mt-6 p-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
              <Doughnut width={10} height={50} data={data} />
              <p className="text-xl font-medium text-[#3F427B]">Product</p>
            </div>
            <div class="card mt-6 p-10 bg-white drop-shadow-[0_35px_35px_rgba(168,170,225,0.15)]">
              <Calendar onChange={onChange} value={value} />
            </div>


          </div>
        </div>

      </div>


    </>
  );
}

export default Dashboard;