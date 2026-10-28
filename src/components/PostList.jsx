import { useState, useEffect } from "react";
import axios from "axios";
export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setPosts(response.data))
            .catch((error) => console.error("Erreur lors de la récupération des posts :", error));
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Liste des publications</h2>
            <input
                type="text"
                placeholder="Rechercher par titre ou contenu..."        
        value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: "8px", marginBottom: "15px", width: "300px" }}   
            />
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titre</th>
                        <th>Contenu</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>  
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>   
            </table>
        </div>
    );
}  
