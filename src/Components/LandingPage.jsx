import React from "react";
import { Link } from "react-router-dom";
import '../Styles/LandingPage.css';
const LandingPage= ()=>{
    return(
        <div className="landingpage">
            <Link to="/adminlogin">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYlEMhSDYoWJA5fMpwinbTSmHoeU8YdZRCQ&s" alt="im" />
                <h2>Admin</h2>
            </Link>
            <Link to="/userlogin">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLJOzTAW4sn22WgYxepEVozqjZWtyqLGJPQ&s" alt="im" />
            <h2>User</h2>
            </Link>
        </div>
    );
}
export default LandingPage;