import './rightbar.css'
function Rightbar() {
    return (  
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <span className="birthdayText">
                    <img  className="birthdayImg"src="/assets/gift.png" alt="" />
                        <b>Minh Duy</b> và <b>3 người bạn khác</b> <b>có sinh nhật</b>
                    </span>
                </div>
                <img className='rightbarAd' src="/assets/img/Image (4).png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src="/assets/img/Image (4).png" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Cater</span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src="/assets/img/Image (4).png" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Cater</span>
                    </li>
                    <li className="rightBarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className='rightbarProfileImg' src="/assets/img/Image (4).png" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Cater</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;