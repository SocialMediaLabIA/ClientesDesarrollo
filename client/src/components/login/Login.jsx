import React, { useState } from "react";
import logo from "../../assets/smllogo.webp";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { validatePassword, validateEmail } from "./validate";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showView, setShowView] = useState(false);
  const [errors, setErrors] = useState({
    password: "Por favor, ingresa una contraseña",
    email: "Por favor, ingresa un correo electrónico",
    active: false,
  });
  const handleChangeEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail, setErrors, errors);
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, setErrors, errors);
  };
  const handlePasswordView = () => {
    setShowView(!showView);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({ ...errors, active: true });
    const emailError = validateEmail(email, setErrors, errors);
    const passError = validatePassword(password, setErrors, errors);
    if (!emailError && !passError) {
      console.log("login");
    } else {
      console.log("logout");
    }
  };
  return (
    <div className="flex justify-center items-center bg-black h-screen w-screen">
      {" "}
      <form className="w-6/12" onSubmit={handleSubmit}>
        <div className="flex flex-col px-20 mb-6">
          <label className="font-bold ml-2 text-white mb-2 ">Email:</label>
          <input
            className="rounded-md bg-[#D9D9D9] h-10 pl-5 text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25 "
            type="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="example@example.com"
          />
          <span className="text-red-400 text-[12px] text-center h-5">
            {errors.active ? errors.email : " "}
          </span>
        </div>
        <div className="flex flex-col px-20 mb-20">
          <label className="font-bold ml-2 text-white">Contraseña:</label>
          <div className="relative rounded-md bg-[#D9D9D9] h-10 justify-between items-center text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-25">
            <input
              className="rounded-md bg-[#D9D9D9] h-10 pl-5 w-full text-white text-opacity-100 placeholder:text-white placeholder:text-opacity-75 bg-opacity-0"
              type={showView === false ? "password" : "text"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Ingresar Contraseña"
            />
            {showView === false ? (
              <IoEyeSharp
                className="pr-2 text-[2rem] h-10 absolute right-1 top-0"
                onClick={handlePasswordView}
              />
            ) : (
              <IoEyeOffSharp
                className="pr-2 text-[2rem] h-10 absolute right-1 top-0"
                onClick={handlePasswordView}
              />
            )}
          </div>
          <span className="text-red-400 text-[12px] text-center h-5">
            {errors.active ? errors.password : " "}
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-4 mt-4">
          <button
            className="bg-[#07a1f8] rounded-2xl py-2 px-5 text-white font-bold"
            type="submit"
          >
            Ingresar
          </button>
        </div>
      </form>
      <hr className="border-4 border-[#8F00FF] h-5/6 w-0 mx-4  rounded-2xl" />
      <div className="flex w-6/12 h-full items-center justify-center">
        <img src={logo} alt="logo" className="w-[700px] h-[700px]" />
      </div>
    </div>
  );
}
