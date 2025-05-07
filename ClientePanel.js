import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHistory,
  faChartBar,
  faTruck,
  faShoppingCart,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const ClientePanel = () => {
  const navigate = useNavigate();

  const handleGestionarPerfil = () => {
    navigate("/cliente/perfil");
  };

  const handleVerHistorial = () => {
    navigate("/cliente/ver-transacciones"); 
  };

  const handleGenerarEstadisticas = () => {
    navigate("/cliente/estadisticas");
  };

  const handleSolicitarServicio = () => {
    navigate("/cliente/solicitar-servicio");
  };

  const handleComprarProductos = () => {
    navigate("/cliente/comprar-productos");
  };

  const handleLogout = () => {
    localStorage.clear(); // Limpia todos los datos almacenados en localStorage
    navigate("/"); // Redirige a la página de inicio o login
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Panel de Cliente</h1>
      <p style={styles.subtitle}>Selecciona una opción para continuar:</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleGestionarPerfil} style={styles.button}>
          <FontAwesomeIcon icon={faUser} style={styles.icon} />
          Ver Perfil
        </button>
        <button onClick={handleVerHistorial} style={styles.button}>
          <FontAwesomeIcon icon={faHistory} style={styles.icon} />
          Ver Historial de Compras
        </button>
        <button onClick={handleGenerarEstadisticas} style={styles.button}>
          <FontAwesomeIcon icon={faChartBar} style={styles.icon} />
          Generar Información Estadística
        </button>
        <button onClick={handleSolicitarServicio} style={styles.button}>
          <FontAwesomeIcon icon={faTruck} style={styles.icon} />
          Solicitar Servicio a Domicilio
        </button>
        <button onClick={handleComprarProductos} style={styles.button}>
          <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} />
          Comprar Productos
        </button>
        <button onClick={handleLogout} style={styles.logoutButton}>
          <FontAwesomeIcon icon={faSignOutAlt} style={styles.icon} />
          Salir
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    width: "180px",
    height: "120px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, background-color 0.3s",
  },
  logoutButton: {
    width: "180px",
    height: "120px",
    backgroundColor: "#dc3545", // Rojo para indicar acción de salir
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, background-color 0.3s",
  },
  icon: {
    fontSize: "24px",
    marginBottom: "10px",
  },
};

export default ClientePanel;
