import "./chatOnline.css"

function ChatOnline() {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER 
    return ( 
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src={PF+"/person/Image1.png"} alt="" />
                    <div className="chatOnlineBadge">
                    </div>
                </div>
                <span className="chatOnlineName">Minh Duy</span>
            </div>

        </div>
     );
}

export default ChatOnline;