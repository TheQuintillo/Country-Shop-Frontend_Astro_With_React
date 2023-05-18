import { useState } from "react";
import Joi from "joi";
function useValidator() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");

  const validator = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
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
    const { error } = validator.validate(formDataname);
    if (!error) {
      e.currentTarget.action = "http://localhost:4000/register";
      e.currentTarget.submit();
    } else {
      console.log(error.message);
    }
  };

  return {
    setEmail,
    setName,
    setPassword,
    setRepeatPassword,
    setRepeatEmail,
    createUser,
  };
}

export default useValidator;
