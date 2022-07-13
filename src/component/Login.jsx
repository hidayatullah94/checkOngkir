import React from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router";

const Login = () => {
    let nav = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Yes')
        const email = (event.target[0].value)
        const password = (event.target[1].value)
        console.log(email);
        console.log(password);
        if(!email){
            swal('Soory', 'Wajib isi emailnya dengan benar', 'warning');
        }else if(!password){
            swal('Sorry', 'Password Tidak boleh kosong', 'warning')
        }else if(password.length <= 5){
            swal('Sorry', 'Paswword yang di isi minimal 5 charcter', 'warning');
        }else{
            const users = JSON.parse(localStorage.getItem('users'))
            users.forEach(user => {
                if(email === user.email){
                    if(password !== user.password){
                        swal('Maaf', 'Password anda salah', 'error');
                    }else{
                        localStorage.setItem('userEmail', user.email)
                        nav(`/`)
                        swal('Hore', 'Berhasil Login', 'success')
                    }
                }else if(email !== user.email && password !== user.password){
                    nav(`/register`);
                    swal('Maaf', 'Anda Harus Daftar Dulu', 'warning');
                }else{
                    event.target[0].value="";
                    event.target[1].value="";
                    swal('Maaf', 'Email Anda Salah', 'error');
                    event.target[0].focus();
                }
            });
        }
    }
    return(
        <div>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={handleLogin} id="myform">
                    <label htmlFor="email">Alamat Email</label>
                    <input type="email" placeholder="masukan password anda" id="email"/>
                    <label htmlFor="pass">Password</label>
                    <input type="password" placeholder="masukan alamat password anda" id="pass"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;