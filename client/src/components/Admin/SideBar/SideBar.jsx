import logo from "../../../assets/smllogo.png";
import { IoPeople, IoBanSharp, IoLogOutOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { editUserById } from "../../../redux/User/ActionUser/editUserById";
import { useNavigate } from "react-router-dom";

function SideBar({ handleSidebar, userById, idParams }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    const body = {
      access: false,
    };
    dispatch(editUserById(idParams, body)).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="bg-[#282828] flex flex-col h-full rounded-lg w-[210px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-between h-full mt-4"
      >
        <div className="mt-8">
          <img
            className="opacity-80 w-44 cursor-pointer"
            src={logo}
            alt="Logo"
            onClick={() => handleSidebar("admin")}
          />
        </div>
        <div className="flex flex-col items-center mt-5 justify-center cursor-pointer">
          <div className="flex w-fit">
            <ul className="flex items-center justify-center flex-col gap-5">
              <li
                className="flex gap-2 px-3 text-[18px] cursor-pointer  w-full h-10 rounded-lg items-center justify-center bg-[#383838] hover:bg-[#484848]"
                onClick={() => handleSidebar("usuario")}
              >
                <div className="text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </div>
                <div>Usuarios</div>
              </li>
              <li
                className="flex gap-2 px-3 text-[18px] cursor-pointer  w-full h-10 rounded-lg items-center justify-center bg-[#383838] hover:bg-[#484848]"
                onClick={() => handleSidebar("usuarioBanned")}
              >
                <div className="text-lg">
                  <IoBanSharp className="text-[#e0dddd]" />
                </div>
                <div>Baneados</div>
              </li>
              <li
                className="flex gap-2 px-3 text-[18px] cursor-pointer  w-full h-10 rounded-lg items-center justify-center bg-[#383838] hover:bg-[#484848]"
                onClick={() => handleSidebar("crearUsuario")}
              >
                <div className="text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </div>
                <div>Crear Usuarios</div>
              </li>
              <li
                className="flex gap-2 px-3 text-[18px] cursor-pointer  w-full h-10 rounded-lg items-center justify-center bg-[#383838] hover:bg-[#484848]"
                onClick={() => handleSidebar("roadmap")}
              >
                <div className="text-lg">
                  <IoPeople className="text-[#e0dddd]" />
                </div>
                <div>Road Map</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center mb-2">
          <div className="flex flex-col gap-5 items-center justify-center ">
            <div className="flex flex-col justify-center items-center bg-[#383838] w-full py-5 px-5 rounded-lg">
              <div className="w-16 h-16">
                <img className="rounded-full" src={logo} alt="avatar" />
              </div>
              <div className="flex flex-col gap-1 mb-2 font-semibold">
                <p className="text-[0.7rem] text-white">{userById.email}</p>
                <p className="text-[1rem] text-white text-center capitalize ">
                  {userById.name} {userById.lastname}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-10 mt-5 font-semibold">
              <IoLogOutOutline
                onClick={() => logout()}
                className="w-12 h-12 cursor-pointer rounded-full pt-2 pb-2 pl-3 pr-1  hover:bg-[#484848]"
              />
              <p className="text-[0.7rem] mt-2">Version 0.0.0</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SideBar;
