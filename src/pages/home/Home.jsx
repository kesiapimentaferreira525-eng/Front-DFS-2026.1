import { ArrowRight, MessageSquare, Repeat, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  // Dados fictícios baseados na proposta de troca de conhecimento
  const ofertasConhecimento = [
    {
      id: 1,
      titulo: "Lógica de Programação",
      autor: "Carlos Silva",
      busca: "Quero aprender Inglês",
      desc: "Ensino o básico de algoritmos e JavaScript para iniciantes.",
      tag: "Tecnologia",
    },
    {
      id: 2,
      titulo: "Design de Logotipos",
      autor: "Ana Souza",
      busca: "Quero aprender Violão",
      desc: "Posso te ensinar a criar marcas usando o Illustrator ou Canva.",
      tag: "Artes",
    },
    {
      id: 3,
      titulo: "Culinária Vegetariana",
      autor: "Marcos Lima",
      busca: "Quero ajuda em Excel",
      desc: "Troco receitas e técnicas de preparo de marmitas saudáveis.",
      tag: "Gastronomia",
    },
  ];

  return (
    <main className="">
      <section className="hero">
        <div className="hero-content">
          <div className="badge">Comunidade Colaborativa</div>
          <h1>
            Transforme o que você sabe em <span>oportunidade para outros.</span>
          </h1>

          <div className="hero-text-container">
            <p className="hero-subtitle">
              Muitas pessoas querem aprender, mas não podem pagar. Conecte-se
              com quem quer ensinar e ofereça seu conhecimento em troca.
            </p>
            <p className="hero-cta-text">
              <strong>Sem dinheiro, apenas troca de experiências.</strong>
            </p>
          </div>

          <div className="hero-buttons">
            <Link to={"/offers"} className="btn-primary">
              Explorar Ofertas
            </Link>
            <Link to={"/register-knowledge"} className="btn-secondary">
              Oferecer Conhecimento
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <Users color="#3b82f6" />
            <span>+200 Membros</span>
          </div>
          <div className="stat-card">
            <Repeat color="#3b82f6" />
            <span>Trocas Ativas</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE OFERTAS */}
      <section id="ofertas" className="courses-section">
        <div className="section-header">
          <h2>Conhecimentos Disponíveis</h2>
          <p>Encontre alguém para ensinar você hoje</p>
        </div>

        <div className="courses-grid">
          {ofertasConhecimento.map((oferta) => (
            <div key={oferta.id} className="course-card">
              <div className="course-badge">{oferta.tag}</div>
              <div className="course-image">
                {/* Placeholder para ícone ou foto do autor */}
                <Search size={48} color="#cbd5e1" />
              </div>
              <div className="course-info">
                <h3>{oferta.titulo}</h3>
                <p className="author-name">
                  Por: <strong>{oferta.autor}</strong>
                </p>
                <p className="description">{oferta.desc}</p>

                <div className="exchange-box">
                  <Repeat size={14} />
                  <span>{oferta.busca}</span>
                </div>

                <button className="btn-enroll">
                  Tenho interesse <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO POR QUE NÓS? */}
      <section className="features-strip">
        <div className="feature">
          <Users size={30} color="#3b82f6" />
          <div>
            <h4>Comunidade Real</h4>
            <p>Conecte-se com pessoas da sua região ou online.</p>
          </div>
        </div>
        <div className="feature">
          <MessageSquare size={30} color="#3b82f6" />
          <div>
            <h4>Troca Direta</h4>
            <p>Combine o horário e o formato direto com o parceiro.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
