import "./message.css"

function Message({own}) {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img src={PF+"/person/Image1.png"} alt="" className="messageImg" />
                <p className="messageText">Hi</p>
            </div>
            <div className="messageBottom">1 giờ trước</div>
        </div>
      );
}

export default Message;