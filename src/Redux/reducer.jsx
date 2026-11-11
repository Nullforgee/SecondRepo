const initialState = 
    [ 
{ id: 1, name: "Potion de Soin Mineur", category: "soin", rarity: 
"commune", price: 50, favorite: true },

{ id: 2, name: "Élixir de Vision Arcane", category: "magie", rarity: 
"rare", price: 180, favorite: false },

{ id: 3, name: "Bouclier d'Astralée", category: "protection", rarity: 
"legendaire", price: 420, favorite: true }, 
];
function Reducer(state = initialState, action) {
    switch (action.type) {
        // Les actions seront ajoutées ici.

        default:
            return state;
    }
}

export default Reducer;