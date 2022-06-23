import React from "react";
import LoginForm from "../containers/LoginForm";

export default function LoginPage() {
  return (
    <div className="login__page">
      <h1>Войдите в учётную запись</h1>
      <LoginForm />
    </div>
  );
}
