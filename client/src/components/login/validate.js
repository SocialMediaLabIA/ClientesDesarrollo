export const validatePassword = (password, setErrors, errors) => {
  const numberRegex = /[0-9]/;
  if (!password || password === " ") {
    setErrors({
      ...errors,
      password: "Por favor, ingresa una contraseña",
    });
    return "Por favor, ingresa una contraseña";
  }
  if (!numberRegex.test(password)) {
    setErrors({
      ...errors,
      password: "La contraseña debe contener al menos un número",
    });
    return "La contraseña debe contener al menos  un número";
  }
  if (password.length < 8 || password.length > 16) {
    setErrors({
      ...errors,
      password: "La contraseña debe tener entre 8 y 16 caracteres",
    });
    return "La contraseña debe tener entre 8 y 16 caracteres";
  }
  setErrors({
    ...errors,
    password: "",
  });
  return "";
};
