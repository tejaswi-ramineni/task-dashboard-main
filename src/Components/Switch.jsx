import classNames from "classnames";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // FontAwesome icons

function Switch() {
  const [isSelect, setisSelect] = useState(false);
  
  return (
    <div
      className={classNames("flex w-16 h-full bg-Gray rounded-full transition-all duration-300 cursor-pointer", {
        "bg-gray-400": isSelect,
      })}
      onClick={() => 
      {
        setisSelect((prev)=>!prev)
      }
      }
    >
      <span
        className={classNames("h-full w-8 bg-Blue rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center", {
          "ml-8 bg-White": isSelect,
        })}
      >
        {isSelect ?<FaMoon className="text-Black" />:<FaSun className="text-White" />}
      </span>
    </div>
  );
}

export default Switch;
