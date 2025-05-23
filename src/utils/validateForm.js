  export const validateForm = ({name, email, message}) => {

    const errors = {};

    if(!name.trim()) {
      errors.name = "Por favor ingrese un nombre."
    } else if (name.length < 3) {
      errors.name = "El nombre debe tener al menos tres caracteres."
    }

    if (!email.trim()) {
      errors.email = "Por favor ingrese un correo electrónico."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "El correo electrónico no es válido."
    }

    if (!message.trim()) {
        errors.message = "Por favor ingrese un mensaje."
    }

    return errors;
  }