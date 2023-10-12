import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";
import { useNavigate } from "react-router-dom";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //login(userData)

    navigate("/home");
  };

  return (
    <form className={style.Form} onSubmit={handleSubmit}>
      <label htmlFor="email" className={style.email}>
        Email
      </label>
      <input
        className={style.inputs}
        type="email"
        value={userData.email}
        name="email"
        onChange={handleChange}
        placeholder="example@soyhenry.com"
      />
      {errors.email && <p className={style.errors}>{errors.email}</p>}

      <label htmlFor="password" className={style.password}>
        Password
      </label>
      <input
        className={style.inputs}
        type="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
        placeholder="°°°°°°"
      />

      <p className={style.errors}>{errors.password}</p>

      <button className={style.Boton}>Login</button>
    </form>
  );
};
export default Form;
