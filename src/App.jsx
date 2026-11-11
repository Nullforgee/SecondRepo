import React from "react";
import UsersList from "./components/UsersList";
import PostList from "./components/PostList";
import TodosList from "./components/TodosList";
import AddUser from "./components/AddUser";
import Dashboard from "./components/Dashboard";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        background: "#f0f0f0",
        marginBottom: "20px",
        display: "flex",
        gap: "20px"
      }}
    >
      <ul>
        ESPACE DE TRAVAIL
        <li>
          <Link to="/">Dashboard</Link>
        </li>
      </ul>

      <ul>
        RESSOURCES API
        <li>
          <Link to="/users">Utilisateurs</Link>
        </li>
        <li>
          <Link to="/users/add">Ajouter un utilisateur</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/todos">Tâches</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
         

          <Route
            path="/users"
            element={
              <>
                <AddUser />
                <UsersList />
              </>
            }
          />

          <Route path="/users/add" element={<AddUser />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/todos" element={<TodosList />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}