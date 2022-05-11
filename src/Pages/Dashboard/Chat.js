import './Dashboard.css';
import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";
// import Scrapper from './Scrapper';
import Calender from "../../images/calendar.svg"
import Home from "../../images/dashboard.svg"
import Message from "../../images/chat.svg"
import Projects from "../../images/project.svg"
import { db } from '../../Config/Firebase'
import { collection, getDocs, addDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { ReactSession } from 'react-client-session';

function Chat() {
    const [chat, setChat] = useState([])
    const [userData, setUserData] = useState("")
    useEffect(() => {

        const username = ReactSession.get("username");
        setUserData(username)

        console.log("username", username)
        if (!username) {
            navigate("/")
        }


        db.collection('messages').orderBy("createdAt").onSnapshot((snapshot) => {
            setChat(snapshot.docs.map((doc) => doc.data()))
        })


    }, [])


    let navigate = useNavigate();

    const [textChat, setTextChat] = useState("");

    const handleSubmit = () => {
        console.log("haloo gan", textChat)

        setChat([
            ...chat,
            {
                id: 1,
                message: textChat,
            }
        ])

    }

    const sendMessage = async () => {
        const docRef = await addDoc(collection(db, "messages"), {
            text: textChat,
            username: userData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        console.log("Document written with ID: ", docRef.id);
        setTextChat("")
    }

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
                  <img width={25} height={25} src={Message} />
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
                            <p className="text-base mt-10 ml-48">Farah Nahwa</p>
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

                <div className="container ml-80 mt-8">
                    <div className="max-w-2xl border rounded">
                        <div>
                            <div className="w-full">
                                <div className="relative flex items-center p-3 border-b border-gray-300">
                                    <img className="object-cover w-10 h-10 rounded-full"
                                        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                                    <span className="block ml-2 font-bold text-gray-600">Emma</span>
                                    <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                                    </span>
                                </div>
                                <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
                                    <ul className="space-y-2">
                                        {
                                            chat.map((item, index) => {

                                                if (item.username == userData) {
                                                     return (
                                                         <li key={index} className="flex justify-end">
                                                             <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                                                 <span className="block">{item.text}</span>
                                                             </div>
                                                         </li>
                                                     )
                                                } else {
                                                    return (
                                                        <li key={index} className="flex justify-start">
                                                            <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                                                <span className="block">{item.text}</span>
                                                            </div>
                                                        </li>
                                                    )
                                                }


                                            })
                                        }

                                    </ul>
                                </div>
                                <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                        </svg>
                                    </button>

                                    <input value={textChat} onChange={(item) => setTextChat(item.target.value)} type="text" placeholder="Message"
                                        className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                        name="message" required />
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                    </button>
                                    <button onClick={() => sendMessage()} type="submit">
                                        <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;