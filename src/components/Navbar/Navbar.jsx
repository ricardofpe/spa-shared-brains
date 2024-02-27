import logo from "../../assets/shared-brains-logo.png";
import "./Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search">
        <i className="bi bi-search"></i>
          <input placeholder="Pesquise por um título" type="text" />
        </div>

<div className="container-logo">
        <img src={logo} alt="Logo Shared Brains" />
       
        </div>
<div className="container-button">
        <button>
            Entrar
        </button>
        </div>
      </nav>
    </>
  );
}
