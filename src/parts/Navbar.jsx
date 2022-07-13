import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "../assets/css/Navbar.css"

const Navbar = () => {
    let nav = useNavigate();
    const userLogin = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    const authLogout = (event) =>{
        event.preventDefault();
        console.log("Logout");
        localStorage.removeItem('userEmail');
        swal('Yess', 'Berhasil Logout', 'success')
        nav(`/login`)
    }
    if(userLogin){
        return(
            <div>
                <nav>
                    <div className="brand">
                        <h4>Hii {userName}</h4>
                    </div>
                    <ul>
                        <li><Link to="/">Dasboard</Link></li>
                        <li><button type="submit" onClick={authLogout}>Logout</button></li>
                    </ul>
                </nav>
            </div>
        )
    }else{
        return(
            <div>
                <nav>
                    <ul>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;