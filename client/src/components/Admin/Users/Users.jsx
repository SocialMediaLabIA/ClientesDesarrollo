import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import ListAdmin from "./ListUsers/ListAdmin";
import CreateUsers from "./CreateUsers/CreateUsers";
import Panel from "./Panel/Panel";
import ListAdminBanned from "./ListUsersBanned/ListAdminBanned";

export default function Users() {
  const [sidebar, setSidebar] = useState("admin");

  const handleSidebar = (panel) => {
    setSidebar(panel);
  };

  return (
    <div className="flex w-full h-full font-poppins">
      <SideBar handleSidebar={handleSidebar} />
      <div className="flex w-full h-full  flex-col gap-5 p-10">
        <div className=" text-[1.5rem] font-semibold bg-[#282828] p-5 rounded-lg">
          <p>Panel de administrador</p>
        </div>
        {sidebar === "admin" && <Panel />}
        {sidebar === "usuario" && <ListAdmin />}
        {sidebar === "usuarioBanned" && <ListAdminBanned />}
        {sidebar === "crearUsuario" && <CreateUsers />}
      </div>
    </div>
  );
}
