import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const todos = useSelector((state) => state.todos);

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const cardStyle = {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    flex: "1 1 200px"
  };

  return (
    <div
      style={{
        background: "#f4f6f9",
        padding: "30px",
        borderRadius: "12px"
      }}
    >
      <h1>Dashboard</h1>
      <p>Bienvenue dans votre espace de travail.</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "25px"
        }}
      >
        <div style={cardStyle}>
          <h3>Utilisateurs</h3>
          <h2 style={{ color: "#2563eb" }}>{users.length}</h2>
          <Link to="/users">Voir les utilisateurs</Link>
        </div>

        <div style={cardStyle}>
          <h3>Publications</h3>
          <h2 style={{ color: "#7c3aed" }}>{posts.length}</h2>
          <Link to="/posts">Voir les publications</Link>
        </div>

        <div style={cardStyle}>
          <h3>Tâches</h3>
          <h2 style={{ color: "#ea580c" }}>{todos.length}</h2>
          <Link to="/todos">Voir les tâches</Link>
        </div>

        <div style={cardStyle}>
          <h3>Tâches terminées</h3>
          <h2 style={{ color: "#16a34a" }}>{completedTodos}</h2>
          <p>{todos.length - completedTodos} tâches en cours</p>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Link
          to="/users/add"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Ajouter un utilisateur
        </Link>
      </div>
    </div>
  );
}