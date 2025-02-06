import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldEmail } from "../../component/field-email/FieldEmail";
import { FieldPassword } from "../../component/field-password/FieldPassword";
import "./index.css";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors({
        ...errors,
      });
    }
    if (name === "password") {
      setErrors({ ...errors, password: value.length < 8 });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const isFormValid =
    !errors.email &&
    !errors.password &&
    formData.email &&
    formData.password.length >= 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("User registered:", formData);
      navigate("/task-to-do");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>

        <FieldEmail
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FieldPassword
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          title="Password:"
        />

        <button
          type="submit"
          className={isFormValid ? "form-btn-valid" : "form-btn-disabled"}
          disabled={!isFormValid}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
