import React, { useState } from "react";
function formmulaire(){
    const [nom,setNom] = useState("");
    const [categorie,setCategorie] = useState("");
    const [rarete,setRarete] = useState("");
    const [prix,setPrix] = useState(0);
    return (
        <div>
            <h1>Fabriquer une potion</h1>
            <hr />
            Nom : <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Ex : Philtre de Brume" />
            Categorie :
            <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                <option value="soin">Soin</option>
                <option value="magie">Magie</option>
                <option value="protection">Protection</option>
            </select>
            Rareté :
            <select value={rarete} onChange={(e) => setRarete(e.target.value)}>
                <option value="commune">Commune</option>
                <option value="rare">Rare</option>
                <option value="legendaire">Légendaire</option>
            </select>
            Prix : <input type="number" value={prix} onChange={(e) => setPrix(Number(e.target.value))}   placeholder="Ex : 75" />


        </div>
       
    );
}
export default formmulaire;