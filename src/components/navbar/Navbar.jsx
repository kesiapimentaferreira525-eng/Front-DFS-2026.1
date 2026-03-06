import { UserCircle, LogOut, Plus } from "lucide-react"; // Ícones adicionais
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="" />
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/offers">Ofertas</Link>
        </li>
        {token && (
          <li>
            <Link to="/offers/create" className="create-offer-link">
              <Plus size={16} />
              Criar Oferta
            </Link>
          </li>
        )}
      </ul>

      <div className="navbar-login">
        {token ? (
          <div className="user-menu">
            <Link to="/dashboard" className="user-button">
              <UserCircle size={24} />
              <span>Meu Perfil</span>
            </Link>
            <button onClick={handleLogout} className="logout-button">
              <LogOut size={20} />
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-button">
            <UserCircle size={24} />
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
