import { useState } from "react";
import { useDispatch } from "react-redux";
import createUser from "../../../../../redux/User/ActionUser/createUser";

export default function CreateUserForm() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    role: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    isActive: true,
    access: false,
    progress: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const crearUsuario = () => {
    dispatch(createUser(user));
  };

  return (
    <div className="flex items-center justify-center w flex-col gap-5">
      <div className="flex flex-col items-start justify-center gap-1">
        <label className="font-bold ml-2 text-white">Rol:</label>
        <select
          name="role"
          value={user.role}
          onChange={handleChange}
          className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
        >
          <option value="" disabled className="bg-[#282828] text-white">
            Seleccione un Rol
          </option>
          <option value="client" className="bg-[#282828] text-white">
            Cliente
          </option>
          <option value="admin" className="bg-[#282828] text-white">
            Administrador
          </option>
        </select>
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <label className="font-bold ml-2 text-white">Nombre:</label>
        <input
          className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Ingrese el nombre..."
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <label className="font-bold ml-2 text-white">Apellido:</label>
        <input
          className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
          type="text"
          name="lastname"
          value={user.lastname}
          onChange={handleChange}
          placeholder="Ingrese el apellido..."
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <label className="font-bold ml-2 text-white">Email:</label>
        <input
          className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Ingrese el email..."
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <label className="font-bold ml-2 text-white">Contraseña:</label>
        <input
          className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Ingrese el password..."
        />
      </div>
      <button
        className="bg-[#07a1f8] rounded-2xl py-2 px-5 text-white font-bold"
        onClick={() => crearUsuario()}
      >
        Crear Usuario
      </button>
    </div>
  );
}
