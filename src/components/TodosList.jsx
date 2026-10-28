import React from 'react';
import axios from 'axios'; 

function TodosList() {
  const [todos, setTodos] = React.useState([]);
  const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => setTodos(response.data))
            .catch((error) => console.error('Erreur lors de la récupération des tâches :', error));
    }, []);

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