import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllOffers, deleteOffer } from "../services/ApiService";
import { useAuth } from "../context/AuthContext";
import { Edit, Trash2, Plus, Eye } from "lucide-react";
import "./UserDashboard.css";

const UserDashboard = () => {
  const { userId } = useAuth();
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserOffers = async () => {
    setLoading(true);
    try {
      const response = await getAllOffers();
      // Filtrar apenas as ofertas do usuário logado
      const userOffers = response.data.filter(offer => offer.userId === userId);
      setOffers(userOffers);
    } catch (error) {
      console.error("Erro ao buscar ofertas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserOffers();
    }
  }, [userId]);

  const handleDelete = async (offerId) => {
    if (window.confirm("Tem certeza que deseja excluir esta oferta?")) {
      try {
        await deleteOffer(offerId);
        setOffers(offers.filter(offer => offer.id !== offerId));
        alert("Oferta excluída com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir oferta:", error);
        alert("Erro ao excluir oferta.");
      }
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Meu Painel</h1>
        <Link to="/offers/create" className="btn-create">
          <Plus size={20} />
          Criar Nova Oferta
        </Link>
      </div>

      <div className="dashboard-content">
        <h2>Minhas Ofertas</h2>

        {loading ? (
          <div className="loading">Carregando suas ofertas...</div>
        ) : offers.length > 0 ? (
          <div className="offers-grid">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="card-badge">{offer.category}</div>
                <div className="card-content">
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-description">
                    {offer.description.length > 100
                      ? `${offer.description.substring(0, 100)}...`
                      : offer.description}
                  </p>
                  <div className="offer-details">
                    <span className="level-badge">Nível: {offer.level}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <Link
                    to={`/offers/${offer.id}`}
                    className="btn-view"
                    title="Ver detalhes"
                  >
                    <Eye size={18} />
                  </Link>
                  <Link
                    to={`/offers/${offer.id}/edit`}
                    className="btn-edit"
                    title="Editar oferta"
                  >
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => handleDelete(offer.id)}
                    className="btn-delete"
                    title="Excluir oferta"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Você ainda não criou nenhuma oferta</h3>
            <p>Comece compartilhando seu conhecimento com a comunidade!</p>
            <Link to="/offers/create" className="btn-create-large">
              <Plus size={24} />
              Criar Minha Primeira Oferta
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;