import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./index.css";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  showPassword: boolean;
  togglePasswordVisibility: () => void;
  title: string;
};

export function FieldPassword({
  value,
  onChange,
  error,
  showPassword,
  togglePasswordVisibility,
  title,
}: PasswordInputProps) {
  return (
    <div>
      <label htmlFor="password">{title}</label>
      <div className="password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Enter your password"
          value={value}
          onChange={onChange}
          aria-invalid={error}
        />
        <span
          className="password-toggle-icon"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      {error && (
        <p className="error-message">Password must be at least 8 characters</p>
      )}
    </div>
  );
}
