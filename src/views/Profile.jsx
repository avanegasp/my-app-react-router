import React from "react";
import { useNavigate } from "react-router-dom";

function Profile(){
    const navigate = useNavigate();

    function goHome(){
        navigate("/")
    }

    return(
    <>
        <p>
           Bienvenida a tu perfil
        </p>

        <button onClick={goHome}>ir hacia Home</button>
    </>
    )

}

export default Profile;