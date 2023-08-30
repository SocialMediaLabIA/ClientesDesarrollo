import { useState } from "react";
import { useDispatch } from "react-redux";
import createUser from "../../../../redux/User/ActionUser/createUser";
import {
  validateEmail,
  validateLastname,
  validateName,
  validatePassword,
  validateRole,
} from "./validate";

export default function CreateUserForm() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    role: "",
    name: "",
    lastname: "",
    instagram: "",
    email: "",
    password: "",
    isActive: true,
    access: false,
    progress: 0,
  });

  const [errors, setErrors] = useState({
    role: "",
    name: "",
    lastname: "",
    instagram: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    if (name === "role") {
      validateRole(value, errors, setErrors); // Use the current value
    } else if (name === "name") {
      validateName(value, errors, setErrors);
    } else if (name === "lastname") {
      validateLastname(value, errors, setErrors);
    } else if (name === "instagram") {
      validateEmail(value, errors, setErrors);
    } else if (name === "email") {
      validateEmail(value, errors, setErrors);
    } else if (name === "password") {
      validatePassword(value, errors, setErrors);
    }
  };

  const handleSubmit = () => {
    const roleError = validateRole(user.role, errors, setErrors);
    const nameError = validateName(user.name, errors, setErrors);
    const lastnameError = validateLastname(user.lastname, errors, setErrors);
    const emailError = validateEmail(user.email, errors, setErrors);
    const passwordError = validatePassword(user.password, errors, setErrors);

    if (
      roleError ||
      nameError ||
      lastnameError ||
      emailError ||
      passwordError
    ) {
      return;
    }

    dispatch(createUser(user));

    setUser({
      role: "",
      name: "",
      lastname: "",
      email: "",
      password: "",
      isActive: true,
      access: false,
      progress: 0,
    });
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
        <span className="text-red-400 text-[12px] mt-1">
          {errors.role && <>{errors.role}</>}
        </span>
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
        <span className="text-red-400 text-[12px] mt-1">
          {errors.name && <>{errors.name}</>}
        </span>
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
        <span className="text-red-400 text-[12px] mt-1">
          {errors.lastname && <>{errors.lastname}</>}
        </span>
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <label className="font-bold ml-2 text-white">Instagram:</label>
        <input
          className="rounded-md bg-[#D9D9D9] h-10 w-80 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25"
          type="text"
          name="instagram"
          value={user.instagram}
          onChange={handleChange}
          placeholder="Ingrese instagram..."
        />
        <span className="text-red-400 text-[12px] mt-1">
          {errors.email && <>{errors.email}</>}
        </span>
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
        <span className="text-red-400 text-[12px] mt-1">
          {errors.email && <>{errors.email}</>}
        </span>
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
        <span className="text-red-400 text-[12px] mt-1">
          {errors.password && <>{errors.password}</>}
        </span>
      </div>
      <button
        className="bg-[#6610A9] rounded-2xl py-2 px-10 text-white font-bold"
        onClick={() => {
          setErrors({
            role: "",
            name: "",
            lastname: "",
            email: "",
            password: "",
          });
          handleSubmit();
        }}
      >
        Crear Usuario
      </button>
    </div>
  );
}
