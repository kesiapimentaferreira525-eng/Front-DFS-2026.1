import { useState } from "react";
import { registerUser } from "../services/ApiService";
import {
  FaAlignLeft,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica de campos
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.description.trim()) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, insira um e-mail válido!");
      return;
    }

    // Validação de telefone (apenas números)
    if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ""))) {
      alert("Por favor, insira um telefone válido (10 ou 11 dígitos)!");
      return;
    }

    try {
      // Chamada à API usando ApiService
      const response = await registerUser(formData);
      
      // Se chegou aqui com status 200/201, foi sucesso
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      
      // Tratamento específico de erros
      if (error.response?.status === 400) {
        alert(error.response.data?.message || "Dados inválidos. Verifique os campos.");
      } else if (error.response?.status === 409) {
        alert("Este e-mail já está cadastrado!");
      } else if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao realizar cadastro. Tente novamente.");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-header">
          <FaUserPlus className="register-icon" />
          <h2>Criar Conta</h2>
          <p>Grupo 10 - Bootcamp Atlântico Avanti</p>
        </div>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label>
              <FaUser /> Nome
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ex: José"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <FaEnvelope /> E-mail
            </label>
            <input
              type="email"
              name="email"
              placeholder="jose@jose.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <FaPhone /> Telefone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="81983777777"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>
              <FaAlignLeft /> Descrição
            </label>
            <textarea
              name="description"
              placeholder="Fale um pouco sobre você..."
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
            />
          </div>

          <button type="submit" className="register-btn">
            Cadastrar
          </button>
        </form>

        <div className="register-footer">
          <p>
            Já possui uma conta?{" "}
            <Link to="/login" className="login-link">
              Faça Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;