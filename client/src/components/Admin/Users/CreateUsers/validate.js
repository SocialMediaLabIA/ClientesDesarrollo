export const validateRole = (role, errors, setErrors) => {
  if (!role) {
    setErrors({ role: "Por favor, seleccione un rol" });
    return "Por favor, seleccione un rol";
  }
  setErrors({ role: "" });
  return "";
};

export const validateName = (name, errors, setErrors) => {
  if (!name.trim()) {
    setErrors({ name: "Por favor, ingrese un nombre" });
    return "Por favor, ingrese un nombre";
  }

  setErrors({ name: "" });
  return "";
};

export const validateLastname = (lastname, errors, setErrors) => {
  if (!lastname.trim()) {
    setErrors({ lastname: "Por favor, ingrese un apellido" });
    return "Por favor, ingrese un apellido";
  }
  setErrors({ lastname: "" });
  return "";
};

export const validateInstagram = (instagram, errors, setErrors) => {
  const urlRegex =
    /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/[a-zA-Z0-9_\.]+\/?$/;

  if (!instagram || instagram.trim() === "") {
    setErrors({
      instagram: "Por favor, ingrese la URL de la página de Instagram",
    });
    return "Por favor, ingrese la URL de la página de Instagram";
  }
  if (!urlRegex.test(instagram)) {
    setErrors({
      instagram: "Por favor, ingrese una URL válida de la página de Instagram",
    });
    return "Por favor, ingrese una URL válida de la página de Instagram";
  }
  setErrors({ instagram: "" });
  return "";
};

export const validateEmail = (email, errors, setErrors) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!email || email === " ") {
    setErrors({ email: "Por favor, ingrese un correo electrónico" });
    return "Por favor, ingrese un correo electrónico";
  }
  if (!emailRegex.test(email)) {
    setErrors({
      email: "Por favor, ingrese un correo electrónico válido",
    });
    return "Por favor, ingrese un correo electrónico válido";
  }
  setErrors({ email: "" });
  return "";
};

export const validatePassword = (password, errors, setErrors) => {
  const numberRegex = /[0-9]/;

  if (!password || password === " ") {
    setErrors({
      password: "Por favor, ingrese una contraseña",
    });
    return "Por favor, ingrese una contraseña";
  }
  if (!numberRegex.test(password)) {
    setErrors({
      password: "La contraseña debe contener al menos un número",
    });
    return "La contraseña debe contener al menos un número";
  }
  if (password.length < 8 || password.length > 16) {
    setErrors({
      password: "La contraseña debe tener entre 8 y 16 caracteres",
    });
    return "La contraseña debe tener entre 8 y 16 caracteres";
  }
  setErrors({ password: "" });
  return "";
};
