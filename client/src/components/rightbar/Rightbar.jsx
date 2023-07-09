/* eslint-disable react-hooks/exhaustive-deps */
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online';
import { useEffect, useState } from 'react';
import axios from "axios"
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Add,Remove } from '@material-ui/icons';
function Rightbar({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const[ friends,setFriends]=useState([])
  const {user:CurrentUser ,dispatch} =useContext(AuthContext)
  const [followed,setFollowed]=useState(CurrentUser.followings.includes(user?.id))

  useEffect(() => {
    if (CurrentUser && CurrentUser.followings && user && user.id) {
      setFollowed(CurrentUser.followings.includes(user?.id));
    }
  }, [CurrentUser, user?.id]);
  
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/user/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
      getFriends();
    
  },[user]);

  const HandleClick = async ()=>{
      try {
        if(followed){
          await axios.put("/user/"+user._id+"/unfollow",{
            userId:CurrentUser._id,
          })
          dispatch({type:"UNFOLLOW",payload:user._id})
        }else{
          await axios.put("/user/"+user._id+"/follow",{
            userId:CurrentUser._id,
          })
          dispatch({type:"FOLLOW",payload:user._id})
        }
        
      } catch (error) {
        console.log(error);
      }
      setFollowed(!followed)
  }
  
    const HomeRightbar = () =>{
        return (
            <>
            <div className="birthdayContainer">
                <span className="birthdayText">
                <img  className="birthdayImg"src="/assets/gift.png" alt="" />
                <b>Minh Duy</b> và <b>3 người bạn khác</b> <b>có sinh nhật</b>
                </span>
            </div>
            <img className='rightbarAd' src="/assets/person/Image4.png" alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u => (
                    <Online key={u.id} user={u} />
                ))}
            </ul>
            </>
        )
    }
    const ProfileRightbar = () =>{

        return (
            <>
            {user.username !== CurrentUser.username &&(
              <button className="rightBarFollowButton" onClick={HandleClick}>
                {followed ? "UnFollow" : "Follow"}
                {followed ? <Remove /> : <Add />}
              </button>
            )}
              <h4 className="rightbarTitle">User information</h4>
              <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">City:</span>
                  <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">From:</span>
                  <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                  <span className="rightbarInfoKey">Relationship:</span>
                  <span className="rightbarInfoValue">
                    {user.relationship === 1 
                    ? "Single" 
                    : user.relationship === 1 
                    ? "HCM" 
                    : "-"}
                    </span>
                </div>
              </div>
              <h4 className="rightbarTitle">User friends</h4>
              <div className="rightbarFollowings">{friends.map(friend=>(
               <Link 
               to={"/profile/"+ friend.username} 
               key={friend.id} 
               style={{textDecoration:"none"}}
               >
                  <div className="rightbarFollowing">
                    <img 
                    src={
                      friend.profilePicture 
                      ? PF+friend.profilePicture 
                      : PF+"person/NoAvt.jpeg"
                    } 
                    alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">{friend.username}</span>
                  </div>
               </Link>
              ))}
              </div>
            </>
          );
    }
    return (  
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}

export default Rightbar;