import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/actions";

export default function AddUser() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: crypto.randomUUID(),
      name,
      username,
      email,
      address: {
        city
      }
    };

    dispatch(addUser(newUser));

    // Vider les champs après l'ajout
    setName("");
    setUsername("");
    setEmail("");
    setCity("");
  }

  return (
    <div>
      <h2>Ajouter un utilisateur</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Username : </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email : </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Ville : </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}