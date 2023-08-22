export const validatePassword = (password, setErrors, errors) => {
  const numberRegex = /[0-9]/;
  if (!password || password === " ") {
    setErrors({
      ...errors,
      password: "Por favor, ingresa una contraseña",
      active: true,
    });
    return "Por favor, ingresa una contraseña";
  }
  if (!numberRegex.test(password)) {
    setErrors({
      ...errors,
      password: "La contraseña debe contener al menos un número",
      active: true,
    });
    return "La contraseña debe contener al menos  un número";
  }
  if (password.length < 8 || password.length > 16) {
    setErrors({
      ...errors,
      password: "La contraseña debe tener entre 8 y 16 caracteres",
      active: true,
    });
    return "La contraseña debe tener entre 8 y 16 caracteres";
  }
  setErrors({
    ...errors,
    password: "",
    active: true,
  });
  return "";
};

export const validateEmail = (email, setErrors, errors) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!email || email === " ") {
    setErrors({
      ...errors,
      email: "Por favor, ingresa un correo electrónico",
      active: true,
    });
    return "Por favor, ingresa un correo electrónico";
  }
  if (!emailRegex.test(email)) {
    setErrors({
      ...errors,
      email: "Por favor, ingresa un correo electrónico válido",
      active: true,
    });
    return "Por favor, ingresa un correo electrónico válido";
  }
  setErrors({ ...errors, email: "", active: true });
  return "";
};
