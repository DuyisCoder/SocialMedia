import {Search,Person,Notifications,Chat} from '@material-ui/icons'
import './topbar.css'
function Topbar() {
    return ( 
        <div className="topbarContainer">
            <div className="topbarLeft">
               <span className="logo">Facebook</span> 
            </div>
           <div className='topbarCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon' />
                    <input placeholder='Search for friend' className="searchInput" />
                </div>
           </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                    <img src="/assets/img/Image (1).png" alt="" className="topbarImg" />
            </div>
        </div> 
        );
}

export default Topbar;