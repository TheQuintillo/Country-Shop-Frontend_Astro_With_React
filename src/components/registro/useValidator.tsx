import { useState } from "react";
import Joi from "joi";
function useValidator() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [error, setError] = useState<string>("");

  const validator = Joi.object({
    // any.messages({}) For custom message
    name: Joi.string().min(3).max(30).required().messages({
      "string.alphanum": "Solo caracteres alfanuméricos",
      "string.min": "El nombre debe tener al menos {#limit} caracteres",
      "string.max": "El nombre no puede tener más de {#limit} caracteres",
      "any.required": "El nombre es obligatorio",
    }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().pattern(
      new RegExp("^[a-zA-Z0-9.@$!%*#?&(){}]{3,30}$")
    ),
    repeat_password: Joi.ref("password"),
    repeat_email: Joi.ref("email"),
  });
  const createUser = (e: any) => {
    e.preventDefault();
    let formDataname = {
      name: name,
      email: email,
      password: password,
      repeat_email: repeatEmail,
      repeat_password: repeatPassword,
    };
    const { error } = validator.validate(formDataname, { abortEarly: true });
    if (!error) {
      e.currentTarget.action = "http://localhost:4000/register";
      e.currentTarget.submit();
    } else {
      setError(error.message);
    }
  };

  return {
    error,
    setEmail,
    setName,
    setPassword,
    setRepeatPassword,
    setRepeatEmail,
    createUser,
  };
}

export default useValidator;
