import "./conversations.css"
function Conversation() {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER 
    return (
        <div className="conversation">
            <img src={PF+"/person/Image1.png"}className="conversationImg" alt="" />
            <span className="conversationName">Minh Duy</span>
        </div>
      );
}

export default Conversation;