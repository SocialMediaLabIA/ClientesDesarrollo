import SideBar from "../SideBar/SideBar";
import ListAdmin from "./ListUsers/ListAdmin";

export default function Users() {
  return (
    <div className="flex w-full h-full  ">
      <SideBar />
      <div className="flex w-full h-full  flex-col gap-5 p-10">
        <div className=" bg-[#282828] p-5 rounded-lg">
          <p>Panel de administrador</p>
        </div>
        <ListAdmin />
      </div>
    </div>
  );
}
