// import './App.css';
import { Link } from "react-router-dom";

function About() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Desde About
          </p>
        
          <p>
            http://localhost:3000/about
          </p>
          <Link to="/">
            Home
          </Link>
        </header>
      </div>
    );
  }
  
  export default About;