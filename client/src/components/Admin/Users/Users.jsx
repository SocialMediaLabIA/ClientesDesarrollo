import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import ListAdmin from "./ListUsers/ListAdmin";
import CreateUsers from "./CreateUsers/CreateUsers";
import Panel from "./Panel/Panel";
import ListAdminBanned from "./ListUsersBanned/ListAdminBanned";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../redux/User/ActionUser/getUserById";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import RoadMapAdm from "../RoadMapGeneral/RoadMapAdm";

export default function Users() {
  const [sidebar, setSidebar] = useState("admin");
  const dispatch = useDispatch();

  const { userById } = useSelector((state) => state);
  const { role, isActive, access } = userById;

  const { search } = useLocation();
  const idParams = search.slice(4);

  const handleSidebar = (panel) => {
    setSidebar(panel);
  };

  useEffect(() => {
    dispatch(getUserById(idParams));
  }, [dispatch, idParams]);

  return (
    <>
      {role === "admin" && access === true && isActive === true ? (
        <div className="flex w-full h-full font-poppins">
          {sidebar !== "roadmap" && (
            <SideBar
              handleSidebar={handleSidebar}
              idParams={idParams}
              userById={userById}
            />
          )}
          <div className="flex w-full h-full  flex-col gap-5">
            {sidebar === "admin" && <Panel userById={userById} />}
            {sidebar === "usuario" && <ListAdmin />}
            {sidebar === "usuarioBanned" && <ListAdminBanned />}
            {sidebar === "crearUsuario" && <CreateUsers />}
            {sidebar === "roadmap" && (
              <RoadMapAdm handleSidebar={handleSidebar} />
            )}
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full font-poppins">
          <div className="flex w-full h-full  flex-col gap-5 p-10">
            <div className="flex flex-col gap-2 items-center justify-center w-full h-full bg-[#282828] ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-center justify-center gap-5"
              >
                <div>
                  <h2 className="text-[2rem] font-semibold">
                    Acceso no autorizado
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
