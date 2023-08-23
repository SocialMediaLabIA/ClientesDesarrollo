import { Link } from "react-router-dom";
import logo from "../../../assets/smllogo.png";
import {
  //   IoStatsChart,
  //   IoSettingsSharp,
  //   IoGrid,
  IoPeople,
  //   IoExitOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

function SideBar() {
  return (
    <div className="bg-[#282828] flex flex-col h-full w-[190px]">
      <div className="flex flex-col items-center justify-between h-full mt-4">
        <div className="flex flex-col items-center mt-5 justify-center">
          <Link to={"/protected"}>
            <img className="opacity-80 w-44" src={logo} alt="Logo" />
          </Link>
          <div className="flex w-fit mt-20">
            <ul className="flex flex-col gap-2">
              <li className="flex gap-2 items-center text-[18px]">
                <div className="text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </div>
                <div>
                  <Link
                    to="/clevel"
                    className="text-[#e0dddd] hover:text-white"
                  >
                    Usuarios
                  </Link>
                </div>
              </li>
              <li className="flex gap-2 items-center text-[18px]">
                <div className="text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </div>
                <div>
                  <Link
                    to="/clevel"
                    className="text-[#e0dddd] hover:text-white"
                  >
                    Crear Usuarios
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center mb-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col gap-5 items-center justify-center"
          >
            <div className="w-16 h-16">
              <img className="rounded-full" src={logo} alt="avatar" />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <p className="text-[.7rem] text-white">
                Voeffray.jonathan@gmail.com
              </p>
              <p className="text-[.7rem] text-white text-center">
                Voeffray jonathan
              </p>
            </div>
            <p className="text-[0.7rem] mt-2">Version 0.0.58</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
