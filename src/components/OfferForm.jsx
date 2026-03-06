import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createOffer, updateOffer, getOfferById } from "../services/ApiService";
import { useAuth } from "../context/AuthContext";
import "./OfferForm.css";

const OfferForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { userId } = useAuth();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    level: "Iniciante",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing && id) {
      const loadOffer = async () => {
        try {
          const response = await getOfferById(id);
          setFormData({
            title: response.data.title || "",
            description: response.data.description || "",
            category: response.data.category || "",
            level: response.data.level || "Iniciante",
          });
        } catch (error) {
          console.error("Erro ao carregar oferta:", error);
          alert("Erro ao carregar dados da oferta.");
          navigate("/dashboard");
        }
      };
      loadOffer();
    }
  }, [id, isEditing, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.title.trim() || !formData.description.trim() || !formData.category.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    setLoading(true);
    try {
      if (isEditing) {
        await updateOffer(id, formData);
        alert("Oferta atualizada com sucesso!");
      } else {
        const offerData = {
          ...formData,
          userId: userId,
        };
        await createOffer(offerData);
        alert("Oferta criada com sucesso!");
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro ao salvar oferta:", error);
      alert("Erro ao salvar oferta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="offer-form-container">
      <div className="offer-form-card">
        <h2>{isEditing ? "Editar Oferta" : "Criar Nova Oferta"}</h2>
        <form onSubmit={handleSubmit} className="offer-form">
          <div className="form-group">
            <label htmlFor="title">Título da Oferta *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Aulas de React para Iniciantes"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoria *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="Programação">Programação</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Idiomas">Idiomas</option>
              <option value="Música">Música</option>
              <option value="Esportes">Esportes</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="level">Nível</label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descreva detalhadamente o que você oferece. Inclua sua experiência, metodologia, duração das aulas, etc."
              rows={6}
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn-cancel"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={loading}
            >
              {loading ? "Salvando..." : (isEditing ? "Atualizar Oferta" : "Criar Oferta")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferForm;