// import './App.css';
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function login (){
    alert('Iniciando sesión')
    navigate("/profile")
  }

  function back(){
    navigate(-1)
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Desde Home
        </p>
        <p>
            http://localhost:3000/
        </p>
        
        <button onClick={login}>Inicia sesión</button>
        <br />
        <div className="" style={{ marginTop: '15px' }}>
          <Link to="/about">
            About
          </Link>
        </div>
        <button style={{marginTop:'15px'}} onClick={back}>
          ir hacia atrás
        </button>

      </header>
    </div>
  );
}

export default Home;