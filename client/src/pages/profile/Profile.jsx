import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbars/Topbar";
import Feed from "../../components/feed/Feed";
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'

export default function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const [user,setUser]=useState({})
  
  const username= useParams().username // lấy ra tên username
  useEffect(() => {
      const fetchUser = async () => {
          const res = await axios.get(`/user?username=${username}`);
          setUser(res.data)
      };
      
      fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture ? PF+user.coverPicture : PF+"person/NoBg.png"}
                alt=""
              />
              
              <img
                className="profileUserImg"
                src={user.profilePicture ? PF+user.profilePicture : PF+"person/NoAvt.jpeg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}