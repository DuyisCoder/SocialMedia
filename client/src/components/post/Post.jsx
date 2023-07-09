/* eslint-disable no-unused-vars */
import './post.css'
import { MoreVert,ThumbUp,Chat,Share } from '@material-ui/icons';
// import { Users } from '../../dummyData';
import { useState,useEffect, useContext } from 'react';
import { format, render, cancel, register } from 'timeago.js';
 import {Link} from "react-router-dom"
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

function Post({post}) {
    
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const[showMenu,setShowMenu]=useState(false)
    const [like, setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked]=useState(false)
    const [user,setUser]=useState({})
    const {user:CurrentUser} = useContext(AuthContext)

    useEffect(()=>{
        setIsLiked(post.likes.includes(CurrentUser._id))
    },[CurrentUser._id,post.likes])

    // console.log("Người dùng",CurrentUser.userId);
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?userId=${post.userId}`);
            setUser(res.data)
        };
        fetchUser();
    }, [post.userId]);
    
    const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      if(post.userId === CurrentUser._id){
          const response = await axios.delete("/posts/"+post._id, {
            data: CurrentUser._id,
          });
          console.log(response.data);
      }
      else{
        console.log("Không có quyền xóa");
      }
      // Xử lý thành công
    } catch (error) {
      console.error(error);
      console.log("User hien tai:",CurrentUser._id);
      console.log("Id post",post._id);
      console.log("User đăng post",post.userId);

      // Xử lý lỗi
      
    } finally {
      setIsDeleting(false);
    }
  };


    const likeHandler = () =>{
        try {
            axios.put("/posts/"+post._id+"/like",{userId:CurrentUser._id})
            console.log("Người dùng",CurrentUser.userId);

        } catch (error) {
            
        }
        setLike(isLiked ? like -1 : like +1)
        setIsLiked(!isLiked)
    }
    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };
   
    return (
    <div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                        {/*`profile/${user.username}`*/}
                           <Link to={"/profile/"+user.username}> 
                 
                            <img  className="postProfileImg"src={user.profilePicture ? PF+user.profilePicture : PF+"person/NoAvt.jpeg"}alt="" />
                            </Link>
                            <span className="postUsername">{user.username}</span>
                            <span className="postDate">{format(post.createdAt)}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert onClick={toggleMenu} />
                            {showMenu && (
                                <div className="postMenu">
                                    <button className='postMenuBtn' onClick={handleDelete}
                                    disabled={isDeleting}
                                    >
                                        Delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img className="postImg" src={PF+post.img} alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className='likeIcon1'  src={`${PF}like.png`} alt="" />
                            <span className="postLikeCounter">  
                            {isLiked ? "Bạn" : ""}
                            {like > 1 ? ` và ${like - 1} người khác đã like` : like === 1 ? " đã like" : "0"}
                            </span>
                        </div>
                    </div>
                    <div className='btnContainer'>
                            <button className='btn1'onClick={likeHandler}style={{ color: isLiked ? 'blue' : 'gray' }} >
                                <ThumbUp  />
                                Thích
                            </button>
                            <button className='btn1'>
                                <Chat />
                                {post.comment}
                                Bình luận
                            </button>
                            <button className='btn1'>
                                <Share />
                                Chia sẻ
                            </button>
                    </div>
                    <div className="postComment">
                        <div className="postCommentChild">
                            <img className='postCommentImg' src={user.profilePicture ? PF+user.profilePicture : PF+"person/NoAvt.jpeg"} alt="" />
                            <input className='postInput' type="text" name="" id="" placeholder='Viết bình luận' />
                        </div>
                    </div>
                 </div>
           </div>
    </div>  );
}

export default Post

{/* <img className='likeIcon' src={`${PF}like.png`}alt="" onClick={likeHandler} />
<img className='likeIcon' src={`${PF}heart.png`} alt="" onClick={likeHandler}/> */}
   {/* <div className="postBottomRight">
                            <span className="postCommentText">{post.comment}comments</span>
                        </div> */}