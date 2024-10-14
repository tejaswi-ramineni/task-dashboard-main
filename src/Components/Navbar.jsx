import TaskIcon from "./assets/task-icon.png";
import Profile from "./assets/profile.jpg"
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Switch from "./Switch";
import { IoMdNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <div className="flex items-center gap-4" style={{ height: "5%" }}>
      <div className="flex items-center gap-3 h-full" style={{width:"20%"}}>
        <img src={TaskIcon} alt="logo" className="rounded-2xl" style={{height:"100%"}} />
        <h1 className="text-Black font-medium">Tasker</h1>
      </div>
      <div className="h-full bg-Gray rounded-3xl flex items-center p-2" style={{width:"60%"}}>
        <IoSearchOutline className="h-full rounded-l-3xl"/>
        <input id="sea" type="text" placeholder="Search" className="p-2 outline-none h-full text-Black bg-Gray rounded-r-3xl" style={{width:"90%"}}/>
      </div>
      <div className="flex items-center gap-2" style={{height:"80%",width:"20%"}}>
        <IoMdNotificationsOutline className="h-full bg-Gray rounded-2xl text-2xl  cursor-pointer p-1"/>
        <IoSettingsOutline className="h-full bg-Gray rounded-2xl text-2xl cursor-pointer p-1"/>
        <Switch/>
        <div className="wrapper h-full flex items-center gap-1">
            <div className="img-box h-full">
                <img src={Profile} alt="" className="h-full rounded-2xl cursor-pointer"/>
            </div>
            <div className="flex flex-col text-xs">
                <p className="text-Black font-semibold" >Darina</p>
                <p className="text-Black">UI/UX Designer</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
