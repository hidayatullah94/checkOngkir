import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const Register = () => {
  let nav = useNavigate();

  const handleRegister  = (event)=>{
    event.preventDefault();
    console.log("OK")
    let myForm = document.getElementById('myform');
    const nama = (event.target[0].value);
    const email = (event.target[1].value);
    const password = (event.target[2].value);
    let checked = false;
    let inputChecked = document.querySelector('.check');
    console.log(inputChecked)
    console.log(myForm)
    console.log(email)
    console.log(password) 
    console.log(nama)

    if(!nama){
      swal("Sorry", "Wajib isi nama dengan benar", "warning")
    }else if(!email){
      swal('Sorry', "Wajib isi email dengan benar", "warning")
    }else if(!password){
      swal("Soory", "Wajib isi password dengan benar", "warning")
    }else if(password.length <= 5){
      swal("Sorry", "Password yang di input minimal 5 Karakter", "warning")
    }else if(inputChecked.checked){
      checked = true
      const user = {
        nama,
        email,
        password
      }
      console.log(user)
      let users = JSON.parse(localStorage.getItem('users'));
      console.log(users);

      if(users === null){
        let userArray =[];
        localStorage.setItem('users', JSON.stringify(userArray))
        localStorage.setItem('userName', user.nama)
        let userLocalStorage = JSON.parse(localStorage.getItem('users'));
        userLocalStorage.push(user);
        localStorage.setItem('users', JSON.stringify(userLocalStorage));
        nav(`/login`);
        swal("Hore, Data Berhasil di simpan", "You clicked the button!", "success");
        myForm.reset();
        (event.target[0].focus());
      }else{
        localStorage.setItem('userName', user.nama)
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
        nav(`/login`);
        swal('Hore, Data Berhasil di simpan', "You clicked the button!", "success");
        myForm.reset()
        (event.target[0].focus())
      }
    }else{
      swal("Opps", "Wajib di ceklis", "warning")
    }
    return checked;
  }
  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <form className="register-form" onSubmit={handleRegister} id="myform">
          <label htmlFor="name">Masukkan Nama Anda</label>
          <input type="text" placeholder="Masukkan Nama Anda" id="name" />
          <label htmlFor="email">Masukkan Username</label>
          <input type="email" placeholder="Masukkan Username Anda" id="email" />
          <label htmlFor="password">Masukkan Password</label>
          <input type="password" placeholder="Masukkan Password Anda" id="password" />
          <input type="checkbox" id="exampleCheck1" className="check" />
          <label htmlFor="exampleCheck1">Remember me</label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
