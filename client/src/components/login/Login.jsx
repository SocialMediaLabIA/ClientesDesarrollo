import React, { useEffect, useState } from "react";
import logo from "../../assets/smllogo.webp";
import { useDispatch, useSelector } from "react-redux";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { validatePassword, validateEmail } from "./validate";
import { motion } from "framer-motion";
import { getUserByLogin } from "../../redux/User/ActionUser/getUserByLogin";
import { setAccessUser } from "../../redux/User/ActionUser/setAccessUser";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showView, setShowView] = useState(false);
  const [formSubmited, setFormSubmited] = useState(false);
  const [errors, setErrors] = useState({
    password: "Por favor, ingresa una contraseña",
    email: "Por favor, ingresa un correo electrónico",
    active: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (formSubmited && user !== null) {
      console.log("login");
      dispatch(setAccessUser(email, password)).then(() => {
        user && user.role === "admin"
          ? navigate(`/admin?id=${user._id}`)
          : user &&
            user.role === "client" &&
            navigate(`/roadmap?id=${user._id}`);
      });
    } else if (formSubmited) {
      setFormSubmited(false);
      LoginError();
      console.log("incorrecto");
    }
  }, [user, formSubmited]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({ ...errors, active: true });
    const emailError = validateEmail(email, setErrors, errors);
    const passError = validatePassword(password, setErrors, errors);
    if (!emailError && !passError) {
      dispatch(getUserByLogin(email, password));
      setFormSubmited(true);
    }
  };
  const LoginError = () => {
    toast.error(`Email y/o Password Incorrecta `, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:justify-center justify-end md:items-center items-start bg-black h-screen w-screen font-poppins">
        <form
          className="md:w-6/12 w-full mt-14 md:mt-0"
          onSubmit={handleSubmit}
        >
          <motion.div
            className="flex flex-col px-20 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
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
          </motion.div>
          <motion.div
            className="flex flex-col px-20 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.9, ease: "easeInOut" }}
          >
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
          </motion.div>
          <motion.div
            className="flex flex-col items-center gap-y-4 mt-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <button
              className="bg-[#c905faad] rounded-md py-2 px-10 text-white font-bold"
              type="submit"
            >
              Ingresar
            </button>
          </motion.div>
        </form>
        <motion.hr
          className="border-4 border-[#8F00FF]  mx-4 rounded-2xl md:h-5/6 opacity-0 md:opacity-100 h-0 hidden md:block"
          initial={{ height: 0 }}
          animate={{ height: "93%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="flex md:w-6/12 w-full md:h-full items-center justify-center mt-24 md:mt-0">
          <motion.img
            src={logo}
            alt="logo"
            className="md:w-[80%] w-[200px] "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
