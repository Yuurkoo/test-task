import React from "react";
import "./index.css";

type EmailInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
};

export function FieldEmail({ value, onChange, error }: EmailInputProps) {
  return (
    <div className="field-email">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={value}
        onChange={onChange}
        aria-invalid={error}
      />
      {error && (
        <p className="error-message">Please enter a valid email address</p>
      )}
    </div>
  );
}
