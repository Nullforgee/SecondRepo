import React from 'react';
import axios from 'axios'; 
import { useDispatch,useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setTodos } from '../Redux/actions';


export default function TodosList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => dispatch(setTodos(response.data)))
            .catch((error) => console.error('Erreur lors de la récupération des tâches :', error));
    }, [dispatch]);

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
    );  
    return (
        <div>
            <h2>Liste des tâches</h2>   
            <input
                type="text"
                placeholder="Rechercher par titre..."
                value={search}  
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: '8px', marginBottom: '15px', width: '300px' }}
            />
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titre</th>  
                        <th>Statut</th>
                    </tr>
                </thead>
                <tbody>     
                    {filteredTodos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? 'Complété' : 'En cours'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 
