import "./messenger.css"
import Topbar from "../../components/topbars/Topbar"
import Conversations from "../../components/conversations/Conversations"
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
function Messengers() {
    return (
       <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input className="chatMenuInput" placeholder="Search for friends..." />
                        <Conversations />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="Write something..."></textarea>
                            <button className="chatSubmitBottom">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>  
                </div>
            </div>
       </>
      );
}

export default Messengers;