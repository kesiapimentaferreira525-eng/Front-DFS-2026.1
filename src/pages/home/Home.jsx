import { ArrowRight, Award, BookOpen, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const destaquesComunidade = [
    {
      id: 1,
      titulo: "Aulas de Programação Python",
      ofertante: "Maria Silva",
      nivel: "Intermediário",
      desc: "Compartilho minha experiência de 3 anos desenvolvendo aplicações web.",
      categoria: "Programação",
    },
    {
      id: 2,
      titulo: "Design Gráfico com Figma",
      ofertante: "João Santos",
      nivel: "Iniciante",
      desc: "Ajudo designers iniciantes a dominarem as ferramentas essenciais.",
      categoria: "Design",
    },
    {
      id: 3,
      titulo: "Inglês para Tecnologia",
      ofertante: "Ana Costa",
      nivel: "Avançado",
      desc: "Conversação técnica e vocabulário específico da área de TI.",
      categoria: "Idiomas",
    },
  ];

  return (
    <main className="">
      <section className="hero">
        <div className="hero-content">
          <span className="badge">🤝 Banco de Trocas de Conhecimento</span>
          <h1>
            Compartilhe e aprenda com a <span>comunidade.</span>
          </h1>
          <p>
            Conecte-se com pessoas dispostas a compartilhar conhecimento.
            Ofereça suas habilidades e aprenda com outros membros da comunidade.
          </p>
          <div className="hero-buttons">
            <Link to={"/offers"} className="btn-primary">
              Explorar Ofertas
            </Link>
            <Link to={"/register"} className="btn-secondary">
              Começar Agora
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <BookOpen color="#3b82f6" />
            <span>+200 Ofertas</span>
          </div>
          <div className="stat-card">
            <Award color="#3b82f6" />
            <span>Conhecimento Compartilhado</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE OFERTAS - Grid de Ofertas Comunitárias */}
      <section id="ofertas" className="courses-section">
        <div className="section-header">
          <h2>Ofertas da Comunidade</h2>
          <p>Conecte-se com pessoas dispostas a compartilhar conhecimento</p>
        </div>

        <div className="courses-grid">
          {destaquesComunidade.map((oferta) => (
            <div key={oferta.id} className="course-card">
              <div className="course-badge">{oferta.categoria}</div>
              <div className="course-image"></div>
              <div className="course-info">
                <h3>{oferta.titulo}</h3>
                <p>{oferta.desc}</p>
                <div className="rating">
                  <span className="ofertante">Por: {oferta.ofertante}</span>
                </div>
                <div className="price-container">
                  <span className="level-badge">Nível: {oferta.nivel}</span>
                </div>
                <button className="btn-enroll">
                  Ver Detalhes <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO POR QUE NÓS? */}
      <section className="features-strip">
        <div className="feature">
          <Clock size={30} />
          <div>
            <h4>Acesso Vitalício</h4>
            <p>Assista quando e onde quiser.</p>
          </div>
        </div>
        <div className="feature">
          <Award size={30} />
          <div>
            <h4>Certificado de Conclusão</h4>
            <p>Válido em todo território nacional.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
