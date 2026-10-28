import React from 'react';  
import UsersList from './components/UsersList';
import PostList from './components/PostList';
import TodosList from './components/TodosList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav style={{ padding: '15px', background: '#f0f0f0', marginBottom: '20px', display: 'flex', gap: '20px' }}>
  
  
    <ul>
    ESPASE DE TRAVAIL
     <li><Link to="/users">Dashboard</Link></li>
    </ul>
    <ul>
    RESSOURCES API
     <li>
      <Link to="/users">Utilisateurs</Link></li>
      <li><Link to="/posts">Posts</Link></li>
      <li><Link to="/todos">Commentaires</Link></li>
      <li><Link to="/todos">Taches</Link></li>
    </ul>
     
    </nav>
  );
}

function Users() {
  return <h2>Gestion des Utilisateurs</h2>;
}

function Posts() {
  return <h2>Gestion des Publications</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/users" element={<UsersList />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/Todos" element={<TodosList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}