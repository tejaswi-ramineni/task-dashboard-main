import { useState } from "react";
import { RiHome5Fill } from "react-icons/ri";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import Sidebutton from "./Sidebutton";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import profile from "./assets/profile.jpg";
import { IoIosSend } from "react-icons/io";
function Sidebar() {
  const [activeButton, setActiveButton] = useState("Dashboard");
    const [person, setperson] = useState(0);
    let perArray = ["Jessica" , "Laura" , "John" , "Robert"];
    let msg1 = ["Hi Darina" , "Hello Darina" , "Hey Darina" , "Hi Darina"];
    let msg2 = ["Hi Jessica" , "Hello Laura" , "Hi John" , "Hi Robert"];
    let t1 = ["12:07" , "1:05" , "2:05" , "4:05"];
    let t2 = ["12:08" , "1:05" , "2:06" , "4:06"];
  return (
    <div className="w-1/5 pr-5 flex flex-col gap-1">
      <h1 className="text-Black text-2xl" style={{ fontWeight: "500" }}>
        Welcome to the Tasker System!
      </h1>
      <div className="h-2/5 flex flex-col gap-3 mt-4">
        <Sidebutton
          Icon={RiHome5Fill}
          Title="Dashboard"
          isActive={activeButton === "Dashboard"}
          onClick={() => setActiveButton("Dashboard")}
        />
        <Sidebutton
          Icon={BiSolidMessageSquareDots}
          Title="Messages"
          isActive={activeButton === "Messages"}
          onClick={() => setActiveButton("Messages")}
        />
        <Sidebutton
          Icon={BsListTask}
          Title="My Tasks"
          isActive={activeButton === "My Tasks"}
          onClick={() => setActiveButton("My Tasks")}
        />
        <Sidebutton
          Icon={FaUserFriends}
          Title="Friends"
          isActive={activeButton === "Friends"}
          onClick={() => setActiveButton("Friends")}
        />
        <Sidebutton
          Icon={FaCalendarAlt}
          Title="Calendar"
          isActive={activeButton === "Calendar"}
          onClick={() => setActiveButton("Calendar")}
        />
      </div>
      <div
        className="imgs mt-2 flex items-center justify-between"
        style={{ height: "6%" }}
      >
        <img src={pic1} alt="p1" className="h-full rounded-full cursor-pointer" onClick={()=>{setperson(0)}}/>
        <img src={pic2} alt="p2" className="h-full rounded-full cursor-pointer" onClick={()=>{setperson(1)}}/>
        <img src={pic3} alt="p3" className="h-full rounded-full cursor-pointer" onClick={()=>{setperson(2)}}/>
        <img src={pic4} alt="p4" className="h-full rounded-full cursor-pointer" onClick={()=>{setperson(3)}}/>
      </div>
      <div className="flex bg-Gray rounded-2xl mt-1 p-4 flex-col gap-2" style={{height:"36.5%"}}>
        <div className="text-Black font-medium flex justify-between w-full border-b-2 h-1/5 items-center">
          <p>{perArray[person]}</p>
          <p className="text-xs">(PM)</p>
        </div>
        <div className="msgs h-3/5 text-Black flex flex-col items-start gap-2 text-sm">
            <div className="w-full flex items-end"><p className="bg-White rounded-full p-2">{msg1[person]}</p> <p className="text-Black" style={{fontSize:"0.5rem"}}>{t1[person]}</p></div>
            <div className="w-full flex justify-end items-end"><p className="bg-White rounded-full p-2">{msg2[person]}</p> <p className="text-Black" style={{fontSize:"0.5rem"}}>{t2[person]}</p></div>
        </div>
        <div className="h-1/5 rounded-full flex items-center justify-between">
          <img src={profile} alt="" className="h-full rounded-full mr-1" />
          <div className="h-full flex">
            <input
              type="text"
              id="txt"
              className="outline-none rounded-l-full h-full w-4/5"
            />
            <div className="h-full rounded-full bg-Black w-1/5">
              <IoIosSend className="text-White h-full w-full cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
