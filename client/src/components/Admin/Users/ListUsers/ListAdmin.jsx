import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../../redux/User/ActionUser/getAllUser";

export default function ListAdmin() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const formatearFecha = (fechaISO) => {
    const fechaObj = new Date(fechaISO);
    const dia = fechaObj.getDate().toString().padStart(2, "0");
    const mes = (fechaObj.getMonth() + 1).toString().padStart(2, "0");
    const anio = fechaObj.getFullYear();
    // const horas = fechaObj.getHours().toString().padStart(2, "0");
    // const minutos = fechaObj.getMinutes().toString().padStart(2, "0");

    return `${dia}-${mes}-${anio}`;
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-start w-full h-full bg-[#282828] rounded-lg">
      <div className="flex gap-5 w-[95%] my-2 py-5 text-[1.5rem] bg-[#222222] text-center rounded-lg">
        <div className="ml-5 w-60 min-w-[80px]">
          <p className="flex text-center items-center justify-center">Nombre</p>
        </div>
        <div className="w-60 min-w-[80px]">
          <p className="flex text-center items-center justify-center">
            Apellido
          </p>
        </div>
        <div className="min-w-[224px]">
          <p className="flex text-center items-center justify-center">Email</p>
        </div>
        <div className="w-60 min-w-[70px]">
          <p className="flex text-center items-center justify-center">Estado</p>
        </div>
        <div className="w-60 min-w-[80px]">
          <p className="flex text-center items-center justify-center">
            Progreso
          </p>
        </div>
        <div className="w-60 min-w-[50px]">
          <p className="flex text-center items-center justify-center">Rol</p>
        </div>
        <div className="mr-5 w-60  min-w-[100px]">
          <p className="flex text-center items-center justify-center">Creado</p>
        </div>
      </div>
      {users &&
        users.map((item, index) => (
          <div
            className="flex gap-5 py-2 w-[95%] text-center justify-center items-center bg-[#222222] rounded-lg  text-[1.2rem]"
            key={index}
          >
            <div className=" text-center ml-5 w-60 min-w-[80px]">
              <p className="flex text-center items-center justify-center">
                {item.name}
              </p>
            </div>
            <div className="w-60 min-w-[80px]">
              <p className="flex text-center items-center justify-center">
                {item.lastname}
              </p>
            </div>
            <div className="w-60 min-w-[224px]">
              <p className="flex text-center items-center justify-center">
                {item.email}
              </p>
            </div>
            <div className="w-60 min-w-[70px]">
              {item.isActive ? (
                <p className="flex text-center items-center justify-center">
                  Activo
                </p>
              ) : (
                <p className="flex text-center items-center justify-center">
                  Inactivo
                </p>
              )}
            </div>
            <div className="w-60 min-w-[80px]">
              <p className="flex text-center items-center justify-center">
                {item.progress}
              </p>
            </div>
            <div className="w-60 min-w-[50px]">
              <p className="flex text-center items-center justify-center">
                {item.role}
              </p>
            </div>
            <div className="mr-5 w-60 min-w-[100px]">
              <p className="flex text-center items-center justify-center">
                {formatearFecha(item.createdAt)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
