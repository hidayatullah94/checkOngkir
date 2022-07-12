import React from "react";

const Register = () => {
  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <form className="register-form">
          <label for="name">Masukkan Nama Anda</label>
          <input type="text" placeholder="Masukkan Nama Anda" id="name" />
          <label for="email">Masukkan Username</label>
          <input type="email" placeholder="Masukkan Username Anda" id="email" />
          <label type="password">Masukkan Password</label>
          <input type="password" placeholder="Masukkan Password Anda" id="password" />
          <label for="checkbox">Remember me</label>
          <input type="checkbox" id="checkbox" />
          <button type="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
