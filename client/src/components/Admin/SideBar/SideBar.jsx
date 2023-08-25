import logo from "../../../assets/smllogo.png";
import { IoPeople, IoBanSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function SideBar({ handleSidebar }) {
  return (
    <div className="bg-[#282828] flex flex-col h-full px-5 rounded-lg w-[190px]">
      <div className="flex flex-col items-center justify-between h-full mt-4">
        <div className="flex flex-col items-center mt-5 justify-center">
          <img
            className="opacity-80 w-44"
            src={logo}
            alt="Logo"
            onClick={() => handleSidebar("admin")}
          />
          <div className="flex w-fit mt-20">
            <ul className="flex flex-col gap-2">
              <li
                className="flex gap-2 items-center text-[18px]"
                onClick={() => handleSidebar("usuario")}
              >
                <div className="text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </div>
                <div>Usuarios</div>
              </li>
              <li
                className="flex gap-2 items-center text-[18px]"
                onClick={() => handleSidebar("usuarioBanned")}
              >
                <div className="text-lg">
                  <IoBanSharp className="text-[#e0dddd]" />
                </div>
                <div>Baneados</div>
              </li>
              <li
                className="flex gap-2 items-center text-[18px]"
                onClick={() => handleSidebar("crearUsuario")}
              >
                <div className="text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </div>
                <div>Crear Usuarios</div>
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
