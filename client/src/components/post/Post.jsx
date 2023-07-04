import './post.css'
import { MoreVert } from '@material-ui/icons';
// import { Users } from '../../dummyData';
import { useState,useEffect } from 'react';
import { format, render, cancel, register } from 'timeago.js';
 import {Link} from "react-router-dom"
import axios from 'axios';
function Post({post}) {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;

    const [like, setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked]=useState(false)
    const [user,setUser]=useState({})
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?userId=${post.userId}`);
            setUser(res.data)
        };
        fetchUser();
    }, [post.userId]);

    const likeHandler = () =>{
        setLike(isLiked ? like -1 : like +1)
        setIsLiked(!isLiked)
    }
   

    return (<div>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                           <Link to={`profile/${user.username}`}> 
                            <img  className="postProfileImg"src={user.profilePicture || PF+"img/NoAvt.jpeg"}alt="" />
                            </Link>
                            <span className="postUsername">{user.username}</span>
                            <span className="postDate">{format(post.createdAt)}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img className='postImg' src={PF+post.img} alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className='likeIcon' src={`${PF}like.png`}alt="" onClick={likeHandler} />
                            <img className='likeIcon' src={`${PF}heart.png`} alt="" onClick={likeHandler}/>
                            <span className="postLikeCounter">{like}people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">{post.comment}comments</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>  );
}

export default Post